import os
import json
import requests
from datetime import datetime, timezone

API_KEY = os.environ["FOOTBALL_API_KEY"]
HEADERS = {"X-Auth-Token": API_KEY}
BASE_URL = "https://api.football-data.org/v4"
WC_ID = 2000

def get_matches():
    r = requests.get(f"{BASE_URL}/competitions/{WC_ID}/matches", headers=HEADERS)
    r.raise_for_status()
    return r.json().get("matches", [])

def get_scorers():
    r = requests.get(f"{BASE_URL}/competitions/{WC_ID}/scorers?limit=10", headers=HEADERS)
    r.raise_for_status()
    return r.json().get("scorers", [])

def build_2026_json(matches):
    result = []
    for m in matches:
        entry = {
            "date": m["utcDate"][:10],
            "time": m["utcDate"][11:16],
            "team1": m["homeTeam"]["shortName"] or m["homeTeam"]["name"],
            "team2": m["awayTeam"]["shortName"] or m["awayTeam"]["name"],
            "score1": m["score"]["fullTime"]["home"],
            "score2": m["score"]["fullTime"]["away"],
            "group": (m.get("group") or "").replace("GROUP_", "") or "KO",
            "status": m["status"]
        }
        result.append(entry)
    return {"rounds": [{"name": "FIFA World Cup 2026", "matches": result}]}

def build_messages_json(matches, scorers):
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    matchs_du_jour = [m for m in matches if m["utcDate"][:10] == today]
    articles = []
    if matchs_du_jour:
        lines = []
        for m in matchs_du_jour:
            h = m["homeTeam"]["shortName"] or m["homeTeam"]["name"]
            a = m["awayTeam"]["shortName"] or m["awayTeam"]["name"]
            sh = m["score"]["fullTime"]["home"]
            sa = m["score"]["fullTime"]["away"]
            if sh is not None:
                lines.append(f"{h} {sh}-{sa} {a}")
            else:
                lines.append(f"{h} vs {a} à {m['utcDate'][11:16]} UTC")
        articles.append({
            "id": f"news-{today}-matches",
            "date": today,
            "badge": "🗓️ AUJOURD'HUI",
            "titre": f"Matchs du {today}",
            "titre_en": f"Matches on {today}",
            "titre_pt": f"Jogos de {today}",
            "texte": " | ".join(lines),
            "texte_en": " | ".join(lines),
            "texte_pt": " | ".join(lines),
            "matchs_du_jour": [{"match": f"{m['homeTeam']['shortName'] or m['homeTeam']['name']} vs {m['awayTeam']['shortName'] or m['awayTeam']['name']}", "heure": m["utcDate"][11:16], "stade": ""} for m in matchs_du_jour]
        })
    if scorers:
        top = scorers[:5]
        lines = [f"{s['player']['name']} ({s['team']['shortName'] or s['team']['name']}) - {s['goals']} buts" for s in top]
        articles.append({
            "id": f"news-{today}-scorers",
            "date": today,
            "badge": "⚽ STATS",
            "titre": "Top buteurs",
            "titre_en": "Top scorers",
            "titre_pt": "Artilheiros",
            "texte": " | ".join(lines),
            "texte_en": " | ".join(lines),
            "texte_pt": " | ".join(lines)
        })
    existing = []
    try:
        with open("messages.json", "r", encoding="utf-8") as f:
            existing = json.load(f)
            if isinstance(existing, dict):
                existing = existing.get("articles", [])
    except Exception:
        pass
    existing_ids = {a.get("id") for a in existing if a.get("id")}
    for a in articles:
        if a["id"] not in existing_ids:
            existing.insert(0, a)
    return {"date": today, "articles": existing[:30]}

def main():
    print("Récupération des données...")
    matches = get_matches()
    scorers = get_scorers()
    data_2026 = build_2026_json(matches)
    with open("2026.json", "w", encoding="utf-8") as f:
        json.dump(data_2026, f, ensure_ascii=False, indent=2)
    print("✅ 2026.json mis à jour")
    messages = build_messages_json(matches, scorers)
    with open("messages.json", "w", encoding="utf-8") as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)
    print("✅ messages.json mis à jour")

if __name__ == "__main__":
    main()

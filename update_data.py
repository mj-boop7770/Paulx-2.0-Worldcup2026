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

def get_standings():
    r = requests.get(f"{BASE_URL}/competitions/{WC_ID}/standings", headers=HEADERS)
    r.raise_for_status()
    return r.json().get("standings", [])

def get_scorers():
    r = requests.get(f"{BASE_URL}/competitions/{WC_ID}/scorers?limit=10", headers=HEADERS)
    r.raise_for_status()
    return r.json().get("scorers", [])

def build_2026_json(matches, standings):
    groupes = {}
    for match in matches:
        group = match.get("group", "")
        if not group:
            continue
        key = group.replace("GROUP_", "Groupe ")
        if key not in groupes:
            groupes[key] = {"matchs": [], "classement": []}
        home = match["homeTeam"]["shortName"] or match["homeTeam"]["name"]
        away = match["awayTeam"]["shortName"] or match["awayTeam"]["name"]
        score_home = match["score"]["fullTime"]["home"]
        score_away = match["score"]["fullTime"]["away"]
        entry = {
            "date": match["utcDate"][:10],
            "heure": match["utcDate"][11:16],
            "domicile": home,
            "exterieur": away,
            "statut": match["status"],
        }
        if score_home is not None:
            entry["score"] = {"domicile": score_home, "exterieur": score_away}
        groupes[key]["matchs"].append(entry)
    for standing in standings:
        group = standing.get("group", "")
        key = group.replace("GROUP_", "Groupe ")
        if key not in groupes:
            continue
        for row in standing.get("table", []):
            groupes[key]["classement"].append({
                "equipe": row["team"]["shortName"] or row["team"]["name"],
                "pts": row["points"],
                "j": row["playedGames"],
                "g": row["won"],
                "n": row["draw"],
                "p": row["lost"],
                "bp": row["goalsFor"],
                "bc": row["goalsAgainst"],
                "diff": row["goalDifference"]
            })
    return {
        "mise_a_jour": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "competition": "FIFA World Cup 2026",
        "groupes": groupes
    }

def build_messages_json(matches, scorers):
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    matchs_du_jour = [m for m in matches if m["utcDate"][:10] == today]
    articles = []
    if matchs_du_jour:
        lines_fr, lines_en, lines_pt = [], [], []
        for m in matchs_du_jour:
            home = m["homeTeam"]["shortName"] or m["homeTeam"]["name"]
            away = m["awayTeam"]["shortName"] or m["awayTeam"]["name"]
            heure = m["utcDate"][11:16]
            sh = m["score"]["fullTime"]["home"]
            sa = m["score"]["fullTime"]["away"]
            if sh is not None:
                lines_fr.append(f"{home} {sh}-{sa} {away}")
                lines_en.append(f"{home} {sh}-{sa} {away}")
                lines_pt.append(f"{home} {sh}-{sa} {away}")
            else:
                lines_fr.append(f"{home} vs {away} à {heure} UTC")
                lines_en.append(f"{home} vs {away} at {heure} UTC")
                lines_pt.append(f"{home} vs {away} às {heure} UTC")
        articles.append({
            "id": f"news-{today}-matches",
            "date": today,
            "categorie": "resultats",
            "titre_fr": f"Matchs du {today}",
            "titre_en": f"Matches on {today}",
            "titre_pt": f"Jogos de {today}",
            "texte_fr": " | ".join(lines_fr),
            "texte_en": " | ".join(lines_en),
            "texte_pt": " | ".join(lines_pt)
        })
    if scorers:
        top = scorers[:5]
        lines = [f"{s['player']['name']} ({s['team']['shortName'] or s['team']['name']}) - {s['goals']} buts" for s in top]
        articles.append({
            "id": f"news-{today}-scorers",
            "date": today,
            "categorie": "stats",
            "titre_fr": "Top buteurs",
            "titre_en": "Top scorers",
            "titre_pt": "Artilheiros",
            "texte_fr": " | ".join(lines),
            "texte_en": " | ".join(lines),
            "texte_pt": " | ".join(lines)
        })
    existing = []
    try:
        with open("data/messages.json", "r", encoding="utf-8") as f:
            existing = json.load(f)
    except Exception:
        pass
    existing_ids = {a["id"] for a in existing}
    for a in articles:
        if a["id"] not in existing_ids:
            existing.insert(0, a)
    return existing[:30]

def main():
    print("Récupération des données...")
    matches = get_matches()
    standings = get_standings()
    scorers = get_scorers()
    data_2026 = build_2026_json(matches, standings)
    os.makedirs("data", exist_ok=True)
    with open("data/2026.json", "w", encoding="utf-8") as f:
        json.dump(data_2026, f, ensure_ascii=False, indent=2)
    print("✅ data/2026.json mis à jour")
    messages = build_messages_json(matches, scorers)
    with open("data/messages.json", "w", encoding="utf-8") as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)
    print("✅ data/messages.json mis à jour")

if __name__ == "__main__":
    main()

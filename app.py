import requests
import pandas as pd
import json

class FootballDataHub:
    # Tes 4 sources GitHub + Balldontlie centralisées
    SOURCES = {
        "1_datasets_csv": "https://raw.githubusercontent.com/datasets/football-datasets/main/english-premier-league/latest.csv",
        "2_openfootball_json": "https://raw.githubusercontent.com/openfootball/football.json/main/england/2025-26/1-premierleague.json",
        "3_footballcsv": "https://raw.githubusercontent.com/footballcsv/england/master/premier-league.csv",
        "4_statsbomb": "https://raw.githubusercontent.com/statsbomb/open-data/main/data/matches/women/2023-08-02.csv",
        "5_balldontlie": "https://api.balldontlie.io/v1/football/fixtures?league=world_cup&season=2026"
    }

    def __init__(self):
        self.web_json_data = {
            "rounds": [{"name": "World Cup & Leagues Data", "matches": []}]
        }

    # Extraction Source 2 (Le JSON d'OpenFootball)
    def extraire_source_openfootball(self):
        print("📥 Extraction de la Source 2 (OpenFootball)...")
        try:
            res = requests.get(self.SOURCES["2_openfootball_json"], timeout=10)
            if res.status_code == 200:
                data = res.json()
                for round_data in data.get("rounds", []):
                    for m in round_data.get("matches", []):
                        self.web_json_data["rounds"][0]["matches"].append({
                            "date": m.get("date", "2026-06-12"),
                            "team1": m["team1"]["name"] if isinstance(m["team1"], dict) else m["team1"],
                            "team2": m["team2"]["name"] if isinstance(m["team2"], dict) else m["team2"],
                            "score1": m.get("score1"),
                            "score2": m.get("score2"),
                            "group": round_data.get("name", "Match"),
                            "stadium": "Stade Officiel"
                        })
                return True
        except Exception as e:
            print(f"❌ Échec Source 2: {e}")
        return False

    # Extraction Source 5 (L'API Balldontlie pour le Direct 2026)
    def extraire_source_balldontlie(self):
        print("🛰️ Extraction de la Source 5 (Balldontlie API)...")
        try:
            res = requests.get(self.SOURCES["5_balldontlie"], timeout=10)
            if res.status_code == 200:
                fixtures = res.json().get('data', [])
                for f in fixtures:
                    self.web_json_data["rounds"][0]["matches"].append({
                        "date": f.get('date', '').split("T")[0],
                        "team1": f.get('home_team', {}).get('name'),
                        "team2": f.get('away_team', {}).get('name'),
                        "score1": f.get('home_score'),
                        "score2": f.get('away_score'),
                        "group": f.get('group', 'ALL'),
                        "stadium": f.get('stadium', {}).get('name', 'Stade Officiel')
                    })
                return True
        except Exception as e:
            print(f"❌ Échec Source 5: {e}")
        return False

    def sauvegarder_le_match_json(self):
        with open("./2026.json", "w", encoding="utf-8") as f:
            json.dump(self.web_json_data, f, indent=2, ensure_ascii=False)
        print(f"💾 Fichier 2026.json généré avec {len(self.web_json_data['rounds'][0]['matches'])} matchs.")

def main():
    print("=" * 70)
    print("💥 CHARGEMENT DES 5 MUNITIONS DE L'APPLI")
    print("=" * 70)
    
    hub = FootballDataHub()
    
    # On tente d'abord le direct de Balldontlie (Source 5)
    succes = hub.extraire_source_balldontlie()
    
    # Si Balldontlie n'a rien renvoyé, on prend le relais avec OpenFootball (Source 2)
    if not succes:
        print("⚠️ Source 5 indisponible. Basculement automatique sur la Source 2...")
        hub.extraire_source_openfootball()
        
    hub.sauvegarder_le_match_json()
    print("=" * 70)

if __name__ == "__main__":
    main()
                       

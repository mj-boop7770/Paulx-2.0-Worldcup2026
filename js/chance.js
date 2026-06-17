// js/chance.js - MUJOS OCTOPUS 🐙 v3.0 L'ORACLE INTELLIGENTE
// Scrape 2026.json + messages.json + Real Data Analysis

let matchesData = [];
let teamStats = {};
let newsData = [];
let expertPredictions = {};

// 🔥 CHARGER TOUTES LES DONNÉES AU DÉMARRAGE
async function loadMujosDatabase() {
    console.log("🐙 MUJOS Initialize le super-cerveau...");
    try {
        // Charger les matchs
        const matchesResponse = await fetch('2026.json');
        const matchesJson = await matchesResponse.json();
        matchesData = matchesJson.rounds[0].matches;

        // Charger les news + predictions des experts
        const newsResponse = await fetch('messages.json');
        const newsJson = await newsResponse.json();
        newsData = newsJson.articles;
        
        // Parser les prédictions des experts
        parseExpertPredictions();

        // Analyser toutes les stats des équipes
        analyzeTeamStats();

        console.log("✅ MUJOS READY!");
        console.log("📊 Matchs chargés:", matchesData.length);
        console.log("📰 News chargées:", newsData.length);
        console.log("🎯 Prédictions experts:", Object.keys(expertPredictions).length);
    } catch (error) {
        console.error("❌ Erreur MUJOS:", error);
    }
}

// 📰 EXTRAIRE LES PRÉDICTIONS DES EXPERTS
function parseExpertPredictions() {
    newsData.forEach(article => {
        if (article.predictions) {
            article.predictions.forEach(pred => {
                const key = `${pred.match}`;
                expertPredictions[key] = {
                    expert: pred.expert,
                    prediction: pred.prediction,
                    confidence: parseInt(pred.confiance)
                };
            });
        }
    });
}

// 📊 MUJOS ANALYSE TOUTES LES ÉQUIPES
function analyzeTeamStats() {
    matchesData.forEach(match => {
        // Créer les équipes
        if (!teamStats[match.team1]) {
            teamStats[match.team1] = {
                name: match.team1,
                matches: 0,
                wins: 0,
                draws: 0,
                losses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                lastResults: [],
                lastMatches: [],
                isHot: false, // Si l'équipe est en feu
                trend: "neutral"
            };
        }
        if (!teamStats[match.team2]) {
            teamStats[match.team2] = {
                name: match.team2,
                matches: 0,
                wins: 0,
                draws: 0,
                losses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                lastResults: [],
                lastMatches: [],
                isHot: false,
                trend: "neutral"
            };
        }

        // Si le match est terminé
        if (match.status === "Terminé" && match.score1 !== null && match.score2 !== null) {
            // Sauvegarder le match
            teamStats[match.team1].lastMatches.push({
                opponent: match.team2,
                score: `${match.score1}-${match.score2}`,
                date: match.date,
                group: match.group
            });
            teamStats[match.team2].lastMatches.push({
                opponent: match.team1,
                score: `${match.score2}-${match.score1}`,
                date: match.date,
                group: match.group
            });

            // Stats team1
            teamStats[match.team1].matches++;
            teamStats[match.team1].goalsFor += match.score1;
            teamStats[match.team1].goalsAgainst += match.score2;
            
            // Stats team2
            teamStats[match.team2].matches++;
            teamStats[match.team2].goalsFor += match.score2;
            teamStats[match.team2].goalsAgainst += match.score1;

            // Résultats
            if (match.score1 > match.score2) {
                teamStats[match.team1].wins++;
                teamStats[match.team2].losses++;
                teamStats[match.team1].lastResults.push('W');
                teamStats[match.team2].lastResults.push('L');
            } else if (match.score1 < match.score2) {
                teamStats[match.team2].wins++;
                teamStats[match.team1].losses++;
                teamStats[match.team2].lastResults.push('W');
                teamStats[match.team1].lastResults.push('L');
            } else {
                teamStats[match.team1].draws++;
                teamStats[match.team2].draws++;
                teamStats[match.team1].lastResults.push('D');
                teamStats[match.team2].lastResults.push('D');
            }

            // Garder les 5 derniers
            if (teamStats[match.team1].lastResults.length > 5) {
                teamStats[match.team1].lastResults.shift();
            }
            if (teamStats[match.team2].lastResults.length > 5) {
                teamStats[match.team2].lastResults.shift();
            }
            
            // Keeper les 3 derniers matchs
            if (teamStats[match.team1].lastMatches.length > 3) {
                teamStats[match.team1].lastMatches.shift();
            }
            if (teamStats[match.team2].lastMatches.length > 3) {
                teamStats[match.team2].lastMatches.shift();
            }
        }
    });

    // Déterminer les équipes "hot" selon les news
    markHotTeams();
}

// 🔥 MARQUER LES ÉQUIPES EN FEU SELON LES NEWS
function markHotTeams() {
    // Argentine = HOT selon les messages
    if (teamStats['Argentine']) {
        teamStats['Argentine'].isHot = true;
        teamStats['Argentine'].trend = "dominant";
    }
    
    // Norvège = HOT selon les messages
    if (teamStats['Norvège']) {
        teamStats['Norvège'].isHot = true;
        teamStats['Norvège'].trend = "explosive";
    }

    // Autriche = HOT (victoire 3-1)
    if (teamStats['Autriche']) {
        teamStats['Autriche'].isHot = true;
        teamStats['Autriche'].trend = "strong";
    }
}

// 🐙 MUJOS VOTE ET PRÉDIT
function castVote(matchId, selectedTeam, home, away) {
    // 1. Sauvegarder le vote
    localStorage.setItem('vote_' + matchId, selectedTeam);

    // 2. MUJOS ANALYSE ET PRÉDIT
    const prediction = mujosPredicts(home, away);

    // 3. Afficher la prédiction complète
    const expertAdvice = getExpertAdvice(home, away);
    const message = `Vote validé pour ${selectedTeam}!\n\n🐙 MUJOS Oracle Prédit:\n\n${prediction.prediction}\n\nProbabilité:\n${prediction.homeTeam}: ${prediction.homeProba}%\n${prediction.awayTeam}: ${prediction.awayProba}%\n\nConfiance: ${prediction.confidence}%\nImprévue: ${prediction.unpredictability}%\n\n${expertAdvice}`;
    
    alert(message);

    // 4. Sauvegarder
    localStorage.setItem('prediction_' + matchId, JSON.stringify(prediction));
    
    console.log("🐙 MUJOS Prédiction:", prediction);
}

// 🎯 CONSEILS DES EXPERTS
function getExpertAdvice(home, away) {
    const key = `${home} - ${away}`;
    
    if (expertPredictions[key]) {
        const expert = expertPredictions[key];
        return `\n🎤 Expert: ${expert.expert}\n📊 Prédit: ${expert.prediction}\n💪 Confiance: ${expert.confidence}%`;
    }
    
    // Fallback: conseil basé sur les stats
    const homeStats = teamStats[home];
    const awayStats = teamStats[away];
    
    if (homeStats && homeStats.isHot) {
        return `\n🔥 ${home} est EN FEU! Trend: ${homeStats.trend}`;
    }
    if (awayStats && awayStats.isHot) {
        return `\n🔥 ${away} est EN FEU! Trend: ${awayStats.trend}`;
    }
    
    return "";
}

// 🧠 LE CERVEAU DE MUJOS
function mujosPredicts(home, away) {
    // 📖 ÉTAPE 1: Récupérer les stats
    const homeStats = teamStats[home] || createDefaultStats(home);
    const awayStats = teamStats[away] || createDefaultStats(away);

    // 🎯 ÉTAPE 2: Calculer la force de chaque équipe
    const homeStrength = calculateTeamStrength(homeStats);
    const awayStrength = calculateTeamStrength(awayStats);

    // 📊 ÉTAPE 3: Calculer les probabilités
    const totalStrength = homeStrength + awayStrength;
    let homeProba = Math.round((homeStrength / totalStrength) * 100);
    homeProba = Math.max(20, Math.min(80, homeProba));

    // 🎲 ÉTAPE 4: Ajouter l'IMPRÉVUE
    const unpredictability = getUnpredictability();
    
    // 15% chance que l'imprévue change le résultat
    if (Math.random() < 0.15) {
        homeProba = 100 - homeProba;
    }

    const awayProba = 100 - homeProba;

    // ⚽ ÉTAPE 5: Calculer les buts
    const goals = predictGoals(homeStats, awayStats, homeProba);

    return {
        homeTeam: home,
        awayTeam: away,
        homeProba: homeProba,
        awayProba: awayProba,
        prediction: `${home} ${goals.home} - ${goals.away} ${away}`,
        unpredictability: unpredictability,
        confidence: Math.abs(homeProba - 50) + 40,
        homeStats: homeStats,
        awayStats: awayStats,
        homeHot: homeStats.isHot,
        awayHot: awayStats.isHot
    };
}

// 🔍 CALCULER LA FORCE D'UNE ÉQUIPE
function calculateTeamStrength(stats) {
    if (stats.matches === 0) return 50;

    // Facteurs:
    const winRate = (stats.wins / stats.matches) * 100;
    const goalDifference = stats.goalsFor - stats.goalsAgainst;
    const avgGoalsFor = (stats.goalsFor / stats.matches) * 20;
    const recentForm = getRecentForm(stats.lastResults) * 25;
    
    // Bonus si en feu
    const hotBonus = stats.isHot ? 8 : 0;

    // Score composite
    const strength = (winRate * 0.35) + 
                     (Math.min(goalDifference, 10) * 3) +
                     (avgGoalsFor * 0.35) +
                     (recentForm * 0.25) +
                     hotBonus;

    return Math.max(20, Math.min(90, strength));
}

// 📈 FORME RÉCENTE
function getRecentForm(lastResults) {
    if (lastResults.length === 0) return 0.5;
    
    let points = 0;
    lastResults.forEach((result, index) => {
        const weight = (index + 1) / lastResults.length;
        if (result === 'W') points += 3 * weight;
        if (result === 'D') points += 1 * weight;
    });
    
    return points / (3 * (lastResults.length + 1));
}

// 🎲 IMPRÉVUE - Facteur surprise (5-30%)
function getUnpredictability() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    const baseRandom = 5 + Math.random() * 25;
    
    const timeMultiplier = (hour > 22 || hour < 6) ? 1.2 : 0.9;
    const dayMultiplier = (day === 0 || day === 6) ? 1.15 : 0.95;
    
    return Math.round(baseRandom * timeMultiplier * dayMultiplier);
}

// ⚽ PRÉDIRE LES BUTS
function predictGoals(homeStats, awayStats, homeProba) {
    const homeAttackScore = homeStats.goalsFor / Math.max(homeStats.matches, 1);
    const awayAttackScore = awayStats.goalsFor / Math.max(awayStats.matches, 1);

    let homeGoals = Math.round(homeAttackScore + (homeProba > 55 ? 0.5 : -0.3));
    let awayGoals = Math.round(awayAttackScore + (homeProba < 45 ? 0.5 : -0.3));

    homeGoals = Math.max(0, homeGoals);
    awayGoals = Math.max(0, awayGoals);

    // Éviter les 0-0
    if (homeGoals === 0 && awayGoals === 0 && Math.random() > 0.15) {
        homeGoals = Math.random() > 0.5 ? 1 : 0;
        awayGoals = Math.random() > 0.5 ? 1 : 0;
    }

    return {
        home: homeGoals,
        away: awayGoals
    };
}

// 🤷 STATS PAR DÉFAUT
function createDefaultStats(teamName) {
    return {
        name: teamName,
        matches: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        lastResults: [],
        lastMatches: [],
        isHot: false,
        trend: "neutral"
    };
}

// 🚀 DÉMARRER MUJOS
window.addEventListener('load', () => {
    loadMujosDatabase();
});

// 📱 DEBUG
function mujosDebug() {
    console.log("🐙 MUJOS STATUS:");
    console.log("📊 Équipes analysées:", Object.keys(teamStats).length);
    console.log("🔥 Équipes HOT:", Object.values(teamStats).filter(t => t.isHot).map(t => t.name));
    console.log("📰 Articles chargés:", newsData.length);
    console.log("🎤 Prédictions experts:", Object.keys(expertPredictions).length);
    console.log("📊 Sample team (France):", teamStats['France']);
}

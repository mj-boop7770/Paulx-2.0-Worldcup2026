// js/chance.js - Le cerveau de MUJOS

function castVote(matchId, selectedTeam, home, away) {
    // 1. Sauvegarde le vote dans le téléphone
    localStorage.setItem('vote_' + matchId, selectedTeam);
    
    // 2. MUJOS fait sa prédiction (50/50 pour le moment)
    const prediction = Math.random() < 0.5 ? home : away;
    
    // 3. Message de confirmation simple
    alert("Vote validé pour " + selectedTeam + "!\n\n🐙 MUJOS prédit : " + prediction);
    
    console.log("Vote enregistré pour le match " + matchId + " : " + selectedTeam);
}

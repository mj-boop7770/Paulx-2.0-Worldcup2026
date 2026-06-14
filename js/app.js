function initGroups() {
    const c = document.getElementById('gg'); 
    if (!c) return; 
    c.innerHTML = "";
    
    if (typeof worldCupData === 'undefined' || !worldCupData.groups) return;
    
    const t = traductions[langueActuelle] || traductions['fr'];
    const prefixeGroupe = langueActuelle === 'ar' ? t.grp : "GROUP ";

    for (const [letter, teams] of Object.entries(worldCupData.groups)) {
        let h = `<div class="card"><div class="glabel">${prefixeGroupe}${letter}</div>`;
        
        teams.forEach(tTeam => {
            // Sécurité : Vérifie si la traduction du pays existe, sinon garde le nom de base
            const nomTraduit = (t.pays && t.pays[tTeam.name]) ? t.pays[tTeam.name] : tTeam.name;
            
            h += `<div class="trow" onclick="rechercherPaysDepuisGroupe('${tTeam.name}')">
                    <span>${nomTraduit}</span>
                    <span class="rk">#${tTeam.fifa_rank}</span>
                  </div>`;
        });
        c.innerHTML += h + `</div>`;
    }
}

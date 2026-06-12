async function afficherMatchs() {
    const listContainer = document.getElementById('matchlist');
    if (!listContainer) return;
    
    listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Lecture des munitions locales...</p>";

    try {
        const response = await fetch('./2026.json');
        if (!response.ok) throw new Error("Le fichier de données centralisé n'existe pas.");
        
        const data = await response.json();
        listContainer.innerHTML = "";

        let matches = data.rounds[0].matches;

        // Filtrage intelligent
        const matchesFiltrés = matches.filter(m => {
            if (filtreActuel === "ALL") return true;
            return m.group.toString().toUpperCase().includes(filtreActuel);
        });

        if (matchesFiltrés.length === 0) {
            listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Aucune donnée pour ce filtre.</p>";
            return;
        }

        matchesFiltrés.forEach(m => {
            let scoreHTML = `<span class="mresult">VS</span>`;
            let statusBadge = `<span class="mgroup">${m.group}</span>`;
            
            if (m.score1 !== undefined && m.score1 !== null) {
                statusBadge = `<span class="mgroup" style="background:#06B6D422; color:#06B6D4;">SCORE</span>`;
                scoreHTML = `<span class="mresult" style="color:#F59E0B;">${m.score1} - ${m.score2}</span>`;
            }

            listContainer.innerHTML += `
                <div class="mcard">
                    <div class="mdate">${m.date}</div>
                    <div class="mteams">
                        <span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team1}')">${m.team1}</span>
                        ${scoreHTML}
                        <span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team2}')">${m.team2}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:.4rem;">
                        <div class="mvenue">${m.stadium}</div>
                        ${statusBadge}
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error(error);
        listContainer.innerHTML = `<p style='color:#EF4444; padding: 2rem;'>Erreur de chargement : ${error.message}</p>`;
    }
                }
                            

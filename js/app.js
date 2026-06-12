// ==========================================
// 3. ONGLET SCHEDULE : CALENDRIER AUTOMATIQUE EN DIRECT
// ==========================================
let filtreActuel = "ALL";

function initSchedule() {
    initFilters();
    afficherMatchs();
}

function initFilters() {
    const filterContainer = document.getElementById('mfilter');
    if (!filterContainer || filterContainer.children.length > 0) return;

    const groupes = ["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    groupes.forEach(g => {
        const btn = document.createElement('button');
        btn.innerText = g === "ALL" ? "TOUT" : "GRP " + g;
        if (g === filtreActuel) btn.classList.add('active');
        
        btn.onclick = function() {
            document.querySelectorAll('.mfilter button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtreActuel = g;
            afficherMatchs();
        };
        filterContainer.appendChild(btn);
    });
}

async function afficherMatchs() {
    const listContainer = document.getElementById('matchlist');
    if (!listContainer) return;
    
    // Message de chargement pendant la récupération sur GitHub/API
    listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Connexion au serveur OpenSource de la Coupe du Monde...</p>";

    try {
        // Récupération des vrais scores en direct
        const response = await fetch('https://worldcupjson.net/matches');
        const data = await response.json();
        
        listContainer.innerHTML = ""; // On vide pour afficher

        // Filtrer les matchs selon le groupe sélectionné
        const matchesFiltrés = data.filter(m => filtreActuel === "ALL" || m.group === filtreActuel);

        if (matchesFiltrés.length === 0) {
            listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Aucun match trouvé.</p>";
            return;
        }

        matchesFiltrés.forEach(m => {
            // Conversion automatique à l'heure locale du téléphone
            const dateOption = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const dateLocale = new Date(m.datetime).toLocaleDateString('fr-FR', dateOption);

            // Gestion du badge de statut (Terminé, En Direct, À venir)
            let statusBadge = `<span class="mgroup">GROUPE ${m.group}</span>`;
            let scoreHTML = `<span class="mresult">VS</span>`;

            if (m.status === "completed") {
                statusBadge = `<span class="mgroup" style="background:#06B6D422; color:#06B6D4;">TERMINÉ</span>`;
                scoreHTML = `<span class="mresult" style="color:#F59E0B;">${m.home_team_country} ${m.home_team.goals} - ${m.away_team.goals} ${m.away_team_country}</span>`;
            } else if (m.status === "in_progress") {
                statusBadge = `<span class="mgroup" style="background:#EF444422; color:#EF4444; animation: pulse 1.5s infinite;">LIVE</span>`;
                scoreHTML = `<span class="mresult" style="color:#EF4444;">${m.home_team_country} ${m.home_team.goals} - ${m.away_team.goals} ${m.away_team_country}</span>`;
            }

            listContainer.innerHTML += `
                <div class="mcard">
                    <div class="mdate">${dateLocale.toUpperCase()}</div>
                    <div class="mteams">
                        <span>${m.home_team.country}</span>
                        ${scoreHTML}
                        <span>${m.away_team.country}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:.4rem;">
                        <div class="mvenue">${m.stadium} · ${m.venue}</div>
                        ${statusBadge}
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Erreur API:", error);
        listContainer.innerHTML = "<p style='color:#EF4444; padding: 2rem;'>Impossible de charger les scores en direct. Vérifie ta connexion Internet.</p>";
    }
}

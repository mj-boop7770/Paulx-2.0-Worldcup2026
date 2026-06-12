async function afficherMatchs() {
    const listContainer = document.getElementById('matchlist');
    if (!listContainer) return;
    
    listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Récupération des scores réels depuis GitHub...</p>";

    // LISTE DES SOURCES GITHUB FIABLES ET EN OPEN SOURCE
    const sources = [
        "https://raw.githubusercontent.com/openfootball/world-cup/master/2026/2026.json",
        "https://raw.githubusercontent.com/jokecamp/FootballData/master/world-cup-2026.json"
    ];

    let data = null;

    // On teste les sources une par une automatiquement
    for (let url of sources) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                data = await response.json();
                break; // Super ! On a trouvé les vraies données, on arrête la recherche
            }
        } catch (e) {
            console.log("Source échouée, tentative avec la suivante...");
        }
    }

    // Si aucune source GitHub ne répond
    if (!data || !data.matches) {
        listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Aucun calendrier réel trouvé sur les dépôts GitHub actuellement.</p>";
        return;
    }

    listContainer.innerHTML = "";

    // Filtrage des vrais matchs selon le groupe sélectionné (ALL ou A, B, C...)
    const matchesFiltrés = data.matches.filter(m => filtreActuel === "ALL" || m.group === filtreActuel);

    if (matchesFiltrés.length === 0) {
        listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Aucun match trouvé pour ce groupe.</p>";
        return;
    }

    // Affichage dynamique des vrais matchs trouvés
    matchesFiltrés.forEach(m => {
        const dateOption = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const dateLocale = new Date(m.datetime || m.date).toLocaleDateString('fr-FR', dateOption);

        let statusBadge = `<span class="mgroup">GROUPE ${m.group}</span>`;
        let scoreHTML = `<span class="mresult">VS</span>`;

        // Gestion dynamique des scores réels fournis par le JSON GitHub
        if (m.status === "completed" || m.home_team.goals !== null) {
            statusBadge = `<span class="mgroup" style="background:#06B6D422; color:#06B6D4;">TERMINÉ</span>`;
            scoreHTML = `<span class="mresult" style="color:#F59E0B;">${m.home_team.goals} - ${m.away_team.goals}</span>`;
        } else if (m.status === "in_progress" || m.status === "live") {
            statusBadge = `<span class="mgroup" style="background:#EF444422; color:#EF4444;">LIVE</span>`;
            scoreHTML = `<span class="mresult" style="color:#EF4444;">${m.home_team.goals} - ${m.away_team.goals}</span>`;
        }

        listContainer.innerHTML += `
            <div class="mcard">
                <div class="mdate">${dateLocale.toUpperCase()}</div>
                <div class="mteams">
                    <span>${m.home_team.name || m.home_team.country}</span>
                    ${scoreHTML}
                    <span>${m.away_team.name || m.away_team.country}</span>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:.4rem;">
                    <div class="mvenue">${m.stadium || m.stadium_id || "Stade"} · ${m.venue || "Ville"}</div>
                    ${statusBadge}
                </div>
            </div>
        `;
    });
        }

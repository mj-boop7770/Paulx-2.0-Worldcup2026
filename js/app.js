// ==========================================
// 1. GESTION DES ONGLETS (NAVIGATION)
// ==========================================
function tab(sectionId, btn) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    btn.classList.add('active');

    if (sectionId === 'groups') initGroups();
    if (sectionId === 'schedule') initSchedule();
}

// ==========================================
// 2. ONGLET GROUPS : AFFICHAGE DYNAMIQUE
// ==========================================
function initGroups() {
    const container = document.getElementById('gg');
    if (!container) return;
    container.innerHTML = "";

    if (typeof worldCupData === 'undefined' || !worldCupData.groups) {
        container.innerHTML = "<p style='color:#94A3B8; padding:1rem;'>Données des groupes indisponibles.</p>";
        return;
    }

    for (const [groupLetter, teams] of Object.entries(worldCupData.groups)) {
        let cardHTML = `<div class="card"><div class="glabel">GROUP ${groupLetter}</div>`;
        teams.forEach(team => {
            cardHTML += `
                <div class="trow" onclick="rechercherPaysDepuisGroupe('${team.name}')">
                    <span>${team.name}</span>
                    <span class="rk">#${team.fifa_rank}</span>
                </div>
            `;
        });
        cardHTML += `</div>`;
        container.innerHTML += cardHTML;
    }
}

function rechercherPaysDepuisGroupe(countryName) {
    const dossierBtn = document.querySelector("nav button[onclick*='dossier']");
    const inputField = document.getElementById('di');
    if (inputField) inputField.value = countryName;
    tab('dossier', dossierBtn);
    dos();
}

// ==========================================
// 3. ONGLET SCHEDULE : CALENDRIER UNIVERSEL (5 SOURCES)
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
    
    listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Lecture des munitions locales...</p>";

    try {
        // Lecture directe du fichier mis à jour par ton script Python multi-sources
        const response = await fetch('./2026.json');
        if (!response.ok) throw new Error("Le fichier de données centralisé (2026.json) n'existe pas. Lance d'abord ton script Python.");
        
        const data = await response.json();
        listContainer.innerHTML = "";

        if (!data.rounds || !data.rounds[0] || !data.rounds[0].matches) {
            throw new Error("Structure de fichier JSON invalide.");
        }

        let matches = data.rounds[0].matches;

        // Filtrage intelligent selon la source sélectionnée
        const matchesFiltrés = matches.filter(m => {
            if (filtreActuel === "ALL") return true;
            const groupText = m.group ? m.group.toString().toUpperCase() : "";
            return groupText.includes(filtreActuel);
        });

        if (matchesFiltrés.length === 0) {
            listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Aucune donnée pour ce filtre.</p>";
            return;
        }

        matchesFiltrés.forEach(m => {
            let scoreHTML = `<span class="mresult">VS</span>`;
            let statusBadge = `<span class="mgroup">${m.group}</span>`;
            
            // Si le match a commencé ou est terminé (les scores ne sont pas null)
            if (m.score1 !== undefined && m.score1 !== null && m.score2 !== undefined && m.score2 !== null) {
                statusBadge = `<span class="mgroup" style="background:#06B6D422; color:#06B6D4;">DIRECT / FIN</span>`;
                scoreHTML = `<span class="mresult" style="color:#F59E0B;">${m.score1} - ${m.score2}</span>`;
            }

            listContainer.innerHTML += `
                <div class="mcard">
                    <div class="mdate">${m.date || "DATE INCONNUE"}</div>
                    <div class="mteams">
                        <span style="cursor:pointer; font-weight:500;" onclick="rechercherPaysDepuisGroupe('${m.team1}')">${m.team1}</span>
                        ${scoreHTML}
                        <span style="cursor:pointer; font-weight:500;" onclick="rechercherPaysDepuisGroupe('${m.team2}')">${m.team2}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:.4rem;">
                        <div class="mvenue">${m.stadium || "Stade Officiel"}</div>
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

// ==========================================
// 4. ONGLET PREDICT : L'ORACLE DE MUJOS
// ==========================================
function initPredictSelectors() {
    const selectA = document.getElementById('ta');
    const selectB = document.getElementById('tb');
    if (!selectA || !selectB || selectA.children.length > 0) return;

    if (typeof worldCupData === 'undefined' || !worldCupData.groups) return;

    let toutesLesEquipes = [];
    for (const teams of Object.values(worldCupData.groups)) {
        teams

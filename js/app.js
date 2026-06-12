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
    document.getElementById('di').value = countryName;
    tab('dossier', dossierBtn);
    dos();
}

// ==========================================
// 3. ONGLET SCHEDULE : CALENDRIER EN DIRECT VIA GITHUB/API
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
    
    listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Récupération des scores réels en direct...</p>";

    try {
        const response = await fetch('https://worldcupjson.net/matches');
        const data = await response.json();
        listContainer.innerHTML = "";

        const matchesFiltrés = data.filter(m => filtreActuel === "ALL" || m.group === filtreActuel);

        if (matchesFiltrés.length === 0) {
            listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Aucun match trouvé pour ce groupe.</p>";
            return;
        }

        matchesFiltrés.forEach(m => {
            const dateOption = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const dateLocale = new Date(m.datetime).toLocaleDateString('fr-FR', dateOption);

            let statusBadge = `<span class="mgroup">GROUPE ${m.group}</span>`;
            let scoreHTML = `<span class="mresult">VS</span>`;

            if (m.status === "completed") {
                statusBadge = `<span class="mgroup" style="background:#06B6D422; color:#06B6D4;">TERMINÉ</span>`;
                scoreHTML = `<span class="mresult" style="color:#F59E0B;">${m.home_team.goals} - ${m.away_team.goals}</span>`;
            } else if (m.status === "in_progress") {
                statusBadge = `<span class="mgroup" style="background:#EF444422; color:#EF4444;">LIVE</span>`;
                scoreHTML = `<span class="mresult" style="color:#EF4444;">${m.home_team.goals} - ${m.away_team.goals}</span>`;
            }

            listContainer.innerHTML += `
                <div class="mcard">
                    <div class="mdate">${dateLocale.toUpperCase()}</div>
                    <div class="mteams">
                        <span>${m.home_team_country || m.home_team.country}</span>
                        ${scoreHTML}
                        <span>${m.away_team_country || m.away_team.country}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:.4rem;">
                        <div class="mvenue">${m.stadium} · ${m.venue}</div>
                        ${statusBadge}
                    </div>
                </div>
            `;
        });
    } catch (error) {
        listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Scores en direct indisponibles actuellement.</p>";
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
        teams.forEach(t => toutesLesEquipes.push(t.name));
    }
    toutesLesEquipes.sort();

    toutesLesEquipes.forEach(team => {
        selectA.innerHTML += `<option value="${team}">${team}</option>`;
        selectB.innerHTML += `<option value="${team}">${team}</option>`;
    });

    if (selectA.children[0]) selectA.selectedIndex = 0;
    if (selectB.children[1]) selectB.selectedIndex = 1;
}

function predict() {
    const teamA = document.getElementById('ta').value;
    const teamB = document.getElementById('tb').value;
    const resultBox = document.getElementById('rc');

    if (teamA === teamB) {
        alert("Sélectionnez deux équipes différentes.");
        return;
    }

    const winA = Math.floor(Math.random() * 50) + 25;
    const draw = Math.floor(Math.random() * 15) + 5;
    const winB = 100 - (winA + draw);
    const scoreA = Math.floor(Math.random() * 4);
    const scoreB = Math.floor(Math.random() * 4);

    document.getElementById('rta').innerText = teamA;
    document.getElementById('rtb').innerText = teamB;
    document.getElementById('rs').innerText = `${scoreA} - ${scoreB}`;
    document.getElementById('pw').innerText = `${winA}%`;
    document.getElementById('pd').innerText = `${draw}%`;
    document.getElementById('pl').innerText = `${winB}%`;

    document.getElementById('bat').innerText = `${teamA} ATTACK`;
    document.getElementById('bbt').innerText = `${teamB} ATTACK`;
    document.getElementById('bab').innerHTML = `<div class="btr"><div class="bf" style="width: ${winA}%"></div></div>`;
    document.getElementById('bbb').innerHTML = `<div class="btr"><div class="bf" style="width: ${winB}%"></div></div>`;

    resultBox.style.display = 'block';
}

// ==========================================
// 5. ONGLET DOSSIER : RECHERCHE DE PAYS
// ==========================================
function dos() {
    const val = document.getElementById('di').value.trim();
    if (!val) {
        alert("Veuillez entrer un nom de pays.");
        return;
    }

    const input = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    const dCard = document.getElementById('dc');

    if (typeof dossiers === 'undefined') {
        alert("Erreur : Le fichier dossiers.js n'est pas chargé.");
        return;
    }

    if (!dossiers[input]) {
        alert("Erreur : Pays '" + input + "' introuvable.");
        dCard.style.display = 'none';
        return;
    }

    const data = dossiers[input];
    document.getElementById('dn').innerText = data.name;
    document.getElementById('dm').innerText = data.meta;
    document.getElementById('da').innerText = data.attack;
    document.getElementById('dd').innerText = data.defense;
    document.getElementById('df').innerText = data.form;
    document.getElementById('dme').innerText = data.mental;
    document.getElementById('dc2').innerText = data.coach;
    document.getElementById('dkp').innerText = data.keyPlayer;
    document.getElementById('dsp').innerText = data.stars;
    document.getElementById('dh').innerText = data.history;
    
    dCard.style.display = 'block';
}

// ==========================================
// 6. LANCEMENT AUTOMATIQUE
// ==========================================
window.onload = function() {
    initGroups();
    initPredictSelectors();
};
        

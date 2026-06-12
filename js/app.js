// ==========================================
// 1. GESTION DES ONGLETS (NAVIGATION)
// ==========================================
function tab(sectionId, btn) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    if (btn) btn.classList.add('active');

    if (sectionId === 'groups') initGroups();
    if (sectionId === 'schedule') initSchedule();
    if (sectionId === 'predict') initPredictSelectors();
}

// ==========================================
// FONCTION OUTIL : EXTRACTION DES 48 PAYS SINCE WORLDCUPDATA
// ==========================================
function extraireToutesLesEquipes() {
    let equipes = [];
    if (typeof worldCupData !== 'undefined' && worldCupData.groups) {
        for (const teams of Object.values(worldCupData.groups)) {
            teams.forEach(t => {
                if (t.name) equipes.push(t.name);
            });
        }
    }
    return equipes.sort();
}

// ==========================================
// 2. ONGLET GROUPS : AFFICHAGE DYNAMIQUE (12 GROUPS)
// ==========================================
function initGroups() {
    const container = document.getElementById('gg');
    if (!container) return;
    container.innerHTML = "";

    if (typeof worldCupData === 'undefined' || !worldCupData.groups) {
        container.innerHTML = `<p style='color:#EF4444; padding:1rem;'>⚠️ Erreur : L'outil worldCupData.groups est introuvable.</p>`;
        return;
    }

    // Boucle directe sur tes 12 groupes (A à L)
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
// 3. ONGLET SCHEDULE : CALENDRIER LOCAL
// ==========================================
let filtreActuel = "ALL";

function initSchedule() {
    initFilters();
    afficherMatchs();
}

function initFilters() {
    const filterContainer = document.getElementById('mfilter');
    if (!filterContainer || filterContainer.children.length > 0) return;

    // Tes 12 groupes réels de la Coupe du Monde 2026
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
    
    listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Chargement des matchs depuis le hub...</p>";

    try {
        const response = await fetch('./2026.json');
        if (!response.ok) throw new Error("Fichier 2026.json introuvable à la racine. Exécute le script Python.");
        
        const data = await response.json();
        listContainer.innerHTML = "";

        let matches = data.rounds[0].matches;

        const matchesFiltrés = matches.filter(m => {
            if (filtreActuel === "ALL") return true;
            return m.group && m.group.toString().toUpperCase().includes(filtreActuel);
        });

        if (matchesFiltrés.length === 0) {
            listContainer.innerHTML = "<p style='color:#94A3B8; padding: 2rem;'>Aucun match pour ce groupe.</p>";
            return;
        }

        matchesFiltrés.forEach(m => {
            let scoreHTML = `<span class="mresult">VS</span>`;
            if (m.score1 !== undefined && m.score1 !== null) {
                scoreHTML = `<span class="mresult" style="color:#F59E0B;">${m.score1} - ${m.score2}</span>`;
            }

            listContainer.innerHTML += `
                <div class="mcard">
                    <div class="mdate">${m.date || ""}</div>
                    <div class="mteams">
                        <span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team1}')">${m.team1}</span>
                        ${scoreHTML}
                        <span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team2}')">${m.team2}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:.4rem;">
                        <div class="mvenue">${m.stadium || "Stade"}</div>
                        <span class="mgroup">${m.group}</span>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        listContainer.innerHTML = `<p style='color:#EF4444; padding: 2rem;'>⚠️ Erreur Calendrier : ${error.message}</p>`;
    }
}

// ==========================================
// 4. ONGLET PREDICT : LES 48 PAYS DANS LES SÉLECTEURS
// ==========================================
function initPredictSelectors() {
    const selectA = document.getElementById('ta');
    const selectB = document.getElementById('tb');
    if (!selectA || !selectB || selectA.children.length > 0) return;

    const listeEquipes = extraireToutesLesEquipes();
    
    selectA.innerHTML = "";
    selectB.innerHTML = "";
    
    listeEquipes.forEach(team => {
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

    document.getElementById('rta').innerText = teamA;
    document.getElementById('rtb').innerText = teamB;
    document.getElementById('rs').innerText = `${Math.floor(Math.random() * 4)} - ${Math.floor(Math.random() * 4)}`;
    document.getElementById('pw').innerText = `${winA}%`;
    document.getElementById('pd').innerText = `${draw}%`;
    document.getElementById('pl').innerText = `${winB}%`;

    document.getElementById('bat').innerText = `${teamA} ATTACK`;
    document.getElementById('bbt').innerText = `${teamB} ATTACK`;
    document.getElementById('bab').innerHTML = `<div class="btr"><div class="bf" style="width: ${winA}%"></div></div>`;
    document.getElementById('bbb').innerHTML = `<div class="btr"><div class="bf" style="width: ${winB}%"></div></div>`;

    if (resultBox) resultBox.style.display = 'block';
}

// ==========================================
// 5. ONGLET DOSSIER : RECHERCHE PAYS
// ==========================================
function dos() {
    const searchField = document.getElementById('di');
    if (!searchField) return;

    const val = searchField.value.trim();
    if (!val) return;

    const input = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    const dCard = document.getElementById('dc');

    if (typeof dossiers === 'undefined' || !dossiers[input]) {
        alert("Données introuvables pour : " + input);
        return;
    }

    const data = dossiers[input];
    document.getElementById('dn').innerText = data.name || input;
    document.getElementById('dm').innerText = data.meta || "Nations Cup";
    document.getElementById('da').innerText = data.attack || "-";
    document.getElementById('dd').innerText = data.defense || "-";
    document.getElementById('df').innerText = data.form || "-";
    document.getElementById('dme').innerText = data.mental || "-";
    document.getElementById('dc2').innerText = data.coach || "-";
    document.getElementById('dkp').innerText = data.keyPlayer || "-";
    document.getElementById('dsp').innerText = data.stars || "-";
    document.getElementById('dh').innerText = data.history || "-";
    
    if (dCard) dCard.style.display = 'block';
}

// ==========================================
// 6. DÉMARRAGE AUTOMATIQUE
// ==========================================
window.onload = function() {
    initGroups();
};
    

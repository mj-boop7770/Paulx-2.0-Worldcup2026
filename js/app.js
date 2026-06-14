// ==========================================
// 1. GESTION DES ONGLETS (NAVIGATION)
// ==========================================
function tab(sectionId, btn) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');
    if (btn) btn.classList.add('active');
    
    if (sectionId === 'groups') initGroups();
    if (sectionId === 'schedule') initSchedule();
    if (sectionId === 'news') afficherMessagesQuotidiens(); // Charge tes actus quand on clique
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
    const diInput = document.getElementById('di');
    if (diInput) diInput.value = countryName;
    
    tab('dossier', dossierBtn);
    if (typeof dos === 'function') dos();
}

// ==========================================
// 3. ONGLET SCHEDULE : CALENDRIER EN DIRECT
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
            document.querySelectorAll('.mfilter button, #mfilter button').forEach(b => b.classList.remove('active'));
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
                <div class="mcard" style="margin-bottom:1rem; padding:1rem; background:#111827; border-radius:8px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:0.5rem;">
                        <span style="color:#64748B;">📅 ${dateLocale.toUpperCase()}</span>
                        ${statusBadge}
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span>${m.home_team_country || m.home_team.country}</span>
                        ${scoreHTML}
                        <span>${m.away_team_country || m.away_team.country}</span>
                    </div>
                </div>`;
        });
    } catch (e) {
        listContainer.innerHTML = "<p style='color:#EF4444; padding: 2rem;'>⚠️ Impossible de récupérer les scores en direct.</p>";
    }
}

// ==========================================
// 4. ONGLET NEWS : FLUX D'ACTUALITÉS (messages.json)
// ==========================================
async function afficherMessagesQuotidiens() {
    const c = document.getElementById('news-list');
    if (!c) return;
    
    c.innerHTML = "<p style='color:#94A3B8; text-align:center; padding:2rem;'>Chargement des flashs...</p>";
    
    try {
        const res = await fetch('./messages.json');
        if (!res.ok) throw new Error();
        const d = await res.json();
        
        const dateAffichage = d.date || "14 JUIN 2026";
        c.innerHTML = `<div style="color:#64748B; font-size:0.75rem; font-weight:bold; margin-bottom:1rem; text-align:right;">📅 FLASH : ${dateAffichage}</div>`;
        
        if (!d.articles || d.articles.length === 0) {
            c.innerHTML += "<p style='color:#94A3B8; text-align:center; padding:2rem;'>Aucune info pour le moment.</p>";
            return;
        }
        
        d.articles.forEach(a => {
            c.innerHTML += `
                <div class="card" style="margin-bottom:1rem; border-left:4px solid #8B5CF6; padding:1rem; background:#111827; border-radius:8px;">
                    <div style="margin-bottom:.4rem;">
                        <span style="background:#2D1B4E; color:#C084FC; font-size:0.65rem; font-weight:bold; padding:0.15rem 0.4rem; border-radius:4px; text-transform:uppercase;">${a.badge}</span>
                    </div>
                    <h3 style="color:#FFF; font-size:1.05rem; margin:0 0 .3rem 0; font-weight:bold;">${a.titre}</h3>
                    <p style="color:#94A3B8; font-size:0.85rem; line-height:1.4; margin:0; text-align:justify;">${a.texte}</p>
                </div>`;
        });
    } catch (e) {
        c.innerHTML = "<p style='color:#EF4444; text-align:center; padding:2rem;'>⚠️ Actualités indisponibles.</p>";
    }
}

// ==========================================
// 5. TRADUCTION DE L'UI (DRAPEAUX)
// ==========================================
function changerLangue(code, btn) {
    // Si tu ajoutes un système multilingue global plus tard, la variable est prête.
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    
    // Force la mise à jour immédiate de l'onglet actif si besoin
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        if (activeSection.id === 'groups') initGroups();
        if (activeSection.id === 'schedule') afficherMatchs();
        if (activeSection.id === 'news') afficherMessagesQuotidiens();
    }
}

// ==========================================
// 6. INITIALISATION AUTOMATIQUE AU CHARGEMENT
// ==========================================
window.onload = () => {
    initGroups();
};
            

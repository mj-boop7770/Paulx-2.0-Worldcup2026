// ==========================================
// 1. ETAT GLOBAL DE L'APPLICATION
// ==========================================
let langueActuelle = 'fr';
let ongletActuel = 'groups';

// ==========================================
// 2. DICTIONNAIRE DE TRADUCTION COMPLET
// ==========================================
const traductions = {
    fr: {
        title: "WORLDCUP2026 · MUJOS OCTOPUS",
        groups: "GROUPES", schedule: "CALENDRIER", predict: "PRÉDICTIONS", dossier: "DOSSIER", news: "NEWS",
        grp: "GROUPE ", loadingNews: "Chargement des flashs...", noNews: "Aucune info pour le moment.",
        pays: {
            "Mexico": "Mexique", "USA": "États-Unis", "Canada": "Canada", "Morocco": "Maroc", "Brazil": "Brésil"
        }
    },
    en: {
        title: "WORLDCUP2026 · MUJOS OCTOPUS",
        groups: "GROUPS", schedule: "SCHEDULE", predict: "PREDICT", dossier: "DOSSIER", news: "NEWS",
        grp: "GROUP ", loadingNews: "Loading news flash...", noNews: "No news available.",
        pays: { "Mexico": "Mexico", "USA": "USA", "Canada": "Canada", "Morocco": "Morocco", "Brazil": "Brazil" }
    },
    pt: {
        title: "WORLDCUP2026 · MUJOS OCTOPUS",
        groups: "GRUPOS", schedule: "CALENDÁRIO", predict: "PREVISÕES", dossier: "DOSSIER", news: "NOTÍCIAS",
        grp: "GRUPO ", loadingNews: "Carregando notícias...", noNews: "Nenhuma notícia disponível.",
        pays: { "Mexico": "México", "USA": "Estados Unidos", "Canada": "Canadá", "Morocco": "Marrocos", "Brazil": "Brasil" }
    },
    sw: {
        title: "WORLDCUP2026 · MUJOS OCTOPUS",
        groups: "MAKUNDI", schedule: "RATIBA", predict: "UTABIRI", dossier: "DOSSIER", news: "HABARI",
        grp: "KUNDI ", loadingNews: "Inapakia habari...", noNews: "Hakuna habari kwa sasa.",
        pays: { "Mexico": "Meksiko", "USA": "Marekani", "Canada": "Kanada", "Morocco": "Moroko", "Brazil": "Brazil" }
    },
    ar: {
        title: "WORLDCUP2026 · MUJOS OCTOPUS",
        groups: "المجموعات", schedule: "جدول المباريات", predict: "التوقعات", dossier: "الملف", news: "الأخبار",
        grp: "المجموعة ", loadingNews: "جاري التحميل...", noNews: "لا توجد أخبار حالياً.",
        pays: { "Mexico": "المكسيك", "USA": "الولايات المتحدة", "Canada": "كندا", "Morocco": "المغرب", "Brazil": "البرازيل" }
    }
};

// ==========================================
// 3. DONNÉES STATIQUES DE LA COUPE DU MONDE
// ==========================================
const worldCupData = {
    groups: {
        "A": [{ name: "Mexico", fifa_rank: 15 }, { name: "USA", fifa_rank: 11 }, { name: "Canada", fifa_rank: 40 }],
        "B": [{ name: "Brazil", fifa_rank: 5 }, { name: "Morocco", fifa_rank: 12 }]
    },
    matchs: [
        { id: 1, date: "11/06", equipe1: "Mexico", equipe2: "Canada", score1: null, score2: null, lieu: "Stade Azteca" },
        { id: 2, date: "14/06", equipe1: "Brazil", equipe2: "Morocco", score1: null, score2: null, lieu: "MetLife Stadium" }
    ]
};

// ==========================================
// 4. GESTION DE L'INTERFACE ET NAVIGATION
// ==========================================
function switchTab(tabId) {
    ongletActuel = tabId;
    
    // Gestion de l'état actif sur les boutons d'onglets
    document.querySelectorAll('.tab-btn, #btn-groups, #btn-schedule, #btn-predict, #btn-dossier, #btn-news').forEach(b => {
        if(b) b.classList.remove('active');
    });
    
    const targetBtn = document.getElementById(`btn-${tabId}`);
    if (targetBtn) targetBtn.classList.add('active');
    
    // Nettoyage de la zone d'affichage principale
    const conteneur = document.getElementById('gg') || document.getElementById('main-content');
    if (!conteneur) return;
    conteneur.innerHTML = "";

    // Routage de l'affichage selon l'onglet
    if (tabId === 'groups') {
        initGroups();
    } else if (tabId === 'schedule') {
        afficherMatchs();
    } else if (tabId === 'predict') {
        conteneur.innerHTML = `<div class="card" style="text-align:center; padding:2rem; color:#94A3B8;">🔮 Section Prédictions de l'Oracle en cours de calcul...</div>`;
    } else if (tabId === 'dossier') {
        conteneur.innerHTML = `<div class="card" style="text-align:center; padding:2rem; color:#94A3B8;">📁 Analyses tactiques et dossiers d'équipes.</div>`;
    } else if (tabId === 'news') {
        // Crée une zone dédiée pour la liste de news si nécessaire
        conteneur.innerHTML = `<div id="news-list"></div>`;
        afficherMessagesQuotidiens();
    }
}

// ==========================================
// 5. FONCTIONS DE RENDU DYNAMIQUES
// ==========================================
function initGroups() {
    const c = document.getElementById('gg') || document.getElementById('main-content'); 
    if (!c || ongletActuel !== 'groups') return; 
    c.innerHTML = "";
    
    const t = traductions[langueActuelle] || traductions['fr'];
    const prefixeGroupe = langueActuelle === 'ar' ? t.grp : "GROUP ";

    for (const [letter, teams] of Object.entries(worldCupData.groups)) {
        let h = `<div class="card" style="margin-bottom:1rem;"><div class="glabel" style="font-weight:bold; color:#C084FC; margin-bottom:0.5rem;">${prefixeGroupe}${letter}</div>`;
        
        teams.forEach(tTeam => {
            const nomTraduit = (t.pays && t.pays[tTeam.name]) ? t.pays[tTeam.name] : tTeam.name;
            h += `<div class="trow" style="display:flex; justify-content:between; padding:0.4rem 0; border-bottom:1px solid #1F2937;">
                    <span style="color:#FFF;">${nomTraduit}</span>
                    <span class="rk" style="color:#64748B;">#${tTeam.fifa_rank}</span>
                  </div>`;
        });
        c.innerHTML += h + `</div>`;
    }
}

function afficherMatchs() {
    const c = document.getElementById('gg') || document.getElementById('main-content'); 
    if (!c || ongletActuel !== 'schedule') return;
    c.innerHTML = "";
    
    const t = traductions[langueActuelle] || traductions['fr'];

    worldCupData.matchs.forEach(m => {
        const e1 = (t.pays && t.pays[m.equipe1]) ? t.pays[m.equipe1] : m.equipe1;
        const e2 = (t.pays && t.pays[m.equipe2]) ? t.pays[m.equipe2] : m.equipe2;
        const s1 = m.score1 !== null ? m.score1 : "-";
        const s2 = m.score2 !== null ? m.score2 : "-";

        c.innerHTML += `
            <div class="card" style="margin-bottom:1rem; padding:1rem; background:#111827; border-radius:8px;">
                <div style="font-size:0.75rem; color:#64748B; margin-bottom:0.5rem;">📅 ${m.date} - ${m.lieu}</div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:#FFF; font-weight:500;">${e1}</span>
                    <span style="background:#1F2937; padding:0.2rem 0.6rem; border-radius:4px; color:#C084FC; font-weight:bold;">${s1} : ${s2}</span>
                    <span style="color:#FFF; font-weight:500;">${e2}</span>
                </div>
            </div>`;
    });
}

async function afficherMessagesQuotidiens() {
    const c = document.getElementById('news-list'); 
    if (!c) return;
    
    const t = traductions[langueActuelle] || traductions['fr']; 
    c.innerHTML = `<p style='color:#94A3B8; text-align:center; padding:2rem;'>${t.loadingNews}</p>`;
    
    try {
        const res = await fetch('./messages.json'); 
        if (!res.ok) throw new Error();
        const d = await res.json(); 
        
        const dateAffichage = d.date || "14 JUIN 2026";
        c.innerHTML = `<div style="color:#64748B; font-size:0.75rem; font-weight:bold; margin-bottom:1rem; text-align:right;">📅 FLASH : ${dateAffichage}</div>`;
        
        if (!d.articles || d.articles.length === 0) { 
            c.innerHTML += `<p style='color:#94A3B8; text-align:center; padding:2rem;'>${t.noNews}</p>`; 
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
        c.innerHTML = `<p style='color:#EF4444; text-align:center; padding:2rem;'>⚠️ Erreur de chargement du flux d'actualités.</p>`; 
    }
}

// ==========================================
// 6. TRADUCTION DE L'INTERFACE GLOBALE
// ==========================================
function changerLangue(code, btn) {
    langueActuelle = code;
    
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    
    const t = traductions[code] || traductions['fr'];
    
    if(document.getElementById('main-title')) document.getElementById('main-title').innerText = t.title;
    if(document.getElementById('btn-groups')) document.getElementById('btn-groups').innerHTML = t.groups;
    if(document.getElementById('btn-schedule')) document.getElementById('btn-schedule').innerHTML = t.schedule;
    if(document.getElementById('btn-predict')) document.getElementById('btn-predict').innerHTML = t.predict;
    if(document.getElementById('btn-dossier')) document.getElementById('btn-dossier').innerHTML = t.dossier;
    if(document.getElementById('btn-news')) document.getElementById('btn-news').innerHTML = t.news;

    // Force le rafraîchissement immédiat de l'onglet actif avec la nouvelle langue
    switchTab(ongletActuel);
}

// ==========================================
// 7. INITIALISATION AU CHARGEMENT DE LA PAGE
// ==========================================
window.onload = () => {
    // Lie les événements de clics sur les boutons si présents dans l'index.html
    if(document.getElementById('btn-groups')) document.getElementById('btn-groups').onclick = () => switchTab('groups');
    if(document.getElementById('btn-schedule')) document.getElementById('btn-schedule').onclick = () => switchTab('schedule');
    if(document.getElementById('btn-predict')) document.getElementById('btn-predict').onclick = () => switchTab('predict');
    if(document.getElementById('btn-dossier')) document.getElementById('btn-dossier').onclick = () => switchTab('dossier');
    if(document.getElementById('btn-news')) document.getElementById('btn-news').onclick = () => switchTab('news');

    // Lance le premier onglet par défaut
    switchTab('groups');
};
        

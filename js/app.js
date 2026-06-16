// ==========================================
// VARIABLES GLOBALES
// ==========================================
let langueActuelle = 'fr', filtreActuel = "ALL";
let dossiers = {}; // Variable pour stocker le contenu de dossiers.json

// ==========================================
// INITIALISATION & CHARGEMENT
// ==========================================
async function chargerDonnees() {
    try {
        const res = await fetch('./data/dossiers.json');
        dossiers = await res.json();
        console.log("Dossiers chargés !");
    } catch (e) { console.error("Erreur chargement dossiers :", e); }
}

window.onload = async function() {
    await chargerDonnees();
    changerLangue('fr', document.querySelector('.lang-btn'));
    initGroups();
};

// ==========================================
// SYSTEME MULTILINGUE (Objets traductions)
// ==========================================
const traductions = {
    fr: { title: "WORLDCUP2026 · MUJOS OCTOPUS", sub: "AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES", dates: "11 JUIN - 19 JUIL 2026", groups: "GROUPES", schedule: "CALENDRIER", predict: "PRÉDICTIONS", dossier: "DOSSIERS", news: "NEWS", oracleBtn: "ORACLE - PRÉDIRE LE MATCH", winA: "VICTOIRE A", draw: "NUL", winB: "VICTOIRE B", attack: "ATTAQUE", defense: "DÉFENSE", form: "FORME", mental: "MENTAL", coach: "SÉLECTIONNEUR", keyplayer: "JOUEUR CLÉ", stars: "ÉTOILES", history: "HISTOIRE", open: "OUVRIR", placeholder: "France, Espagne, Allemagne...", loadingNews: "Chargement des infos...", noNews: "Aucun message.", errorNews: "⚠️ Erreur.", all: "TOUT", grp: "GRP ", loadingMatch: "Chargement...", noMatch: "Aucun match.", done: "Terminé", at: "à", stadium: "Stade", diffTeams: "Sélectionnez deux équipes.", notFound: "Introuvable : " },
    // ... (Remplir les autres langues ici comme avant)
};

// ==========================================
// FONCTIONS CLES CORRIGEES
// ==========================================

function changerLangue(code, btn) {
    langueActuelle = code;
    // Mise à jour interface (code existant...)
    const t = traductions[code];
    document.getElementById('main-title').innerText = t.title;
    // ...
    const act = document.querySelector('.section.active').id;
    if (act === 'news') afficherMessagesQuotidiens();
    if (act === 'dossier') dos();
}

function dos() {
    const s = document.getElementById('di'); 
    if (!s || !s.value.trim()) return;
    const cleEquipe = normaliserNomEquipe(s.value);
    
    if (!cleEquipe || !dossiers[cleEquipe]) {
        alert(traductions[langueActuelle].notFound + s.value);
        return;
    }
    
    // On prend la langue demandée, sinon le français par défaut
    const d = dossiers[cleEquipe][langueActuelle] || dossiers[cleEquipe]['fr'];
    
    document.getElementById('dn').innerText = d.name;
    document.getElementById('dm').innerText = d.meta;
    document.getElementById('da').innerText = d.attack;
    document.getElementById('dd').innerText = d.defense;
    document.getElementById('df').innerText = d.form;
    document.getElementById('dme').innerText = d.mental;
    document.getElementById('dc2').innerText = d.coach;
    document.getElementById('dkp').innerText = d.keyPlayer;
    document.getElementById('dsp').innerText = d.stars;
    document.getElementById('dh').innerText = d.history;
    document.getElementById('dc').style.display = 'block';
}

async function afficherMessagesQuotidiens() {
    const c = document.getElementById('news-list'); 
    if (!c) return;
    c.innerHTML = "<p>Chargement...</p>";
    
    try {
        const res = await fetch('./messages.json');
        const data = await res.json();
        
        // On récupère directement le bon article selon la langue
        // Assurez-vous que votre messages.json est bien structuré par langue
        let articles = data.articles[langueActuelle] || data.articles['fr'];
        
        c.innerHTML = "";
        articles.forEach(a => {
            c.innerHTML += `<div class="card"><h3>${a.titre}</h3><p>${a.texte}</p></div>`;
        });
    } catch (e) {
        c.innerHTML = `<p>⚠️ Erreur de chargement.</p>`;
    }
}

// ... (Garder tes autres fonctions : tab, initGroups, etc.)
        

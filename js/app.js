// ==========================================
// 1. SYSTEME MULTILINGUE (6 LANGUES)
// ==========================================
let langueActuelle = 'fr', filtreActuel = "ALL";

const traductions = {
    fr: { title: "WORLDCUP2026 · MUJOS OCTOPUS", sub: "AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES", dates: "11 JUIN - 19 JUIL 2026", groups: "GROUPES", schedule: "CALENDRIER", predict: "PRÉDICTIONS", dossier: "DOSSIERS", news: "NEWS", oracleBtn: "ORACLE - PRÉDIRE LE MATCH", winA: "VICTOIRE A", draw: "NUL", winB: "VICTOIRE B", attack: "ATTAQUE", defense: "DÉFENSE", form: "FORME", mental: "MENTAL", coach: "SÉLECTIONNEUR", keyplayer: "JOUEUR CLÉ", stars: "ÉTOILES", history: "HISTOIRE", open: "OUVRIR", placeholder: "France, Espagne, Allemagne...", loadingNews: "Mise à jour des flashs infos...", noNews: "Aucun message pour le moment.", errorNews: "⚠️ Erreur d'affichage : Vérifie le format de messages.json.", all: "TOUT", grp: "GRP ", loadingMatch: "Chargement des matchs depuis le hub...", noMatch: "Aucun match pour ce groupe.", done: "Terminé", at: "à", stadium: "Stade", diffTeams: "Sélectionnez deux équipes différentes." },
    en: { title: "WORLDCUP2026 · MUJOS OCTOPUS", sub: "AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES", dates: "11 JUN - 19 JUL 2026", groups: "GROUPS", schedule: "SCHEDULE", predict: "PREDICT", dossier: "DOSSIER", news: "NEWS", oracleBtn: "ORACLE - PREDICT MATCH", winA: "WIN A", draw: "DRAW", winB: "WIN B", attack: "ATTACK", defense: "DEFENSE", form: "FORM", mental: "MENTAL", coach: "COACH", keyplayer: "KEY PLAYER", stars: "STARS", history: "HISTORY", open: "OPEN", placeholder: "France, Spain, Germany...", loadingNews: "Updating flash news...", noNews: "No news for now.", errorNews: "⚠️ Display error: Check messages.json format.", all: "ALL", grp: "GRP ", loadingMatch: "Loading matches from hub...", noMatch: "No matches for this group.", done: "Finished", at: "at", stadium: "Stadium", diffTeams: "Select two different teams." },
    pt: { title: "WORLDCUP2026 · MUJOS OCTOPUS", sub: "AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES", dates: "11 JUN - 19 JUL 2026", groups: "GRUPOS", schedule: "CALENDÁRIO", predict: "PREVISÕES", dossier: "DOSSIÊ", news: "NOTÍCIAS", oracleBtn: "ORÁCULO - PREVER JOGO", winA: "VITÓRIA A", draw: "EMPATE", winB: "VITÓRIA B", attack: "ATAQUE", defense: "DEFESA", form: "FORMA", mental: "MENTAL", coach: "TREINADOR", keyplayer: "JOGADOR CHAVE", stars: "ESTRELAS", history: "HISTÓRIA", open: "ABRIR", placeholder: "França, Espanha, Alemanha...", loadingNews: "Atualizando as últimas notícias...", noNews: "Nenhuma notícia no momento.", errorNews: "⚠️ Erro de exibição: Verifique o formato do messages.json.", all: "TODOS", grp: "GRP ", loadingMatch: "Carregando jogos do hub...", noMatch: "Nenhum jogo para este grupo.", done: "Terminado", at: "as", stadium: "Estádio", diffTeams: "Selecione duas equipes diferentes." },
    sw: { title: "WORLDCUP2026 · MUJOS OCTOPUS", sub: "AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES", dates: "11 JUNI - 19 JULAI 2026", groups: "MAKUNDI", schedule: "RATIBA", predict: "UTABIRI", dossier: "FAILI", news: "HABARI", oracleBtn: "ORACLE - TABIRI MECHI", winA: "USHINDI A", draw: "SULUHisho", winB: "USHINDI B", attack: "MASHAMBULIZI", defense: "ULINZI", form: "FOMU", mental: "AKILI", coach: "KOCHA", keyplayer: "MCHEZAJI MUHIMU", stars: "NYOTA", history: "HISTORIA", open: "FUNGUA", placeholder: "Ufaransa, Hispania, Ujerumani...", loadingNews: "Inasasisha habari za dharura...", noNews: "Hakuna habari kwa sasa.", errorNews: "⚠️ Hitilafu ya kuonyesha: Angalia muundo wa messages.json.", all: "ZOTE", grp: "KUNDI ", loadingMatch: "Inapakia mechi kutoka kwenye kitovu...", noMatch: "Hakuna mechi kwenye kundi hili.", done: "Imeisha", at: "saa", stadium: "Uwanja", diffTeams: "Chagua timu mbili tofauti." },
    ar: { title: "WORLDCUP2026 · MUJOS OCTOPUS", sub: "AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES", dates: "11 يونيو - 19 يوليو 2026", groups: "المجموعات", schedule: "جدول المباريات", predict: "التوقعات", dossier: "الملفات", news: "الأخبار", oracleBtn: "الأوراكل - توقع المباراة", winA: "فوز أ", draw: "تعادل", winB: "فوز ب", attack: "الهجوم", defense: "الدفاع", form: "المستوى الحالي", mental: "الذهنية", coach: "المدرب", keyplayer: "اللاعب النجم", stars: "النجوم", history: "التاريخ", open: "افتح", placeholder: "فرنسا، إسبانيا، ألمانيا...", loadingNews: "جاري تحديث الأخبار العاجلة...", noNews: "لا توجد أخبار في الوقت الحالي.", errorNews: "⚠️ خطأ في العرض: تحقق من صيغة ملف messages.json.", all: "الكل", grp: "المجموعة ", loadingMatch: "جاري تحميل المباريات...", noMatch: "لا توجد مباريات لهذه المجموعة.", done: "انتهت", at: "على الساعة", stadium: "الملعب", diffTeams: "اختر فريقين مختلفين." },
    rw: { title: "WORLDCUP2026 · MUJOS OCTOPUS", sub: "AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES", dates: "11 Kamena - 19 Nyakanga 2026", groups: "AMATSINDA", schedule: "GAHUNDA", predict: "IBITEKEREZO", dossier: "DOSSIYE", news: "AMAKURU", oracleBtn: "ORACLE - TABIRA UMUKINO", winA: "INTSINZI A", draw: "AMAYOBERANE", winB: "INTSINZI B", attack: "GUTERA", defense: "KWIRWANIRIRA", form: "IMITERERE", mental: "IMITEKEREREZE", coach: "UMUTOZA", keyplayer: "UMUKINNYI W'INGIRAKAMARO", stars: "INYENYERI", history: "AMATEKA", open: "FUNGURA", placeholder: "Ubufaransa, Espanye, Ubudage...", loadingNews: "Guhugura amakuru...", noNews: "Nta makuru ahari.", errorNews: "⚠️ Ikosa ryagaragaye.", all: "BYOSE", grp: "ITSINDA ", loadingMatch: "Gupakurura imikino...", noMatch: "Nta mikino.", done: "Birarangiye", at: "saa", stadium: "Sitade", diffTeams: "Hitamo amakipe abiri atandukanye." }
};

function changerLangue(code, btn) {
    langueActuelle = code;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const t = traductions[code];
    document.getElementById('main-title').innerText = t.title;
    document.getElementById('main-sub').innerText = t.sub;
    document.getElementById('badge-dates').innerText = t.dates;
    document.getElementById('btn-groups').innerHTML = t.groups;
    document.getElementById('btn-schedule').innerHTML = t.schedule;
    document.getElementById('btn-predict').innerHTML = t.predict;
    document.getElementById('btn-dossier').innerHTML = t.dossier;
    document.getElementById('btn-news').innerHTML = `${t.news}<span class="live-dot"></span>`;
    document.getElementById('btn-oracle-predict').innerText = t.oracleBtn;
    document.getElementById('lbl-winA').innerText = t.winA; document.getElementById('lbl-draw').innerText = t.draw; document.getElementById('lbl-winB').innerText = t.winB;
    document.getElementById('di').placeholder = t.placeholder; document.getElementById('btn-open-dossier').innerText = t.open;
    document.getElementById('lbl-attack').innerText = t.attack; document.getElementById('lbl-defense').innerText = t.defense;
    document.getElementById('lbl-form').innerText = t.form; document.getElementById('lbl-mental').innerText = t.mental;
    document.getElementById('lbl-coach').innerText = t.coach; document.getElementById('lbl-keyplayer').innerText = t.keyplayer;
    document.getElementById('lbl-stars').innerText = t.stars; document.getElementById('lbl-history').innerText = t.history;
    const act = document.querySelector('.section.active').id;
    if (act === 'schedule') { document.getElementById('mfilter').innerHTML = ""; initFilters(); afficherMatchs(); }
    else if (act === 'news') afficherMessagesQuotidiens();
    else if (act === 'dossier') dos();
}

function tab(secId, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(secId).classList.add('active');
    if (btn) btn.classList.add('active');
    if (secId === 'groups') initGroups();
    if (secId === 'schedule') initSchedule();
    if (secId === 'predict') initPredictSelectors();
    if (secId === 'news') afficherMessagesQuotidiens();
}

function extraireToutesLesEquipes() {
    let eq = [];
    if (typeof worldCupData !== 'undefined' && worldCupData.groups) {
        for (const t of Object.values(worldCupData.groups)) t.forEach(x => { if (x.name) eq.push(x.name); });
    }
    return eq.sort();
}

function initGroups() {
    const c = document.getElementById('gg'); if (!c) return; c.innerHTML = "";
    if (typeof worldCupData === 'undefined' || !worldCupData.groups) return;
    for (const [letter, teams] of Object.entries(worldCupData.groups)) {
        let h = `<div class="card"><div class="glabel">GROUP ${letter}</div>`;
        teams.forEach(t => { h += `<div class="trow" onclick="rechercherPaysDepuisGroupe('${t.name}')"><span>${t.name}</span><span class="rk">#${t.fifa_rank}</span></div>`; });
        c.innerHTML += h + `</div>`;
    }
}

function rechercherPaysDepuisGroupe(n) {
    const b = document.getElementById('btn-dossier'), i = document.getElementById('di');
    if (i) i.value = n; tab('dossier', b); dos();
}

function initSchedule() { initFilters(); afficherMatchs(); }
function initFilters() {
    const container = document.getElementById('mfilter'); if (!container || container.children.length > 0) return;
    const t = traductions[langueActuelle];
    ["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].forEach(g => {
        const btn = document.createElement('button'); btn.innerText = g === "ALL" ? t.all : t.grp + g;
        if (g === filtreActuel) btn.classList.add('active');
        btn.onclick = function() { 
            document.querySelectorAll('#mfilter button, .mfilter button').forEach(b => b.classList.remove('active')); 
            btn.classList.add('active'); 
            filtreActuel = g; 
            afficherMatchs(); 
        };
        container.appendChild(btn);
    });
}

async function afficherMatchs() {
    const c = document.getElementById('matchlist'); if (!c) return;
    const t = traductions[langueActuelle]; c.innerHTML = `<p style='color:#94A3B8; padding:2rem;'>${t.loadingMatch}</p>`;
    try {
        const res = await fetch('./2026.json'); if (!res.ok) throw new Error();
        const d = await res.json(); c.innerHTML = "";
        let mF = d.rounds[0].matches.filter(m => filtreActuel === "ALL" || (m.group && m.group.toString().toUpperCase().includes(filtreActuel)));
        if (mF.length === 0) { c.innerHTML = `<p style='color:#94A3B8; padding:2rem;'>${t.noMatch}</p>`; return; }
        mF.forEach(m => {
            let sH = `<span class="mresult">VS</span>`, dt = m.date || "";
            if (m.score1 !== undefined && m.score1 !== null) { sH = `<span class="mresult" style="color:#F59E0B;">${m.score1} - ${m.score2}</span>`; dt += ` | ${t.done}`; }
            else if (m.time) { try { dt += ` ${t.at} ${new Date(`${m.date}T${m.time}:00Z`).toLocaleTimeString(navigator.language, {hour:'2-digit', minute:'2-digit'})}`; } catch(e) { dt += ` (${m.time})`; } }
            c.innerHTML += `<div class="mcard"><div class="mdate">${dt}</div><div class="mteams"><span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team1}')">${m.team1}</span>${sH}<span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team2}')">${m.team2}</span></div><div style="display:flex; justify-content:space-between; align-items:center; margin-top:.4rem;"><div class="mvenue">${m.stadium || t.stadium}</div><span class="mgroup">${m.group}</span></div></div>`;
        });
    } catch (e) { c.innerHTML = `<p style='color:#EF4444; padding:2rem;'>⚠️ Erreur Calendrier</p>`; }
}

function initPredictSelectors() {
    const a = document.getElementById('ta'), b = document.getElementById('tb'); if (!a || !b || a.children.length > 0) return;
    a.innerHTML = ""; b.innerHTML = "";
    extraireToutesLesEquipes().forEach(t => { a.innerHTML += `<option value="${t}">${t}</option>`; b.innerHTML += `<option value="${t}">${t}</option>`; });
    if (a.children[0]) a.selectedIndex = 0; if (b.children[1]) b.selectedIndex = 1;
}

function predict() {
    const tA = document.getElementById('ta').value, tB = document.getElementById('tb').value, t = traductions[langueActuelle];
    if (tA === tB) { alert(t.diffTeams); return; }
    const wA = Math.floor(Math.random() * 50) + 25, d = Math.floor(Math.random() * 15) + 5, wB = 100 - (wA + d);
    document.getElementById('rta').innerText = tA; document.getElementById('rtb').innerText = tB;
    document.getElementById('rs').innerText = `${Math.floor(Math.random() * 4)} - ${Math.floor(Math.random() * 4)}`;
    document.getElementById('pw').innerText = `${wA}%`; document.getElementById('pd').innerText = `${d}%`; document.getElementById('pl').innerText = `${wB}%`;
    document.getElementById('bat').innerText = `${tA} ATTACK`; document.getElementById('bbt').innerText = `${tB} ATTACK`;
    document.getElementById('bab').innerHTML = `<div class="btr"><div class="bf" style="width: ${wA}%"></div></div>`;
    document.getElementById('bbb').innerHTML = `<div class="btr"><div class="bf" style="width: ${wB}%"></div></div>`;
    document.getElementById('rc').style.display = 'block';
}

function dos() {
    const s = document.getElementById('di'); if (!s || !s.value.trim()) return;
    const v = s.value.trim(), input = v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
    if (typeof dossiers === 'undefined' || !dossiers[input]) { alert("Données introuvables pour : " + input); return; }
    
    // Utilisation de la langue active pour chercher dans les dossiers
    const d = dossiers[input][langueActuelle] || dossiers[input]['fr'];

    document.getElementById('dn').innerText = d.name || input;
    document.getElementById('dm').innerText = d.meta || "Nations Cup";
    document.getElementById('da').innerText = d.attack || "-";
    document.getElementById('dd').innerText = d.defense || "-";
    document.getElementById('df').innerText = d.form || "-";
    document.getElementById('dme').innerText = d.mental || "-";
    document.getElementById('dc2').innerText = d.coach || "-";
    document.getElementById('dkp').innerText = d.keyPlayer || "-";
    document.getElementById('dsp').innerText = d.stars || "-";
    document.getElementById('dh').innerText = d.history || "-";
    document.getElementById('dc').style.display = 'block';
}

async function afficherMessagesQuotidiens() {
    const c = document.getElementById('news-list'); if (!c) return;
    const t = traductions[langueActuelle]; c.innerHTML = `<p style='color:#94A3B8; text-align:center; padding:2rem;'>${t.loadingNews}</p>`;
    try {
        const res = await fetch('./messages.json'); if (!res.ok) throw new Error();
        const d = await res.json(); c.innerHTML = `<div style="color:#64748B; font-size:0.75rem; font-weight:bold; margin-bottom:1rem; text-align:right; letter-spacing:0.5px;">📅 FLASH : ${d.date || '2026'}</div>`;
        if (!d.articles || d.articles.length === 0) { c.innerHTML += `<p style='color:#94A3B8; text-align:center; padding:2rem;'>${t.noNews}</p>`; return; }
        d.articles.forEach(a => { 
            c.innerHTML += `<div class="card" style="margin-bottom:1rem; border-left:4px solid #8B5CF6; padding:1rem; background:#111827; border-radius:8px;"><div style="margin-bottom:.4rem;"><span style="background:#2D1B4E; color:#C084FC; font-size:0.65rem; font-weight:bold; padding:0.15rem 0.4rem; border-radius:4px; text-transform:uppercase;">${a.badge}</span></div><h3 style="color:#FFF; font-size:1.05rem; margin:0 0 .3rem 0; font-weight:bold;">${a.titre}</h3><p style="color:#94A3B8; font-size:0.85rem; line-height:1.4; margin:0;">${a.texte}</p></div>`; 
        });
    } catch (e) { c.innerHTML = `<p style='color:#EF4444; text-align:center; padding:2rem;'>${t.errorNews}</p>`; }
}

window.onload = function() { initGroups(); };
         

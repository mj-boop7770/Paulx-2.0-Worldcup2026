// 1. Gestion des onglets
function tab(sectionId, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    btn.classList.add('active');
}

// 2. Charger les groupes
async function loadData() {
    try {
        const res = await fetch('data/teams.json');
        const data = await res.json();
        const container = document.getElementById('gg');
        if(container) {
            container.innerHTML = Object.entries(data.groups).map(([g, teams]) => `
                <div class="card">
                    <div class="glabel">GROUP ${g}</div>
                    ${teams.map(t => `<div class="trow"><span>${t.name}</span></div>`).join('')}
                </div>
            `).join('');
        }
    } catch (e) { console.error("Erreur chargement groupes:", e); }
}

// 3. Charger le calendrier (avec conversion heure locale)
async function loadMatches() {
    try {
        const res = await fetch('data/matches.json');
        const data = await res.json();
        const container = document.getElementById('matchlist');
        if(container) {
            container.innerHTML = data.matches.map(m => {
                const d = new Date(m.datetime);
                const dateLoc = d.toLocaleDateString(undefined, {month: 'short', day: 'numeric'});
                const timeLoc = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                return `
                    <div class="mcard">
                        <div class="mdate">${dateLoc} · ${timeLoc}</div>
                        <div class="mteams"><span>${m.home}</span> <b>VS</b> <span>${m.away}</span></div>
                        <div class="mgroup">GROUP ${m.group} | ${m.venue}</div>
                    </div>
                `;
            }).join('');
        }
    } catch (e) { console.error("Erreur chargement matchs:", e); }
}

// 4. Initialisation robuste pour mobile
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    loadMatches();
});

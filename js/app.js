// Fonction pour charger les groupes
async function loadData() {
    try {
        const response = await fetch('./data/teams.json');
        if (!response.ok) throw new Error("Erreur de chargement teams.json");
        const data = await response.json();
        
        const container = document.getElementById('gg');
        if (container) {
            container.innerHTML = Object.entries(data.groups).map(([groupName, teams]) => `
                <div class="card">
                    <div class="glabel">GROUP ${groupName}</div>
                    ${teams.map(t => `<div class="trow"><span>${t.name}</span></div>`).join('')}
                </div>
            `).join('');
        }
    } catch (err) {
        console.error("Erreur chargement groupes :", err);
    }
}

// Fonction pour charger le calendrier (Schedule)
async function loadMatches() {
    try {
        const response = await fetch('./data/matches.json');
        if (!response.ok) throw new Error("Erreur de chargement matches.json");
        const data = await response.json();
        
        const container = document.getElementById('matchlist');
        if (container) {
            container.innerHTML = data.matches.map(m => {
                const d = new Date(m.datetime);
                return `
                    <div class="mcard">
                        <div class="mdate">${d.toLocaleDateString()} - ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                        <div class="mteams">
                            <span>${m.home}</span> <b>VS</b> <span>${m.away}</span>
                        </div>
                        <div class="mgroup">GROUP ${m.group} | ${m.venue}</div>
                    </div>
                `;
            }).join('');
        }
    } catch (err) {
        console.error("Erreur chargement matchs :", err);
    }
}

// Initialisation au chargement de la page
window.onload = () => {
    loadData();
    loadMatches();
};

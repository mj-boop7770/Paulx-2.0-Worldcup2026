async function loadData() {
    try {
        // 1. On va chercher ton fichier JSON
        const response = await fetch('data/teams.json');
        const data = await response.json();
        
        const container = document.getElementById('gg');
        container.innerHTML = ''; // Nettoyage
        
        // 2. On boucle sur les groupes (A à L)
        Object.entries(data.groups).forEach(([groupName, teams]) => {
            container.innerHTML += `
                <div class="card">
                    <div class="glabel">GROUP ${groupName}</div>
                    ${teams.map(t => `<div class="trow"><span>${t.name}</span></div>`).join('')}
                </div>
            `;
        });
    } catch (err) {
        console.error("Erreur lors du chargement des groupes :", err);
    }
}

// Lancer le chargement au démarrage
document.addEventListener('DOMContentLoaded', loadData);

// Gestion des onglets (ta fonction déjà existante)
function tab(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
                                             }
      

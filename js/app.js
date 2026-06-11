// Navigation entre les sections
function tab(name, el) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(name).classList.add('active');
    el.classList.add('active');
}

// Recherche de dossier
function dos() {
    const val = document.getElementById('di').value;
    const input = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    const dCard = document.getElementById('dc');

    // On vérifie si la variable 'dossiers' existe et contient ton objet imbriqué
    if (typeof dossiers !== 'undefined' && dossiers.dossiers && dossiers.dossiers[input]) {
        const data = dossiers.dossiers[input];

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
    } else {
        alert("Dossier introuvable. Vérifie le nom.");
        dCard.style.display = 'none';
    }
}

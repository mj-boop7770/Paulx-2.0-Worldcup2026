function dos() {
    const val = document.getElementById('di').value;
    const input = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    const dCard = document.getElementById('dc');

    // Vérification : le fichier est-il chargé ?
    if (typeof dossiers === 'undefined') {
        alert("Erreur : Le fichier dossiers.js n'est pas chargé.");
        return;
    }

    // Correction : on cherche directement le pays dans l'objet 'dossiers'
    // On retire la vérification inutile !dossiers.dossiers
    if (!dossiers[input]) {
        alert("Erreur : Impossible de trouver le pays '" + input + "' dans la liste.");
        dCard.style.display = 'none';
        return;
    }

    // Affichage des données
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

function dos() {
    const val = document.getElementById('di').value;
    const input = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    const dCard = document.getElementById('dc');

    // 1. Vérification simple : le fichier est-il bien là ?
    if (typeof dossiers === 'undefined') {
        alert("Erreur : Le fichier dossiers.js n'est pas chargé.");
        return;
    }

    // 2. On cherche directement dans l'objet 'dossiers' 
    // (Puisque ton fichier commence par "const dossiers = { ... }")
    if (!dossiers[input]) {
        alert("Erreur : Impossible de trouver le pays '" + input + "' dans la liste.");
        dCard.style.display = 'none';
        return;
    }

    // 3. Si on est ici, tout est bon ! On affiche.
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

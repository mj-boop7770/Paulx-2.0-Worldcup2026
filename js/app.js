function dos() {
    const val = document.getElementById('di').value;
    const input = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    const dCard = document.getElementById('dc');

    // TEST DE DIAGNOSTIC
    if (typeof dossiers === 'undefined') {
        alert("Erreur : dossiers.js n'est pas chargé !");
        return;
    }
    if (!dossiers.dossiers) {
        alert("Erreur : 'dossiers' n'est pas trouvé dans le fichier !");
        return;
    }
    if (!dossiers.dossiers[input]) {
        alert("Erreur : Impossible de trouver le pays '" + input + "' dans la liste.");
        return;
    }

    // Si on passe les tests, on affiche
    const data = dossiers.dossiers[input];
    document.getElementById('dn').innerText = data.name;
    // ... reste de ton code d'affichage ...
    dCard.style.display = 'block';
        }

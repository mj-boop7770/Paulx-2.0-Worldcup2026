function dos() {
    // On récupère la valeur brute
    const val = document.getElementById('di').value;
    
    // On transforme uniquement la première lettre en majuscule pour correspondre à tes clés (ex: "france" -> "France")
    const input = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    
    const dCard = document.getElementById('dc');
    
    // On vérifie que la variable globale "dossiers" existe et qu'elle contient bien ta clé
    if (typeof dossiers !== 'undefined' && dossiers[input]) {
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
    } else {
        alert("Dossier introuvable. Vérifie le nom (ex: France, Brazil).");
        dCard.style.display = 'none';
    }
}

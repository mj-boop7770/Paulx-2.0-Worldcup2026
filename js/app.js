// js/app.js

function tab(name, el) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(name).classList.add('active');
    el.classList.add('active');
}

function dos() {
    const input = document.getElementById('di').value.toLowerCase();
    const dCard = document.getElementById('dc');
    
    // On vérifie que la variable globale "dossiers" existe bien
    if (typeof dossiers !== 'undefined') {
        const data = dossiers[input];

        if (data) {
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
            alert("⚠️ Pas de dossier pour '" + input + "' ! (Essaie 'france', 'morocco', 'brazil' si tu les as remplis).");
            dCard.style.display = 'none';
        }
    } else {
        alert("⚠️ Oups, le fichier 'dossiers.js' semble vide ou n'est pas chargé correctement.");
    }
                }

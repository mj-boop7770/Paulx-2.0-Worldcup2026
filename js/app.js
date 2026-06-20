let langueActuelle='fr',filtreActuel="ALL";
const T={fr:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUIN - 19 JUIL 2026",groups:"GROUPES",schedule:"CALENDRIER",predict:"PRÉDICTIONS",dossier:"DOSSIERS",news:"NEWS",oracleBtn:"ORACLE - PRÉDIRE LE MATCH",winA:"VICTOIRE A",draw:"NUL",winB:"VICTOIRE B",placeholder:"France, Espagne, Allemagne...",open:"OUVRIR",attack:"ATTAQUE",defense:"DÉFENSE",form:"FORME",mental:"MENTAL",coach:"SÉLECTIONNEUR",keyplayer:"JOUEUR CLÉ",stars:"ÉTOILES",history:"HISTOIRE",all:"TOUS",grp:"GROUPE ",loadingMatch:"⏳ Chargement...",noMatch:"Aucun match",done:"✅ TERMINÉ",at:"à",diffTeams:"Sélectionnez deux équipes différentes",notFound:"Équipe non trouvée : ",loadingNews:"📰 Chargement...",noNews:"Pas d'actualité",errorNews:"⚠️ Erreur",keyPlayers:"JOUEURS CLÉS",stats:"STATISTIQUES",matchsJour:"MATCHS DU JOUR"},
en:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUN - 19 JUL 2026",groups:"GROUPS",schedule:"SCHEDULE",predict:"PREDICT",dossier:"DOSSIERS",news:"NEWS",oracleBtn:"ORACLE - PREDICT MATCH",winA:"WIN A",draw:"DRAW",winB:"WIN B",placeholder:"France, Spain, Germany...",open:"OPEN",attack:"ATTACK",defense:"DEFENSE",form:"FORM",mental:"MENTAL",coach:"COACH",keyplayer:"KEY PLAYER",stars:"STARS",history:"HISTORY",all:"ALL",grp:"GROUP ",loadingMatch:"⏳ Loading...",noMatch:"No matches",done:"✅ DONE",at:"at",diffTeams:"Select two different teams",notFound:"Team not found: ",loadingNews:"📰 Loading...",noNews:"No news",errorNews:"⚠️ Error",keyPlayers:"KEY PLAYERS",stats:"STATISTICS",matchsJour:"TODAY'S MATCHES"},
pt:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUN - 19 JUL 2026",groups:"GRUPOS",schedule:"CALENDÁRIO",predict:"PREVISÕES",dossier:"DOSSIÊS",news:"NOTÍCIAS",oracleBtn:"ORÁCULO - PREVER JOGO",winA:"VITÓRIA A",draw:"EMPATE",winB:"VITÓRIA B",placeholder:"França, Espanha, Alemanha...",open:"ABRIR",attack:"ATAQUE",defense:"DEFESA",form:"FORMA",mental:"MENTAL",coach:"TÉCNICO",keyplayer:"JOGADOR CHAVE",stars:"ESTRELAS",history:"HISTÓRIA",all:"TUDO",grp:"GRUPO ",loadingMatch:"⏳ Carregando...",noMatch:"Nenhuma partida",done:"✅ CONCLUÍDO",at:"às",diffTeams:"Selecione dois times diferentes",notFound:"Equipe não encontrada: ",loadingNews:"📰 Carregando...",noNews:"Sem notícias",errorNews:"⚠️ Erro",keyPlayers:"JOGADORES CHAVE",stats:"ESTATÍSTICAS",matchsJour:"JOGOS DO DIA"},
sw:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUNI - 19 JULAI 2026",groups:"MAKUNDI",schedule:"RATIBA",predict:"UTABIRI",dossier:"FAILI",news:"HABARI",oracleBtn:"ORACLE - TABIRI MCHEZO",winA:"USHINDI A",draw:"SARE",winB:"USHINDI B",placeholder:"Ufaransa, Hispania, Ujerumani...",open:"FUNGUA",attack:"SHAMBULIO",defense:"ULINZI",form:"HALI",mental:"AKILI",coach:"KOCHA",keyplayer:"MCHEZAJI MUHIMU",stars:"NYOTA",history:"HISTORIA",all:"YOTE",grp:"KIKUNDI ",loadingMatch:"⏳ Inapakia...",noMatch:"Hakuna michezo",done:"✅ KAMATA",at:"saa",diffTeams:"Chagua timu mbili tofauti",notFound:"Timu haipatikani: ",loadingNews:"📰 Inapakia...",noNews:"Hakuna habari",errorNews:"⚠️ Hitilafu",keyPlayers:"WACHEZAJI MUHIMU",stats:"TAKWIMU",matchsJour:"MECHI ZA LEO"},
ar:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 يونيو - 19 يوليو 2026",groups:"المجموعات",schedule:"جدول المباريات",predict:"التنبؤات",dossier:"الملفات",news:"أخبار",oracleBtn:"الأوراكل - توقع المباراة",winA:"الفوز أ",draw:"تعادل",winB:"الفوز ب",placeholder:"فرنسا، إسبانيا، ألمانيا...",open:"افتح",attack:"الهجوم",defense:"الدفاع",form:"الشكل",mental:"عقلي",coach:"المدرب",keyplayer:"لاعب المفتاح",stars:"النجوم",history:"التاريخ",all:"الكل",grp:"المجموعة ",loadingMatch:"⏳ جاري التحميل...",noMatch:"لا توجد مباريات",done:"✅ تم",at:"في",diffTeams:"اختر فريقين مختلفين",notFound:"فريق غير موجود: ",loadingNews:"📰 جاري التحميل...",noNews:"لا توجد أخبار",errorNews:"⚠️ خطأ",keyPlayers:"اللاعبون الرئيسيون",stats:"الإحصائيات",matchsJour:"مباريات اليوم"},
rw:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 Kamena - 19 Nyakanga 2026",groups:"AMATSINDA",schedule:"GAHUNDA",predict:"IGENAMIGABIRO",dossier:"AMADOSIYE",news:"AMAKURU",oracleBtn:"ORACLE - KARABIGABIRO",winA:"INZIRA A",draw:"BUNGUNGUKE",winB:"INZIRA B",placeholder:"Ubufaransa, Espanye, Ubudage...",open:"FUNGURA",attack:"IBITERO",defense:"KURINDA",form:"IMITERERE",mental:"IRITONDA",coach:"UMUGEZI",keyplayer:"UMUKINNYI INZIRA",stars:"INYOTA",history:"AMATEKA",all:"BYOSE",grp:"ITANDUKANIRO ",loadingMatch:"⏳ Iratara...",noMatch:"Nta musanzu",done:"✅ CURUZA",at:"kuri",diffTeams:"Hitamo umusanzu ibiri bitandukanye",notFound:"Umusanzu ntabwo waboneka: ",loadingNews:"📰 Iratara...",noNews:"Nta makuru",errorNews:"⚠️ Ikosa",keyPlayers:"ABAKINNYI BAKOMEYE",stats:"IMIBARE",matchsJour:"IMIKINO Y'UMUSI"}};

const aliasEquipes={"espagne":"Spain","france":"France","allemagne":"Germany","angleterre":"England","brésil":"Brazil","bresil":"Brazil","portugal":"Portugal","argentine":"Argentina","maroc":"Morocco","sénégal":"Senegal","senegal":"Senegal","norvège":"Norway","norvege":"Norway","colombie":"Colombia","belgique":"Belgium","croatie":"Croatia","pays-bas":"Netherlands","pays bas":"Netherlands","hollande":"Netherlands","uruguay":"Uruguay","rdc":"DR Congo","congo":"DR Congo","rd congo":"DR Congo","spain":"Spain","germany":"Germany","england":"England","brazil":"Brazil","argentina":"Argentina","morocco":"Morocco","norway":"Norway","colombia":"Colombia","belgium":"Belgium","croatia":"Croatia","netherlands":"Netherlands","dr congo":"DR Congo","ufaransa":"France","hispania":"Spain","ujerumani":"Germany","uingereza":"England","brazili":"Brazil","ureno":"Portugal","ajentina":"Argentina","moroko":"Morocco","senegali":"Senegal","França":"France","espanha":"Spain","alemanha":"Germany","inglaterra":"England","brasil":"Brazil","marrocos":"Morocco","ubufaransa":"France","espanye":"Spain","ubudage":"Germany","ubwongereza":"England","burezili":"Brazil","porutugale":"Portugal","ajantini":"Argentina","kroeshia":"Croatia","holanda":"Netherlands","kolombia":"Colombia","ibilijike":"Belgium","korowasiya":"Croatia","urugwai":"Uruguay","noriveje":"Norway"};

function normaliserNomEquipe(i){const l=i.trim().toLowerCase();if(aliasEquipes[l])return aliasEquipes[l];const c=Object.keys(dossiers).find(k=>k.toLowerCase()===l);return c||null;}

function changerLangue(code,btn){
  document.documentElement.lang=code;
  document.documentElement.dir=(code==='ar')?'rtl':'ltr';
  langueActuelle=code;localStorage.setItem('langueOctopus',code);
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  const t=T[code];
  document.getElementById('main-title').innerText=t.title;
  document.getElementById('main-sub').innerText=t.sub;
  document.getElementById('badge-dates').innerText=t.dates;
  document.getElementById('btn-groups').innerHTML=t.groups;
  document.getElementById('btn-schedule').innerHTML=t.schedule;
  document.getElementById('btn-predict').innerHTML=t.predict;
  document.getElementById('btn-dossier').innerHTML=t.dossier;
  document.getElementById('btn-news').innerHTML=t.news+'<span class="live-dot"></span>';
  document.getElementById('btn-oracle-predict').innerText=t.oracleBtn;
  document.getElementById('lbl-winA').innerText=t.winA;
  document.getElementById('lbl-draw').innerText=t.draw;
  document.getElementById('lbl-winB').innerText=t.winB;
  document.getElementById('di').placeholder=t.placeholder;
  document.getElementById('btn-open-dossier').innerText=t.open;
  document.getElementById('lbl-attack').innerText=t.attack;
  document.getElementById('lbl-defense').innerText=t.defense;
  document.getElementById('lbl-form').innerText=t.form;
  document.getElementById('lbl-mental').innerText=t.mental;
  document.getElementById('lbl-coach').innerText=t.coach;
  document.getElementById('lbl-keyplayer').innerText=t.keyplayer;
  document.getElementById('lbl-stars').innerText=t.stars;
  document.getElementById('lbl-history').innerText=t.history;
  const act=document.querySelector('.section.active').id;
  if(act==='schedule'){document.getElementById('mfilter').innerHTML='';initFilters();afficherMatchs();}
  else if(act==='news')afficherMessagesQuotidiens();
  else if(act==='dossier'&&document.getElementById('dc').style.display==='block')dos();
}

function tab(secId,btn){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById(secId).classList.add('active');
  if(btn)btn.classList.add('active');
  if(secId==='groups')initGroups();
  if(secId==='schedule')initSchedule();
  if(secId==='predict')initPredictSelectors();
  if(secId==='news')afficherMessagesQuotidiens();
}

function extraireToutesLesEquipes(){let eq=[];if(typeof worldCupData!=='undefined'&&worldCupData.groups){for(const t of Object.values(worldCupData.groups))t.forEach(x=>{if(x.name)eq.push(x.name);});}return eq.sort();}

function initGroups(){
  const c=document.getElementById('gg');if(!c)return;c.innerHTML='';
  if(typeof worldCupData==='undefined'||!worldCupData.groups)return;
  for(const[letter,teams]of Object.entries(worldCupData.groups)){
    let h=`<div class="card"><div class="glabel">GROUP ${letter}</div>`;
    teams.forEach(t=>{h+=`<div class="trow" onclick="rechercherPaysDepuisGroupe('${t.name}')"><span>${t.name}</span><span class="rk">#${t.fifa_rank}</span></div>`;});
    c.innerHTML+=h+`</div>`;
  }
}

function rechercherPaysDepuisGroupe(n){const b=document.getElementById('btn-dossier'),i=document.getElementById('di');if(i)i.value=n;tab('dossier',b);dos();}

function initSchedule(){initFilters();afficherMatchs();}

function initFilters(){
  const container=document.getElementById('mfilter');if(!container||container.children.length>0)return;
  const t=T[langueActuelle];
  ["ALL","A","B","C","D","E","F","G","H","I","J","K","L"].forEach(g=>{
    const btn=document.createElement('button');btn.innerText=g==="ALL"?t.all:t.grp+g;
    if(g===filtreActuel)btn.classList.add('active');
    btn.onclick=function(){document.querySelectorAll('#mfilter button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');filtreActuel=g;afficherMatchs();};
    container.appendChild(btn);
  });
}

async function afficherMatchs(){
  const c=document.getElementById('matchlist');if(!c)return;
  const t=T[langueActuelle];c.innerHTML=`<p style='color:#94A3B8;padding:2rem;'>${t.loadingMatch}</p>`;
  try{
    const res=await fetch('./2026.json');if(!res.ok)throw new Error();
    const d=await res.json();c.innerHTML='';
    let mF=d.rounds[0].matches.filter(m=>filtreActuel==="ALL"||(m.group&&m.group.toString().toUpperCase().includes(filtreActuel)));
    if(mF.length===0){c.innerHTML=`<p style='color:#94A3B8;padding:2rem;'>${t.noMatch}</p>`;return;}
    mF.forEach(m=>{
      let sH=`<span class="mresult">VS</span>`,dt=m.date||'';
      if(m.score1!==undefined&&m.score1!==null){sH=`<span class="mresult" style="color:#F59E0B;">${m.score1} - ${m.score2}</span>`;dt+=` | ${t.done}`;}
      else if(m.time){try{dt+=` ${t.at} ${new Date(`${m.date}T${m.time}:00Z`).toLocaleTimeString(navigator.language,{hour:'2-digit',minute:'2-digit'})}`;}catch(e){dt+=` (${m.time})`;}}
      c.innerHTML+=`<div class="mcard"><div class="mdate">${dt}</div><div class="mteams"><span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team1}')">${m.team1}</span> <span style="cursor:pointer;" onclick="rechercherPaysDepuisGroupe('${m.team2}')">${m.team2}</span> <span class="mgroup">${m.group}</span></div><div style="display:flex;justify-content:space-between;">${sH}</div></div>`;
    });
  }catch(e){c.innerHTML=`<p style='color:#EF4444;padding:2rem;'>⚠️ Erreur Calendrier</p>`;}
}

function initPredictSelectors(){
  const a=document.getElementById('ta'),b=document.getElementById('tb');if(!a||!b||a.children.length>0)return;
  a.innerHTML='';b.innerHTML='';
  extraireToutesLesEquipes().forEach(t=>{a.innerHTML+=`<option value="${t}">${t}</option>`;b.innerHTML+=`<option value="${t}">${t}</option>`;});
  if(a.children[0])a.selectedIndex=0;if(b.children[1])b.selectedIndex=1;
}

function parseNote(v){if(!v)return 5;const m=String(v).match(/[\d.]+/);if(!m)return 5;let n=parseFloat(m[0]);if(n>10)n=n/10;return Math.min(10,Math.max(0,n));}

function calculerForce(eq){
  if(typeof dossiers==='undefined'||!dossiers[eq])return 5;
  const d=dossiers[eq]['fr']||dossiers[eq][Object.keys(dossiers[eq])[0]];
  return parseNote(d.attack)*0.30+parseNote(d.defense)*0.25+parseNote(d.form)*0.25+parseNote(d.mental)*0.20;
}

function predict(){
  const tA=document.getElementById('ta').value,tB=document.getElementById('tb').value,t=T[langueActuelle];
  if(tA===tB){alert(t.diffTeams);return;}
  const fA=calculerForce(tA),fB=calculerForce(tB),tot=fA+fB;
  const ecart=Math.abs(fA-fB),nul=Math.max(5,28-ecart*3);
  let wA=Math.round((fA/tot)*100*(1-nul/100)),wB=Math.round((fB/tot)*100*(1-nul/100)),d=100-wA-wB;
  const gA=Math.round((fA/10)*2.5*Math.random()+0.2),gB=Math.round((fB/10)*2.5*Math.random()+0.2);
  document.getElementById('rta').innerText=tA;document.getElementById('rtb').innerText=tB;
  document.getElementById('rs').innerText=`${gA} - ${gB}`;
  document.getElementById('pw').innerText=`${wA}%`;document.getElementById('pd').innerText=`${d}%`;document.getElementById('pl').innerText=`${wB}%`;
  document.getElementById('bat').innerText=`${tA} ATTACK`;document.getElementById('bbt').innerText=`${tB} ATTACK`;
  document.getElementById('bab').innerHTML=`<div class="btr"><div class="bf" style="width:${wA}%"></div></div>`;
  document.getElementById('bbb').innerHTML=`<div class="btr"><div class="bf" style="width:${wB}%"></div></div>`;
  document.getElementById('rc').style.display='block';
}

function dos(){
  const s=document.getElementById('di');if(!s||!s.value.trim())return;
  const t=T[langueActuelle],cle=normaliserNomEquipe(s.value);
  if(!cle||typeof dossiers==='undefined'||!dossiers[cle]){alert(t.notFound+s.value);return;}
  const d=dossiers[cle][langueActuelle]||dossiers[cle]['fr'];
  document.getElementById('dn').innerText=d.name||cle;
  document.getElementById('dm').innerText=d.meta||'Nations Cup';
  document.getElementById('da').innerText=d.attack||'-';
  document.getElementById('dd').innerText=d.defense||'-';
  document.getElementById('df').innerText=d.form||'-';
  document.getElementById('dme').innerText=d.mental||'-';
  document.getElementById('dc2').innerText=d.coach||'-';
  document.getElementById('dkp').innerText=d.keyPlayer||'-';
  document.getElementById('dsp').innerText=d.stars||'-';
  document.getElementById('dh').innerText=d.history||'-';
  document.getElementById('dc').style.display='block';
}

function lireChamp(a,champ){const s=langueActuelle!=='fr'?`${champ}_${langueActuelle}`:champ;return a[s]||a[champ]||'';}

async function afficherMessagesQuotidiens(){
  const c=document.getElementById('news-list');if(!c)return;
  const t=T[langueActuelle];
  c.innerHTML=`<p style='color:#94A3B8;text-align:center;padding:2rem;'>${t.loadingNews}</p>`;
  try{
    const res=await fetch('./messages.json');if(!res.ok)throw new Error();
    const d=await res.json();
    c.innerHTML=`<div style="color:#64748B;font-size:0.75rem;font-weight:bold;margin-bottom:1rem;text-align:right;">📅 FLASH : ${d.date||'2026'}</div>`;
    if(!d.articles||d.articles.length===0){c.innerHTML+=`<p style='color:#94A3B8;text-align:center;padding:2rem;'>${t.noNews}</p>`;return;}
    d.articles.forEach(a=>{
      const badge=lireChamp(a,'badge'),titre=lireChamp(a,'titre'),texte=lireChamp(a,'texte');
      let h=`<div class="card" style="margin-bottom:1.2rem;border-left:4px solid #8B5CF6;padding:1rem;background:#111827;border-radius:8px;">`;
      if(badge)h+=`<div style="font-size:0.7rem;font-weight:700;color:#8B5CF6;margin-bottom:0.5rem;">${badge}</div>`;
      h+=`<div style="color:#A78BFA;font-weight:700;font-size:0.9rem;margin-bottom:0.6rem;line-height:1.4;">${titre}</div>`;
      if(texte)texte.split('\n\n').forEach(p=>{if(p.trim())h+=`<p style="color:#94A3B8;font-size:0.8rem;line-height:1.6;margin-bottom:0.5rem;">${p.trim()}</p>`;});
      if(a.joueurs_cles&&a.joueurs_cles.length>0){
        h+=`<div style="margin-top:0.8rem;border-top:1px solid #1E293B;padding-top:0.8rem;"><div style="font-size:0.65rem;font-weight:700;color:#F59E0B;margin-bottom:0.5rem;">⭐ ${t.keyPlayers}</div>`;
        a.joueurs_cles.forEach(j=>{h+=`<div style="margin-bottom:0.4rem;"><span style="color:#fff;font-size:0.78rem;font-weight:600;">${j.nom}</span><br><span style="color:#64748B;font-size:0.72rem;">${j.action}</span></div>`;});
        h+=`</div>`;
      }
      if(a.statistiques){
        h+=`<div style="margin-top:0.8rem;border-top:1px solid #1E293B;padding-top:0.8rem;"><div style="font-size:0.65rem;font-weight:700;color:#38BDF8;margin-bottom:0.5rem;">📊 ${t.stats}</div>`;
        Object.entries(a.statistiques).forEach(([m,s])=>{h+=`<div style="margin-bottom:0.4rem;"><span style="color:#64748B;font-size:0.7rem;font-weight:600;">${m.replace(/_/g,' ').toUpperCase()} :</span><br><span style="color:#94A3B8;font-size:0.7rem;">${s}</span></div>`;});
        h+=`</div>`;
      }
      if(a.matchs_du_jour&&a.matchs_du_jour.length>0){
        h+=`<div style="margin-top:0.8rem;border-top:1px solid #1E293B;padding-top:0.8rem;"><div style="font-size:0.65rem;font-weight:700;color:#34D399;margin-bottom:0.5rem;">🗓️ ${t.matchsJour}</div>`;
        a.matchs_du_jour.forEach(m=>{h+=`<div style="background:#0A1224;border-radius:6px;padding:0.6rem;margin-bottom:0.4rem;"><div style="color:#fff;font-size:0.8rem;font-weight:700;">${m.match}</div><div style="color:#94A3B8;font-size:0.7rem;">🕐 ${m.heure} · 🏟️ ${m.stade}</div>${m.enjeu?`<div style="color:#F59E0B;font-size:0.7rem;margin-top:0.2rem;">⚡ ${m.enjeu}</div>`:''}</div>`;});
        h+=`</div>`;
      }
      h+=`</div>`;
      c.innerHTML+=h;
    });
  }catch(e){c.innerHTML=`<p style='color:#EF4444;text-align:center;padding:2rem;'>${T[langueActuelle].errorNews}</p>`;}
}

window.onload=function(){
  const l=localStorage.getItem('langueOctopus')||'fr';
  const b=document.querySelector(`.lang-btn[onclick*="'${l}'"]`);
  changerLangue(l,b);initGroups();
};
    

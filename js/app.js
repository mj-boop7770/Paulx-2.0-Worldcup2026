let L='fr',F="ALL",NC=null;
const T={fr:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUIN - 19 JUIL 2026",groups:"GROUPES",schedule:"CALENDRIER",predict:"PRÉDICTIONS",dossier:"DOSSIERS",news:"NEWS",oracleBtn:"ORACLE - PRÉDIRE LE MATCH",winA:"VICTOIRE A",draw:"NUL",winB:"VICTOIRE B",placeholder:"France, Espagne, Allemagne...",open:"OUVRIR",attack:"ATTAQUE",defense:"DÉFENSE",form:"FORME",mental:"MENTAL",coach:"SÉLECTIONNEUR",keyplayer:"JOUEUR CLÉ",stars:"ÉTOILES",history:"HISTOIRE",all:"TOUS",grp:"GROUPE ",lm:"⏳ Chargement...",nm:"Aucun match",done:"✅ TERMINÉ",at:"à",dt:"Sélectionnez deux équipes différentes",nf:"Équipe non trouvée : ",ln:"📰 Chargement...",nn:"Pas d'actualité",en:"⚠️ Erreur",kp:"JOUEURS CLÉS",st:"STATISTIQUES",mj:"MATCHS DU JOUR",mb:"🔥 MATCH DU JOUR",ia:"🧠 ANALYSE IA",tap:"Touchez une équipe pour voir son dossier"},
en:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUN - 19 JUL 2026",groups:"GROUPS",schedule:"SCHEDULE",predict:"PREDICT",dossier:"DOSSIERS",news:"NEWS",oracleBtn:"ORACLE - PREDICT MATCH",winA:"WIN A",draw:"DRAW",winB:"WIN B",placeholder:"France, Spain, Germany...",open:"OPEN",attack:"ATTACK",defense:"DEFENSE",form:"FORM",mental:"MENTAL",coach:"COACH",keyplayer:"KEY PLAYER",stars:"STARS",history:"HISTORY",all:"ALL",grp:"GROUP ",lm:"⏳ Loading...",nm:"No matches",done:"✅ DONE",at:"at",dt:"Select two different teams",nf:"Team not found: ",ln:"📰 Loading...",nn:"No news",en:"⚠️ Error",kp:"KEY PLAYERS",st:"STATISTICS",mj:"TODAY'S MATCHES",mb:"🔥 TODAY'S MATCH",ia:"🧠 AI ANALYSIS",tap:"Tap a team to see its dossier"},
pt:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUN - 19 JUL 2026",groups:"GRUPOS",schedule:"CALENDÁRIO",predict:"PREVISÕES",dossier:"DOSSIÊS",news:"NOTÍCIAS",oracleBtn:"ORÁCULO - PREVER JOGO",winA:"VITÓRIA A",draw:"EMPATE",winB:"VITÓRIA B",placeholder:"França, Espanha, Alemanha...",open:"ABRIR",attack:"ATAQUE",defense:"DEFESA",form:"FORMA",mental:"MENTAL",coach:"TÉCNICO",keyplayer:"JOGADOR CHAVE",stars:"ESTRELAS",history:"HISTÓRIA",all:"TUDO",grp:"GRUPO ",lm:"⏳ Carregando...",nm:"Nenhuma partida",done:"✅ CONCLUÍDO",at:"às",dt:"Selecione dois times diferentes",nf:"Equipe não encontrada: ",ln:"📰 Carregando...",nn:"Sem notícias",en:"⚠️ Erro",kp:"JOGADORES CHAVE",st:"ESTATÍSTICAS",mj:"JOGOS DO DIA",mb:"🔥 JOGO DO DIA",ia:"🧠 ANÁLISE IA",tap:"Toque numa equipa para ver o dossier"},
sw:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 JUNI - 19 JULAI 2026",groups:"MAKUNDI",schedule:"RATIBA",predict:"UTABIRI",dossier:"FAILI",news:"HABARI",oracleBtn:"ORACLE - TABIRI MCHEZO",winA:"USHINDI A",draw:"SARE",winB:"USHINDI B",placeholder:"Ufaransa, Hispania, Ujerumani...",open:"FUNGUA",attack:"SHAMBULIO",defense:"ULINZI",form:"HALI",mental:"AKILI",coach:"KOCHA",keyplayer:"MCHEZAJI MUHIMU",stars:"NYOTA",history:"HISTORIA",all:"YOTE",grp:"KIKUNDI ",lm:"⏳ Inapakia...",nm:"Hakuna michezo",done:"✅ KAMATA",at:"saa",dt:"Chagua timu mbili tofauti",nf:"Timu haipatikani: ",ln:"📰 Inapakia...",nn:"Hakuna habari",en:"⚠️ Hitilafu",kp:"WACHEZAJI MUHIMU",st:"TAKWIMU",mj:"MECHI ZA LEO",mb:"🔥 MCHEZO WA LEO",ia:"🧠 UCHAMBUZI WA AI",tap:"Gonga timu kuona faili"},
ar:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 يونيو - 19 يوليو 2026",groups:"المجموعات",schedule:"جدول المباريات",predict:"التنبؤات",dossier:"الملفات",news:"أخبار",oracleBtn:"الأوراكل - توقع المباراة",winA:"الفوز أ",draw:"تعادل",winB:"الفوز ب",placeholder:"فرنسا، إسبانيا، ألمانيا...",open:"افتح",attack:"الهجوم",defense:"الدفاع",form:"الشكل",mental:"عقلي",coach:"المدرب",keyplayer:"لاعب المفتاح",stars:"النجوم",history:"التاريخ",all:"الكل",grp:"المجموعة ",lm:"⏳ جاري التحميل...",nm:"لا توجد مباريات",done:"✅ تم",at:"في",dt:"اختر فريقين مختلفين",nf:"فريق غير موجود: ",ln:"📰 جاري التحميل...",nn:"لا توجد أخبار",en:"⚠️ خطأ",kp:"اللاعبون الرئيسيون",st:"الإحصائيات",mj:"مباريات اليوم",mb:"🔥 مباراة اليوم",ia:"🧠 تحليل الذكاء الاصطناعي",tap:"انقر على فريق لعرض الملف"},
rw:{title:"WORLDCUP2026 · MUJOS OCTOPUS",sub:"AI FOOTBALL ORACLE · 48 NATIONS · LIVE SCORES",dates:"11 Kamena - 19 Nyakanga 2026",groups:"AMATSINDA",schedule:"GAHUNDA",predict:"IGENAMIGABIRO",dossier:"AMADOSIYE",news:"AMAKURU",oracleBtn:"ORACLE - KARABIGABIRO",winA:"INZIRA A",draw:"BUNGUNGUKE",winB:"INZIRA B",placeholder:"Ubufaransa, Espanye, Ubudage...",open:"FUNGURA",attack:"IBITERO",defense:"KURINDA",form:"IMITERERE",mental:"IRITONDA",coach:"UMUGEZI",keyplayer:"UMUKINNYI INZIRA",stars:"INYOTA",history:"AMATEKA",all:"BYOSE",grp:"ITANDUKANIRO ",lm:"⏳ Iratara...",nm:"Nta musanzu",done:"✅ CURUZA",at:"kuri",dt:"Hitamo umusanzu ibiri bitandukanye",nf:"Umusanzu ntabwo waboneka: ",ln:"📰 Iratara...",nn:"Nta makuru",en:"⚠️ Ikosa",kp:"ABAKINNYI BAKOMEYE",st:"IMIBARE",mj:"IMIKINO Y'UMUSI",mb:"🔥 UMUKINO W'UMUSI",ia:"🧠 ISESENGURA RYA AI",tap:"Kanda ikipe kureba amadosiye"}};
const AE={"espagne":"Spain","france":"France","allemagne":"Germany","angleterre":"England","brésil":"Brazil","bresil":"Brazil","portugal":"Portugal","argentine":"Argentina","maroc":"Morocco","sénégal":"Senegal","senegal":"Senegal","norvège":"Norway","norvege":"Norway","colombie":"Colombia","belgique":"Belgium","croatie":"Croatia","pays-bas":"Netherlands","pays bas":"Netherlands","hollande":"Netherlands","uruguay":"Uruguay","rdc":"DR Congo","congo":"DR Congo","rd congo":"DR Congo","spain":"Spain","germany":"Germany","england":"England","brazil":"Brazil","argentina":"Argentina","morocco":"Morocco","norway":"Norway","colombia":"Colombia","belgium":"Belgium","croatia":"Croatia","netherlands":"Netherlands","dr congo":"DR Congo","ufaransa":"France","hispania":"Spain","ujerumani":"Germany","uingereza":"England","brazili":"Brazil","ureno":"Portugal","ajentina":"Argentina","moroko":"Morocco","senegali":"Senegal","França":"France","espanha":"Spain","alemanha":"Germany","inglaterra":"England","brasil":"Brazil","marrocos":"Morocco","ubufaransa":"France","espanye":"Spain","ubudage":"Germany","ubwongereza":"England","burezili":"Brazil","porutugale":"Portugal","ajantini":"Argentina","kroeshia":"Croatia","holanda":"Netherlands","kolombia":"Colombia","ibilijike":"Belgium","korowasiya":"Croatia","urugwai":"Uruguay","noriveje":"Norway"};
const $=id=>document.getElementById(id);
function NE(i){const l=i.trim().toLowerCase();if(AE[l])return AE[l];return Object.keys(dossiers).find(k=>k.toLowerCase()===l)||null;}
function changerLangue(code,btn){
document.documentElement.lang=code;document.documentElement.dir=code==='ar'?'rtl':'ltr';
L=code;localStorage.setItem('langueOctopus',code);
document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
if(btn)btn.classList.add('active');
const t=T[code];
$('main-title').innerText=t.title;$('main-sub').innerText=t.sub;$('badge-dates').innerText=t.dates;
$('btn-groups').innerHTML=t.groups;$('btn-schedule').innerHTML=t.schedule;$('btn-predict').innerHTML=t.predict;
$('btn-dossier').innerHTML=t.dossier;$('btn-news').innerHTML=t.news+'<span class="live-dot"></span>';
$('btn-oracle-predict').innerText=t.oracleBtn;$('lbl-winA').innerText=t.winA;$('lbl-draw').innerText=t.draw;
$('lbl-winB').innerText=t.winB;$('di').placeholder=t.placeholder;$('btn-open-dossier').innerText=t.open;
$('lbl-attack').innerText=t.attack;$('lbl-defense').innerText=t.defense;$('lbl-form').innerText=t.form;
$('lbl-mental').innerText=t.mental;$('lbl-coach').innerText=t.coach;$('lbl-keyplayer').innerText=t.keyplayer;
$('lbl-stars').innerText=t.stars;$('lbl-history').innerText=t.history;
const act=document.querySelector('.section.active').id;
if(act==='schedule'){$('mfilter').innerHTML='';initFilters();afficherMatchs();}
else if(act==='news')afficherNews();
else if(act==='dossier'){afficherMatchsJour();if($('dc').style.display==='block')dos();}
}
function tab(s,btn){
document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
$(s).classList.add('active');if(btn)btn.classList.add('active');
if(s==='groups')initGroups();if(s==='schedule')initSchedule();
if(s==='predict')initPredictSelectors();if(s==='news')afficherNews();
if(s==='dossier')afficherMatchsJour();
}
function eqList(){let e=[];if(typeof worldCupData!=='undefined'&&worldCupData.groups)for(const t of Object.values(worldCupData.groups))t.forEach(x=>{if(x.name)e.push(x.name);});return e.sort();}
function initGroups(){
const c=$('gg');if(!c)return;c.innerHTML='';
if(typeof worldCupData==='undefined'||!worldCupData.groups)return;
for(const[l,teams]of Object.entries(worldCupData.groups)){
let h=`<div class="card"><div class="glabel">GROUP ${l}</div>`;
teams.forEach(t=>{h+=`<div class="trow" onclick="goD('${t.name}')"><span>${t.name}</span><span class="rk">#${t.fifa_rank}</span></div>`;});
c.innerHTML+=h+`</div>`;
}
}
function goD(n){const i=$('di');if(i)i.value=n;tab('dossier',$('btn-dossier'));dos();}
function initSchedule(){initFilters();afficherMatchs();}
function initFilters(){
const c=$('mfilter');if(!c||c.children.length>0)return;
const t=T[L];
["ALL","A","B","C","D","E","F","G","H","I","J","K","L"].forEach(g=>{
const b=document.createElement('button');b.innerText=g==="ALL"?t.all:t.grp+g;
if(g===F)b.classList.add('active');
b.onclick=()=>{document.querySelectorAll('#mfilter button').forEach(x=>x.classList.remove('active'));b.classList.add('active');F=g;afficherMatchs();};
c.appendChild(b);
});
}
async function afficherMatchs(){
const c=$('matchlist');if(!c)return;const t=T[L];
c.innerHTML=`<p style='color:#94A3B8;padding:2rem;'>${t.lm}</p>`;
try{
const r=await fetch('./2026.json');if(!r.ok)throw 0;
const d=await r.json();c.innerHTML='';
const mF=d.rounds[0].matches.filter(m=>F==="ALL"||(m.group&&m.group.toString().toUpperCase().includes(F)));
if(!mF.length){c.innerHTML=`<p style='color:#94A3B8;padding:2rem;'>${t.nm}</p>`;return;}
mF.forEach(m=>{
let sH=`<span class="mresult">VS</span>`,dt=m.date||'';
if(m.score1!=null){sH=`<span class="mresult" style="color:#F59E0B;">${m.score1} - ${m.score2}</span>`;dt+=` | ${t.done}`;}
else if(m.time){try{dt+=` ${t.at} ${new Date(`${m.date}T${m.time}:00Z`).toLocaleTimeString(navigator.language,{hour:'2-digit',minute:'2-digit'})}`;}catch(e){dt+=` (${m.time})`;}}
c.innerHTML+=`<div class="mcard"><div class="mdate">${dt}</div><div class="mteams"><span style="cursor:pointer;" onclick="goD('${m.team1}')">${m.team1}</span> <span style="cursor:pointer;" onclick="goD('${m.team2}')">${m.team2}</span> <span class="mgroup">${m.group}</span></div><div style="display:flex;justify-content:space-between;">${sH}</div></div>`;
});
}catch(e){c.innerHTML=`<p style='color:#EF4444;padding:2rem;'>⚠️ Erreur</p>`;}
}
function initPredictSelectors(){
const a=$('ta'),b=$('tb');if(!a||!b||a.children.length>0)return;
a.innerHTML='';b.innerHTML='';
eqList().forEach(t=>{a.innerHTML+=`<option>${t}</option>`;b.innerHTML+=`<option>${t}</option>`;});
a.selectedIndex=0;if(b.children[1])b.selectedIndex=1;
}
function pN(v){if(!v)return 5;const m=String(v).match(/[\d.]+/);if(!m)return 5;let n=parseFloat(m[0]);return Math.min(10,Math.max(0,n>10?n/10:n));}
function force(eq){
if(typeof dossiers==='undefined'||!dossiers[eq])return 5;
const d=dossiers[eq].fr||dossiers[eq][Object.keys(dossiers[eq])[0]];
return pN(d.attack)*.30+pN(d.defense)*.25+pN(d.form)*.25+pN(d.mental)*.20;
}
function newsInfo(nom){
if(!NC)return{mdj:false,mi:null,jk:[],st:null};
const n=nom.toLowerCase();let mdj=false,mi=null,jk=[],st=null;
for(const a of NC.articles||[]){
for(const m of a.matchs_du_jour||[])if(m.match&&m.match.toLowerCase().includes(n)){mdj=true;mi=m;}
for(const j of a.joueurs_cles||[])if(j.nom&&j.nom.toLowerCase().includes(n))jk.push(j);
if(a.statistiques)for(const[k,v]of Object.entries(a.statistiques))if(k.toLowerCase().includes(n.substring(0,4)))st=v;
}
return{mdj,mi,jk,st};
}
async function predict(){
const tA=$('ta').value,tB=$('tb').value,t=T[L];
if(tA===tB){alert(t.dt);return;}
if(!NC){try{const r=await fetch('./messages.json');if(r.ok)NC=await r.json();}catch(e){}}
const iA=newsInfo(tA),iB=newsInfo(tB);
let fA=force(tA)+(iA.mdj?.5:0)+iA.jk.length*.3;
let fB=force(tB)+(iB.mdj?.5:0)+iB.jk.length*.3;
const tot=fA+fB,ecart=Math.abs(fA-fB),nul=Math.max(5,28-ecart*3);
let wA=Math.round(fA/tot*100*(1-nul/100)),wB=Math.round(fB/tot*100*(1-nul/100)),d=100-wA-wB;
const gA=Math.round(fA/10*2.5*Math.random()+.2),gB=Math.round(fB/10*2.5*Math.random()+.2);
$('rta').innerText=tA;$('rtb').innerText=tB;$('rs').innerText=`${gA} - ${gB}`;
$('pw').innerText=`${wA}%`;$('pd').innerText=`${d}%`;$('pl').innerText=`${wB}%`;
$('bat').innerText=`${tA} ATTACK`;$('bbt').innerText=`${tB} ATTACK`;
$('bab').innerHTML=`<div class="btr"><div class="bf" style="width:${wA}%"></div></div>`;
$('bbb').innerHTML=`<div class="btr"><div class="bf" style="width:${wB}%"></div></div>`;
let an='';
const mi=iA.mi||iB.mi;
if(iA.mdj||iB.mdj)an+=`<div class="ni gold"><div class="nl">${t.mb}</div>${mi?`<div class="ns">🕐 ${mi.heure||''} · 🏟️ ${mi.stade||''}</div>${mi.enjeu?`<div class="ne">⚡ ${mi.enjeu}</div>`:''}`:''})</div>`;
const jk=[...iA.jk,...iB.jk];
if(jk.length)an+=`<div class="ni purple"><div class="nl">${t.ia}</div>${jk.map(j=>`<div class="nj"><span class="njn">⭐ ${j.nom}</span><br><span class="nja">${j.action}</span></div>`).join('')}</div>`;
const st=iA.st||iB.st;
if(st)an+=`<div class="ni blue"><div class="nl">📊 ${t.st}</div><div class="ns">${st}</div></div>`;
const za=$('predict-analyse');if(za)za.innerHTML=an;
$('rc').style.display='block';
}
async function afficherMatchsJour(){
const c=$('dossier-matchday');if(!c)return;
if(!NC){try{const r=await fetch('./messages.json');if(r.ok)NC=await r.json();}catch(e){}}
if(!NC){c.style.display='none';return;}
const t=T[L];
let matchs=[];
for(const a of NC.articles||[])for(const m of a.matchs_du_jour||[])if(!matchs.find(x=>x.match===m.match))matchs.push(m);
if(!matchs.length){c.style.display='none';return;}
let h=`<div class="nbox gold"><div class="nl">🗓️ ${t.mj} · <span class="ndim">${t.tap}</span></div>`;
matchs.forEach(m=>{
const parts=(m.match||'').split(' vs ');
const eq1=(parts[0]||'').trim(),eq2=(parts[1]||'').trim();
const f1=force(eq1),f2=force(eq2),tot=f1+f2;
const p1=Math.round(f1/tot*100),p2=100-p1;
h+=`<div class="nmatch"><div class="nteams"><span onclick="goD('${eq1}')" class="nteam">${eq1}</span><span class="nvs">VS</span><span onclick="goD('${eq2}')" class="nteam">${eq2}</span></div>`;
h+=`<div class="nbar"><div style="width:${p1}%;background:#0066CC;height:100%;"></div><div style="width:${p2}%;background:#E53935;height:100%;"></div></div>`;
h+=`<div class="ninfo"><span style="color:#0066CC;">${p1}%</span><span>🕐 ${m.heure||''} · 🏟️ ${m.stade||''}</span><span style="color:#E53935;">${p2}%</span></div>`;
if(m.enjeu)h+=`<div class="ne">⚡ ${m.enjeu}</div>`;
h+=`</div>`;
});
h+=`</div>`;
c.innerHTML=h;c.style.display='block';
}
function dos(){
const s=$('di');if(!s||!s.value.trim())return;
const t=T[L],cle=NE(s.value);
if(!cle||typeof dossiers==='undefined'||!dossiers[cle]){alert(t.nf+s.value);return;}
const d=dossiers[cle][L]||dossiers[cle].fr;
$('dn').innerText=d.name||cle;$('dm').innerText=d.meta||'Nations Cup';
$('da').innerText=d.attack||'-';$('dd').innerText=d.defense||'-';
$('df').innerText=d.form||'-';$('dme').innerText=d.mental||'-';
$('dc2').innerText=d.coach||'-';$('dkp').innerText=d.keyPlayer||'-';
$('dsp').innerText=d.stars||'-';$('dh').innerText=d.history||'-';
$('dc').style.display='block';
}
function lire(a,c){const s=L!=='fr'?`${c}_${L}`:c;return a[s]||a[c]||'';}
async function afficherNews(){
const c=$('news-list');if(!c)return;const t=T[L];
c.innerHTML=`<p style='color:#94A3B8;text-align:center;padding:2rem;'>${t.ln}</p>`;
try{
const r=await fetch('./messages.json');if(!r.ok)throw 0;
const d=await r.json();NC=d;
c.innerHTML=`<div class="ndate">📅 FLASH : ${d.date||'2026'}</div>`;
if(!d.articles?.length){c.innerHTML+=`<p style='color:#94A3B8;text-align:center;padding:2rem;'>${t.nn}</p>`;return;}
d.articles.forEach(a=>{
const badge=lire(a,'badge'),titre=lire(a,'titre'),texte=lire(a,'texte');
let h=`<div class="card ncard">`;
if(badge)h+=`<div class="nbadge">${badge}</div>`;
h+=`<div class="ntitre">${titre}</div>`;
if(texte)texte.split('\n\n').forEach(p=>{if(p.trim())h+=`<p class="ntexte">${p.trim()}</p>`;});
if(a.joueurs_cles?.length){
h+=`<div class="nsec"><div class="nl gold2">⭐ ${t.kp}</div>`;
a.joueurs_cles.forEach(j=>{h+=`<div class="nj"><span class="njn">${j.nom}</span><br><span class="nja">${j.action}</span></div>`;});
h+=`</div>`;
}
if(a.statistiques){
h+=`<div class="nsec"><div class="nl blue2">📊 ${t.st}</div>`;
Object.entries(a.statistiques).forEach(([k,v])=>{h+=`<div class="nstat"><span class="nsk">${k.replace(/_/g,' ').toUpperCase()} :</span><br><span class="nsv">${v}</span></div>`;});
h+=`</div>`;
}
if(a.matchs_du_jour?.length){
h+=`<div class="nsec"><div class="nl green2">🗓️ ${t.mj}</div>`;
a.matchs_du_jour.forEach(m=>{h+=`<div class="nmini"><div class="nmatch-title">${m.match}</div><div class="ninfo2">🕐 ${m.heure} · 🏟️ ${m.stade}</div>${m.enjeu?`<div class="ne">⚡ ${m.enjeu}</div>`:''}</div>`;});
h+=`</div>`;
}
c.innerHTML+=h+`</div>`;
});
}catch(e){c.innerHTML=`<p style='color:#EF4444;text-align:center;padding:2rem;'>${T[L].en}</p>`;}
}
window.onload=()=>{const l=localStorage.getItem('langueOctopus')||'fr';changerLangue(l,document.querySelector(`.lang-btn[onclick*="'${l}'"]`));initGroups();};
    

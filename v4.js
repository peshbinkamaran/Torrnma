/* TORRNAMA V4 — independent isometric maps, practice lab, local content studio.
   Created for Peshbin Kamran · Supervisor M. Dana Hasan.
   Simulations are educational illustrations; only V3 DNS/HTTP use live public APIs. */
(() => {
'use strict';
const api=window.TorrnamaBridge;
if(!api)return;
const $=id=>document.getElementById(id);
const ku=()=>api.state.lang==='ckb';
const tr=(k,e)=>ku()?k:e;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={
 explore:['پرۆتۆکۆلەکان','Explore'], lab:['تاقیگەی 3D','3D Lab'], admin:['پانێڵی بەڕێوەبردن','Content Studio'],
 labTitle:['تاقیگەی تۆڕی 3D','Interactive 3D-style network lab'],labIntro:['ئامێرەکان زیاد بکە، ڕایانبکێشە، پەیوەندی دروست بکە و ڕێڕەوی Ping، DNS و HTTP بە سیموڵەیشن تاقی بکەرەوە.','Add devices, drag them into place, connect links, then simulate Ping, DNS and HTTP packet paths.'],
 addClient:['کڕیار','Client'],addRouter:['ڕاوتەر','Router'],addSwitch:['سوویچ','Switch'],addServer:['سێرڤەر','Server'],addFirewall:['فایەروۆڵ','Firewall'],
 link:['بەستنەوەی ئامێرەکان','Connect devices'],delete:['سڕینەوەی هەڵبژێردراو','Delete selected'],topology:['نەخشەی تۆڕی 3D','Isometric network diagram'],dragHint:['ئامێرەکان بە ماوس ڕابکێشە • دوو ئامێر هەڵبژێرە بۆ بەستنەوە','Drag nodes to reposition · select two nodes to connect'],
 inspector:['وردەکاریی ئامێر','Device inspector'],deviceName:['ناو','Device name'],apply:['پاشەکەوتی گۆڕانکاری','Apply changes'],simulate:['سیموڵەیشن','Simulation'],testType:['جۆری تاقیکردنەوە','Test type'],run:['▶ دەستپێکردنی تاقیکردنەوە','▶ Run simulation'],step:['هەنگاوی داهاتوو','Next step'],clearTrace:['سڕینەوەی ڕێڕەو','Clear trace'],saveTopology:['پاشەکەوتی نەخشە لەم Browser ـە','Save in this browser'],downloadTopology:['داگرتنی JSON','Export JSON'],importTopology:['هاوردەکردنی JSON','Import JSON'],resetTopology:['گەڕاندنەوەی نموونە','Reset example'],
 simulationNote:['ئەم تاقیگەیە سیموڵەیشنی فێرکارییە، نەک تاقیکردنەوەی پاکێتی ڕاستەقینەی سیستەم؛ هیچ داواکارییەکی Ping لە تۆڕی ڕاستەقینە نەنێرێت.','This is a conceptual teaching simulator, not an operating-system packet capture or real ICMP probe.'],
 adminTitle:['پانێڵی بەڕێوەبردنی ناوەڕۆک','Content editing studio'],adminIntro:['دەقی کوردی و ئینگلیزیی وانەکان دەستکاری بکە و JSON ـی گۆڕانکارییەکان بۆ خۆت هەڵبگرە.','Edit lesson descriptions in Sorani and English and export your drafts as JSON.'],
 adminWarning:['ئاگاداری: ئەمە دەستکاریکەری ناوخۆییە، نەک پانێڵی Admin ـی پارێزراوی ئۆنلاین. گۆڕانکارییەکان تەنها لە Browser ـی ئێستادا دەبینرێن؛ بۆ بڵاوکردنەوە بۆ هەموو سەردانیکەران پێویستە فایلەکان نوێ بکەیتەوە یان Backend و Login ـی پارێزراو زیاد بکەیت.','Important: This is a local editing studio, NOT secure online admin authentication. Changes affect this browser only. Publishing for all visitors requires redeploying updated files or adding a secure authenticated backend.'],
 chooseProtocol:['پرۆتۆکۆل هەڵبژێرە','Choose protocol'],kuDescription:['ڕوونکردنەوە بە کوردی سۆرانی','Sorani explanation'],enDescription:['ڕوونکردنەوە بە ئینگلیزی','English explanation'],saveDraft:['پاشەکەوتی دەستکارییەکان','Save local changes'],resetDraft:['گەڕاندنەوەی دەقی سەرەکی','Restore original description'],draftTools:['ئامرازەکانی بەڕێوەبردن','Editor tools'],draftHelp:['دەقی گۆڕدراو لە هەمان Browser دا دەمێنێتەوە؛ JSON دابگرە بۆ Backup و بۆ بەکارهێنان لە وەشانی داهاتوو.','Draft edits persist in this browser. Download JSON as a backup or for a future content publishing workflow.'],exportDrafts:['داگرتنی دەستکارییەکان','Export all drafts'],importDrafts:['هاوردەکردنی دەستکارییەکان','Import draft JSON']
};
function updateI18n(){document.querySelectorAll('[data-v4]').forEach(el=>{const s=labels[el.dataset.v4];if(s)el.textContent=s[ku()?0:1]}); if($('v4SelectedName'))$('v4SelectedName').textContent=selectedNode()?nameOf(selectedNode()):tr('ئامێرێک هەڵبژێرە','Select a device');renderMainDiagram();renderLab();}
function setTab(tab){document.body.classList.remove('v4-page-lab','v4-page-admin');if(tab!=='explore')document.body.classList.add('v4-page-'+tab);for(const [name,id] of [['explore','v4TabExplore'],['lab','v4TabLab'],['admin','v4TabAdmin']]){let b=$(id);b.classList.toggle('active',name===tab);b.setAttribute('aria-selected',String(name===tab))} if(tab==='admin')loadAdminEditor();if(tab==='lab')renderLab(); window.scrollTo({top:0,behavior:'instant'});}
const iconPaths={
 laptop:`<g class="iso-machine">
  <path d="M-44 -40 L35 -40 L45 -32 L45 22 L35 29 L-44 29 Z" fill="#183858" stroke="#8bcaf9" stroke-width="2.6" stroke-linejoin="round"/>
  <rect x="-43" y="-39" width="79" height="65" rx="6" fill="#1b3d60" stroke="#bee8ff" stroke-width="2.8"/>
  <rect x="-36" y="-32" width="65" height="48" rx="3" fill="#0c2541" stroke="#63bce9" stroke-width="1.5"/>
  <path d="M-33 12 V-28 H26" fill="none" stroke="#487ba6" stroke-width="1.5" opacity=".75"/>
  <path d="M-16 -7 l10 -9 10 9 m5 -15 l-7 28" fill="none" stroke="#80d8ff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="-3" cy="21" r="2" fill="#69edc1"/>
  <path d="M-5 29 V45 M8 29 V45" stroke="#9bcee9" stroke-width="5" stroke-linecap="round"/>
  <path d="M-21 46 L24 46 L35 55 L-33 55 Z" fill="#4b83b5" stroke="#bde8ff" stroke-width="2" stroke-linejoin="round"/>
  <path d="M35 -40 L45 -32 L45 22 L35 29" fill="none" stroke="#315b85" stroke-width="2.5"/>
 </g>`,
 router:`<g class="iso-machine"><path d="M-12-10 -15-57" stroke="#aee3ff" stroke-width="4"/><circle cx="-15" cy="-58" r="5" fill="#73deff"/><path d="M17-8 23-45" stroke="#aee3ff" stroke-width="3"/><path d="M-47 7 9-17 52 6 -4 32Z" fill="#a0d2f8" stroke="#effaff" stroke-width="2"/><path d="M-47 7 -47 30 -4 54 -4 32Z" fill="#28547f" stroke="#b4e8ff" stroke-width="2"/><path d="M-4 32 52 6 52 29 -4 54Z" fill="#163859" stroke="#b4e8ff" stroke-width="2"/><g fill="#6becc4"><circle cx="12" cy="34" r="3"/><circle cx="25" cy="28" r="3"/><circle cx="38" cy="22" r="3"/></g><path d="m-17 7 18-8m-8 18 20-9" stroke="#327cac" stroke-width="4"/></g>`,
 server:`<g class="iso-machine"><path d="M-36-40 4-57 40-39 2-22Z" fill="#a7d2fa" stroke="#d3efff" stroke-width="2"/><path d="M-36-40 2-22 2 58 -36 38Z" fill="#3b6799" stroke="#badfff" stroke-width="2"/><path d="M2-22 40-39 40 40 2 58Z" fill="#16375d" stroke="#b6dfff" stroke-width="2"/>${[0,1,2,3].map(i=>`<path d="M-29 ${-29+i*18} -4 ${-17+i*18} -4 ${-9+i*18} -29 ${-21+i*18}Z" fill="#102a4f" stroke="#a7ceef"/><circle cx="-24" cy="${-21+i*18}" r="2.5" fill="#61ebbb"/>`).join('')}</g>`,
 dns:`<g class="iso-machine"><path d="M-34-42 2-57 41-36 4-20Z" fill="#c9d8ff" stroke="#e9edff" stroke-width="2"/><path d="M-34-42 4-20 4 52 -34 32Z" fill="#5366a4" stroke="#9baef9" stroke-width="2"/><path d="M4-20 41-36 41 35 4 52Z" fill="#243b73" stroke="#b5c5ff" stroke-width="2"/>${[0,1,2].map(i=>`<path d="M-26 ${-29+i*22} -3 ${-17+i*22}" stroke="#9ce9ff" stroke-width="4"/><circle cx="23" cy="${-22+i*21}" r="5" stroke="#a9e9ff" stroke-width="2" fill="none"/>`).join('')}</g>`,
 cloud:`<g class="iso-machine"><path d="M-43 26 C-66 13-48-22-28-15 C-26-49 24-55 39-20 C65-24 73 16 51 31 C36 45-24 45-43 26Z" fill="#628bbf" stroke="#d4f0ff" stroke-width="3"/><circle cx="6" cy="7" r="14" stroke="#eaf8ff" stroke-width="2" fill="none"/><path d="M-8 7H20M6-7q-12 14 0 28M6-7q12 14 0 28" stroke="#eaf8ff" stroke-width="1.7" fill="none"/></g>`,
 switch:`<g class="iso-machine"><path d="M-49 1 8-22 54 1 -4 25Z" fill="#a9ceec" stroke="#e2f4ff" stroke-width="2"/><path d="M-49 1 -49 27 -4 52 -4 25Z" fill="#39658d" stroke="#98dfff" stroke-width="2"/><path d="M-4 25 54 1 54 28 -4 52Z" fill="#183e61" stroke="#98dfff" stroke-width="2"/>${[0,1,2,3,4,5].map(i=>`<rect x="${-36+i*12}" y="8" width="7" height="5" rx="1" fill="#62e3ff" transform="skewY(25)"/>`).join('')}</g>`,
 firewall:`<g class="iso-machine"><path d="M-4-57 40-34 35 16 0 57 -39 16 -43-34Z" fill="#305d82" stroke="#83d4fa" stroke-width="3"/><path d="M-4-47 27-29 24 10 0 43 -28 11 -30-29Z" fill="#153353" stroke="#b6e9ff" stroke-width="2"/><path d="M-5-19 8-9 -1 5 11 15 -11 30 -17 12 -9 2 -19-8Z" fill="#ffb96a"/><path d="M-10-30 13-17 3-6 -13-16Z" fill="#ffe4ab"/></g>`,
 mail:`<g class="iso-machine"><path d="M-46-22 3-48 46-24 0 4Z" fill="#9acbee" stroke="#d8f1ff" stroke-width="2"/><path d="M-46-22 0 4 0 40 -46 15Z" fill="#355781" stroke="#b9e5ff" stroke-width="2"/><path d="M0 4 46-24 46 13 0 40Z" fill="#224066" stroke="#a3d5f9" stroke-width="2"/><path d="M-37-12 0 10 37-15M-37-12 0 26 37-15" fill="none" stroke="#e3f7ff" stroke-width="3"/></g>`,
 device:`<g class="iso-machine"><path d="M-41-37 35-37 35 24 -41 24Z" fill="#21476e" stroke="#a0dcff" stroke-width="3"/><rect x="-33" y="-27" width="60" height="42" fill="#5aa4dc"/><path d="M-3 24v20m-28 0h55" stroke="#b0dfff" stroke-width="6"/><circle cx="-4" cy="-7" r="9" stroke="#defaff" fill="none" stroke-width="3"/></g>`,
 broker:`<g class="iso-machine"><circle r="35" fill="#345d91" stroke="#b5e4ff" stroke-width="3"/><circle r="14" fill="#97bffc"/><path d="M0-54V-34 M47-23 29-13 M47 25 29 13 M0 52V34 M-47 25 -29 13 M-47-23 -29-13" stroke="#a4e8ff" stroke-width="5"/><g fill="#69dfff"><circle cy="-54" r="7"/><circle cx="47" cy="-23" r="7"/><circle cx="47" cy="25" r="7"/><circle cy="52" r="7"/><circle cx="-47" cy="25" r="7"/><circle cx="-47" cy="-23" r="7"/></g></g>`,
 clock:`<g class="iso-machine"><circle r="42" fill="#314f7b" stroke="#a9dfff" stroke-width="4"/><circle r="32" fill="#193654" stroke="#6ac4ef" stroke-width="3"/><path d="M0-25V0L18 12" stroke="#d7f7ff" stroke-width="5" fill="none" stroke-linecap="round"/><circle r="5" fill="#e2ffff"/></g>`
};
const configs={
 http:['client','router','cloud','server'],https:['client','router','firewall','server'],dns:['client','router','cloud','dns'],tcp:['client','router','server'],udp:['client','router','cloud','server'],
 dhcp:['client','switch','router','server'],arp:['client','switch','router','device'],icmp:['client','router','cloud','server'],tls:['client','firewall','server'],
 ftp:['client','router','server'],smtp:['client','router','cloud','server'],imap:['client','router','server'],ssh:['client','router','server'],websocket:['client','router','server'],mqtt:['client','router','server','device'],ntp:['client','router','server'],quic:['client','router','cloud','server'],ipv4:['client','router','cloud','server'],bgp:['router','cloud','server'],pop3:['client','router','server'],webtransport:['client','router','cloud','server']
};
function kindFor(id,key){if(key==='client')return'laptop';if(key==='router')return 'router';if(key==='cloud')return'cloud';if(key==='dns')return'dns';if(key==='switch')return'switch';if(key==='firewall')return'firewall';if(key==='device')return'device';if(key==='server')return ({dhcp:'dns',ftp:'server',smtp:'mail',imap:'mail',pop3:'mail',mqtt:'broker',ntp:'clock',ssh:'server',bgp:'router'}[id]||'server');return key;}
const ips={client:'192.168.1.10',router:'192.168.1.1',cloud:'WAN',dns:'8.8.8.8',server:'203.0.113.10',switch:'LAN',firewall:'SECURE',device:'192.168.1.20'};
function getNodes(p){let keys=[...(configs[p.id]||['client','router','server'])];for(const step of p.steps){if(!keys.includes(step.from))keys.push(step.from);if(!keys.includes(step.to))keys.push(step.to)}keys=keys.slice(0,7);const n=keys.length;return keys.map((key,i)=>({key,kind:kindFor(p.id,key),x:110+(720/(n-1||1))*i,y:n>=5?[226,154,250,156,228,170,244][i]:(i%2===0?225:150),label:key==='server'&&['ftp','smtp','imap','pop3','mqtt','ntp','dhcp'].includes(p.id)?({ftp:tr('فایل سێرڤەر','File server'),smtp:tr('سێرڤەری پۆست','Mail server'),imap:tr('سێرڤەری پۆست','Mail server'),pop3:tr('سێرڤەری پۆست','Mail server'),mqtt:tr('بڕۆکەری MQTT','MQTT broker'),ntp:tr('کات سێرڤەر','Time server'),dhcp:tr('سێرڤەری DHCP','DHCP server')}[p.id]):labelFor(key),ip:ips[key]||''}));}
function labelFor(key){const dict={client:['کڕیار','Client'],router:['ڕاوتەر','Router'],cloud:['ئینتەرنێت','Internet'],dns:['DNS سێرڤەر','DNS resolver'],server:['سێرڤەر','Server'],switch:['سوویچ','Switch'],firewall:['فایەروۆڵ','Firewall'],device:['ئامێری تر','Device']};return dict[key]?.[ku()?0:1]||key;}
function linePath(a,b){const m=(a.x+b.x)/2;return`M ${a.x} ${a.y} Q ${m} ${Math.min(a.y,b.y)-55} ${b.x} ${b.y}`;}
function nodeSvg(n,{selected=false,active=false,draggable=false}={}){return `<g class="v4-iso-node ${selected?'selected':''} ${active?'active':''}" ${draggable?`data-lab-node="${esc(n.id)}"`:''} transform="translate(${n.x} ${n.y})"><ellipse cy="58" rx="69" ry="18" fill="#04152b" opacity=".23"/><g transform="translate(0 -8)">${iconPaths[n.kind]||iconPaths.server}</g><rect x="-75" y="77" width="150" height="28" rx="11" class="v4-node-title-bg"/><text x="0" y="96" class="v4-node-title" text-anchor="middle">${esc(n.label||n.name||n.kind)}</text><text x="0" y="119" class="v4-node-ip" text-anchor="middle">${esc(n.ip||'')}</text></g>`;}
function svgBase(){return `<defs><linearGradient id="v4-gridfade" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#3e8bd5" stop-opacity=".13"/><stop offset="1" stop-color="#7551c3" stop-opacity=".03"/></linearGradient><pattern id="v4-graphgrid" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M 38 0 L 0 0 0 38" stroke="#74baff" stroke-opacity=".12" stroke-width="1" fill="none"/></pattern><filter id="v4-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="920" height="500" fill="url(#v4-gridfade)"/><rect width="920" height="500" fill="url(#v4-graphgrid)"/>`;}
// V4 packet animation: two independent lanes for request / reply.
// Each frame reveals just the part of the dashed route that the packet has crossed.
let flowAnimation=null;
let flowFrame=0;
function flowRoute(a,b){
  const dx=b.x-a.x,dy=b.y-a.y,distance=Math.hypot(dx,dy)||1;
  const ux=dx/distance,uy=dy/distance,nx=-uy,ny=ux;
  // The normal reverses when source and destination reverse: outbound and inbound
  // therefore occupy parallel but separate lanes, like the reference video.
  const padding=Math.min(57,distance*.28),side=12;
  const sx=a.x+ux*padding+nx*side,sy=a.y+uy*padding+ny*side;
  const ex=b.x-ux*padding+nx*side,ey=b.y-uy*padding+ny*side;
  const mx=(sx+ex)/2+nx*15,my=(sy+ey)/2+ny*15;
  return `M ${sx.toFixed(2)} ${sy.toFixed(2)} Q ${mx.toFixed(2)} ${my.toFixed(2)} ${ex.toFixed(2)} ${ey.toFixed(2)}`;
}
function signalMessage(p,step){
  const packet=String(step.packet?.en||'DATA').toUpperCase();
  const reply=step.from==='dns'||step.from==='server'||
    (p.id==='dns'&&step.from==='router'&&step.to==='client')||
    /REPLY|RESPONSE|SYN-ACK|\bACK\b/.test(packet);
  if(p.id==='dns'){
    const headline=reply?'DNS REPLY':'DNS QUERY';
    return {headline,detail:reply?'A 203.0.113.10':'A? example.com',color:'#2183f1'};
  }
  const narrow=packet.replace(/\s+/g,' ').slice(0,19);
  const primary=p.id==='tcp'?('TCP '+narrow):p.name+' '+(reply?'REPLY':'REQUEST');
  const color= p.id==='tcp'||p.id==='icmp'?'#18ba8d':p.id==='https'||p.id==='tls'?'#675de4':p.id==='http'?'#e39835':p.accent||'#3288db';
  const secondary=String(api.local(step.title)||step.title?.en||packet).replace(/\s+/g,' ').slice(0,29);
  return {headline:primary.slice(0,27),detail:secondary,color};
}
function drawFlow(progress){
  const scene=$('v4Visual'),active=scene?.querySelector('#v4-active-route');
  const dot=scene?.querySelector('#v4-flow-dot'),halo=scene?.querySelector('#v4-flow-halo');
  const bubble=scene?.querySelector('#v4-message-label');
  const tether=scene?.querySelector('#v4-message-tether');
  if(!active||!dot||!bubble||!flowAnimation)return;
  const total=active.dataset.length?Number(active.dataset.length):0;
  // SVGPathElement is used only for geometry, while the visible progress is drawn
  // as small successive line segments so the whole track never changes color at once.
  const geometry=scene.querySelector('#v4-flow-geometry');
  if(!geometry)return;
  const length=total||geometry.getTotalLength();
  active.dataset.length=String(length);
  const extent=Math.max(0,Math.min(1,progress))*length;
  const segments=Math.max(1,Math.ceil(extent/8));
  let partial='';
  for(let i=0;i<=segments;i++){
    const pt=geometry.getPointAtLength(extent*i/segments);
    partial+=(i===0?'M':' L')+pt.x.toFixed(2)+' '+pt.y.toFixed(2);
  }
  active.setAttribute('d',partial);
  const at=geometry.getPointAtLength(extent);
  dot.setAttribute('cx',at.x);dot.setAttribute('cy',at.y);
  halo.setAttribute('cx',at.x);halo.setAttribute('cy',at.y);
  const labelX=Math.max(112,Math.min(808,at.x));
  const below=at.y<129;
  const labelY=below?Math.min(435,at.y+73):Math.max(63,at.y-72);
  bubble.setAttribute('transform',`translate(${labelX.toFixed(1)} ${labelY.toFixed(1)})`);
  tether.setAttribute('x1',at.x);tether.setAttribute('y1',at.y);
  tether.setAttribute('x2',labelX);tether.setAttribute('y2',below?labelY-23:labelY+24);
}
function runFlow(now){
  const ctx=flowAnimation;if(!ctx)return;
  // A pause from the player's original controls stops this animation too.
  if(ctx.autoplay&&!api.state.playing){ctx.last=null;return;}
  if(ctx.last!==null){ctx.progress=Math.min(1,ctx.progress+(now-ctx.last)/ctx.duration)}
  ctx.last=now;
  drawFlow(ctx.progress);
  if(ctx.progress<1)flowFrame=requestAnimationFrame(runFlow);
}
function renderMainDiagram(){
 const scene=$('v4Visual');if(!scene)return;
 const p=api.proto(),nodes=getNodes(p),by=Object.fromEntries(nodes.map(n=>[n.key,n]));
 const chosen=p.steps[api.state.index];
 const current=api.state.reached>=0?chosen:null;
 const key=current?`${p.id}:${api.state.reached}`:null;
 const same=key!==null&&flowAnimation?.key===key;
 cancelAnimationFrame(flowFrame);
 if(!same){flowAnimation=key?{key,progress:0,duration:Math.max(2600,api.state.speed*.90),autoplay:api.state.playing,last:null}:null}
 else {flowAnimation.last=null;flowAnimation.duration=Math.max(2600,api.state.speed*.90)}
 // Keep the original V4 topology, icons and positioning unchanged.
 const edges=[];
 for(let i=1;i<nodes.length;i++)edges.push([nodes[i-1],nodes[i]]);
 for(const s of p.steps){
  if(by[s.from]&&by[s.to]&&!edges.some(([a,b])=>[a.key,b.key].sort().join(':')===[s.from,s.to].sort().join(':')))
   edges.push([by[s.from],by[s.to]]);
 }
 const backgroundEdges=edges.map(([a,b])=>`<path d="${linePath(a,b)}" fill="none" stroke="#6d9bcf" stroke-width="2.5" stroke-dasharray="6 10" opacity=".24"/>`).join('');
 // Draw one distinct, faintly dashed track for every message direction, including
 // the reverse direction wherever a protocol sends a reply.
 const dirs=new Map();
 for(const s of p.steps)if(by[s.from]&&by[s.to]&&s.from!==s.to){dirs.set(s.from+'>'+s.to,s)}
 const trackSvg=[...dirs.values()].map(s=>{
   const path=flowRoute(by[s.from],by[s.to]);
   return `<path d="${path}" class="v4-direction-track" marker-end="url(#v4-direction-arrow)"/>`;
 }).join('');
 let animated='';
 if(current&&by[current.from]&&by[current.to]){
   const message=signalMessage(p,current);
   const d=flowRoute(by[current.from],by[current.to]);
   animated=`<path id="v4-flow-geometry" d="${d}" fill="none" stroke="none"/>
    <path id="v4-active-route" d="" fill="none" stroke="${message.color}" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="8 8" />
    <line id="v4-message-tether" stroke="${message.color}" stroke-opacity=".7" stroke-width="1.5" stroke-dasharray="3 4" />
    <circle id="v4-flow-halo" r="17" cx="0" cy="0" fill="${message.color}" fill-opacity=".20"/>
    <circle id="v4-flow-dot" r="9" cx="0" cy="0" fill="#42e1aa" stroke="#f5fffd" stroke-width="3" filter="url(#v4-glow)"/>
    <g id="v4-message-label" transform="translate(112 105)" pointer-events="none">
      <rect x="-106" y="-25" width="212" height="54" rx="7" fill="#ffffff" stroke="${message.color}" stroke-width="2" />
      <path d="M -101 -25 H 101 Q 106 -25 106 -20 V -1 H -106 V -20 Q -106 -25 -101 -25" fill="${message.color}"/>
      <text x="0" y="-7" font-family="IBM Plex Mono,monospace" font-size="12.5" font-weight="700" fill="#ffffff" text-anchor="middle">${esc(message.headline)}</text>
      <text x="0" y="19" font-family="IBM Plex Mono,Vazirmatn,sans-serif" font-size="11.5" font-weight="600" fill="#16365a" text-anchor="middle">${esc(message.detail)}</text>
    </g>`;
 }
 scene.innerHTML=svgBase()+`<defs><marker id="v4-direction-arrow" viewBox="0 0 10 10" refX="8.8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#719ac7"/></marker></defs>`+
  `<text x="25" y="38" class="v4-scene-header">${esc(p.name)} • ${esc(tr('نەخشەی تایبەتی پرۆتۆکۆل','Protocol-specific topology'))}</text>`+
  backgroundEdges+trackSvg+nodes.map(n=>nodeSvg(n,{active:!!current&&(current.from===n.key||current.to===n.key)})).join('')+animated+
  `<text x="896" y="484" text-anchor="end" class="v4-watermark">PK / TORRNAMA • LEARNING SIMULATION</text>`;
 if(current&&flowAnimation){drawFlow(flowAnimation.progress);if(flowAnimation.progress<1&&(!flowAnimation.autoplay||api.state.playing))flowFrame=requestAnimationFrame(runFlow)}
}
function mountDiagram(){const scroll=$('networkScroll');const scene=document.createElementNS('http://www.w3.org/2000/svg','svg');scene.setAttribute('id','v4Visual');scene.setAttribute('viewBox','0 0 920 500');scene.setAttribute('aria-label','Protocol-specific isometric network visualization');scene.setAttribute('role','img');scroll.appendChild(scene);renderMainDiagram();}
const INITIAL={nodes:[{id:'client1',kind:'laptop',x:120,y:240,name:'Client',ip:'192.168.1.10'},{id:'router1',kind:'router',x:350,y:175,name:'Router',ip:'192.168.1.1'},{id:'dns1',kind:'dns',x:605,y:115,name:'DNS Resolver',ip:'8.8.8.8'},{id:'firewall1',kind:'firewall',x:595,y:330,name:'Firewall',ip:'10.0.0.1'},{id:'server1',kind:'server',x:810,y:245,name:'Web Server',ip:'203.0.113.10'}],links:[['client1','router1'],['router1','dns1'],['router1','firewall1'],['firewall1','server1']]};
function clone(v){return JSON.parse(JSON.stringify(v));}
function isValidTopology(t){if(!t||!Array.isArray(t.nodes)||!Array.isArray(t.links)||t.nodes.length>24||t.links.length>80)return false;const ids=new Set();for(const n of t.nodes){if(typeof n.id!=='string'||!/^[a-zA-Z0-9_-]{1,30}$/.test(n.id)||ids.has(n.id)||!iconPaths[n.kind]||!Number.isFinite(n.x)||!Number.isFinite(n.y)||n.x<25||n.x>900||n.y<60||n.y>455||typeof n.name!=='string'||n.name.length>32||typeof n.ip!=='string'||n.ip.length>45)return false;ids.add(n.id)}return t.links.every(pair=>Array.isArray(pair)&&pair.length===2&&pair[0]!==pair[1]&&ids.has(pair[0])&&ids.has(pair[1]));}
function storage(key,val){try{if(arguments.length===1)return localStorage.getItem(key);localStorage.setItem(key,val);return true}catch{return false}}
let lab=clone(INITIAL);try{const saved=JSON.parse(storage('torrnama-v4-lab')||'null');if(isValidTopology(saved))lab=saved}catch{}
let activeId=null,connecting=false,linkStart=null,trace=[],traceIdx=-1,labTimer=null,nodeDrag=null;
function selectedNode(){return lab.nodes.find(n=>n.id===activeId)}
function nameOf(n){return n?.name||''}
function stopTrace(){clearTimeout(labTimer);labTimer=null;}
function renderLab(){const svg=$('v4LabSvg');if(!svg)return;const by=Object.fromEntries(lab.nodes.map(n=>[n.id,n]));const lines=lab.links.map(([aa,bb])=>{const a=by[aa],b=by[bb],on=traceIdx>=0&&trace.slice(0,traceIdx+1).some((id,j)=>j>0&&[trace[j-1],id].sort().join(':')===[aa,bb].sort().join(':'));return `<path d="${linePath(a,b)}" stroke="${on?'#45e6bb':'#7c9bc5'}" stroke-width="${on?'5':'3'}" stroke-dasharray="${on?'0':'9 8'}" opacity="${on?'1':'.6'}" fill="none" />`}).join('');const pulse=traceIdx>=0&&traceIdx<trace.length?by[trace[traceIdx]]:null;svg.innerHTML=svgBase()+`<text x="24" y="37" class="v4-scene-header">TORRNAMA / ISOMETRIC PRACTICE LAB</text>`+lines+lab.nodes.map(n=>nodeSvg({...n,label:n.name},{selected:n.id===activeId,active:trace.slice(0,traceIdx+1).includes(n.id),draggable:true})).join('')+(pulse?`<circle cx="${pulse.x}" cy="${pulse.y}" r="72" fill="none" stroke="#53ecb8" stroke-width="4" stroke-dasharray="10 8"><animate attributeName="opacity" values=".9;.15;.9" dur="1.6s" repeatCount="indefinite"/></circle>`:'')+`<text x="896" y="484" text-anchor="end" class="v4-watermark">LOCAL TEST • NOT REAL PACKETS</text>`;
svg.querySelectorAll('[data-lab-node]').forEach(el=>{el.style.cursor=connecting?'crosshair':'grab';el.addEventListener('pointerdown',event=>{if(connecting)return;const id=el.dataset.labNode;activeId=id;const pt=svg.createSVGPoint();pt.x=event.clientX;pt.y=event.clientY;const point=pt.matrixTransform(svg.getScreenCTM().inverse());const n=selectedNode();nodeDrag={id,dx:point.x-n.x,dy:point.y-n.y};svg.setPointerCapture(event.pointerId);setSelectedFields();});el.addEventListener('click',()=>{const id=el.dataset.labNode;if(connecting){if(!linkStart){linkStart=id;activeId=id;labStatus(tr('ئامێری دووەم هەڵبژێرە','Select the second device'))}else if(linkStart!==id){let k=[linkStart,id].sort().join(':');if(!lab.links.some(pair=>pair.slice().sort().join(':')===k))lab.links.push([linkStart,id]);connecting=false;linkStart=null;activeId=id;renderLab();labStatus(tr('پەیوەندی زیاد کرا','Connection added'))}else{connecting=false;linkStart=null;}}else{activeId=id;setSelectedFields()}renderLab()});});
if($('v4LinkBtn'))$('v4LinkBtn').classList.toggle('active',connecting);
if($('v4TestLog'))drawLog();}
function setSelectedFields(){const n=selectedNode();$('v4SelectedName').textContent=n?n.name:tr('ئامێرێک هەڵبژێرە','Select a device');$('v4NodeName').value=n?.name||'';$('v4NodeIP').value=n?.ip||'';}
function labStatus(msg){if($('v4TestLog'))$('v4TestLog').textContent=msg;}
function pathBetween(from,to){const prev=new Map([[from,null]]),queue=[from];for(let i=0;i<queue.length;i++){const current=queue[i];if(current===to)break;for(const link of lab.links){const other=link[0]===current?link[1]:link[1]===current?link[0]:null;if(other&&!prev.has(other)){prev.set(other,current);queue.push(other)}}}if(!prev.has(to))return[];const path=[];for(let cur=to;cur!==null;cur=prev.get(cur))path.unshift(cur);return path;}
function buildTrace(){const origin=lab.nodes.find(n=>n.kind==='laptop')||lab.nodes[0];const test=$('v4Test').value;const target=lab.nodes.find(n=>n.kind===(test==='dns'?'dns':'server'));
if(!origin||!target){trace=[];traceIdx=-1;labStatus(tr('تکایە کڕیار و ئامێری مەبەست زیاد بکە','Add a client and target device first'));return false;}trace=pathBetween(origin.id,target.id);traceIdx=-1;if(!trace.length){labStatus(tr('هیچ ڕێڕەوێکی پەیوەست لە نێوان ئەم دوو ئامێرەدا نییە','No connected route exists between client and target'));return false;}return true;}
function drawLog(){const log=$('v4TestLog');if(!log)return;if(!trace.length){if(!log.textContent)log.textContent=tr('ئامادەی تاقیکردنەوەی تۆڕ','Ready for simulation');return;}log.innerHTML=`<strong>${esc($('v4Test').selectedOptions[0].textContent)} • ${Math.max(0,traceIdx+1)}/${trace.length}</strong>`+trace.map((id,i)=>`<div class="v4-trace-row ${i===traceIdx?'active':''} ${i>traceIdx?'dim':''}">${String(i+1).padStart(2,'0')} · ${esc(lab.nodes.find(n=>n.id===id)?.name||id)} ${i===traceIdx?'◆':''}</div>`).join('')+(traceIdx===trace.length-1?`<p>✓ ${esc(tr('پەیام بە شێوەی سیموڵەیشن گەیشتە مەبەست','Simulated message reached the destination'))}</p>`:'');}
function nextTrace(){if(!trace.length&&!buildTrace())return;traceIdx=Math.min(traceIdx+1,trace.length-1);renderLab();if(traceIdx===trace.length-1)stopTrace();}
function runTrace(){stopTrace();if(!buildTrace())return;nextTrace();labTimer=setInterval(()=>{if(traceIdx>=trace.length-1){stopTrace();return}nextTrace();},1500);}
function download(name,text){const blob=new Blob([text],{type:'application/json;charset=utf-8'});const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2000);}
function wireLab(){const svg=$('v4LabSvg');svg.addEventListener('pointermove',e=>{if(!nodeDrag)return;const point=svg.createSVGPoint();point.x=e.clientX;point.y=e.clientY;const p=point.matrixTransform(svg.getScreenCTM().inverse());const n=selectedNode();if(!n)return;n.x=Math.round(Math.max(75,Math.min(850,p.x-nodeDrag.dx)));n.y=Math.round(Math.max(100,Math.min(390,p.y-nodeDrag.dy)));renderLab();});svg.addEventListener('pointerup',()=>{nodeDrag=null;renderLab();});svg.addEventListener('pointercancel',()=>{nodeDrag=null;});
$('v4LabTools').querySelectorAll('[data-add]').forEach(btn=>btn.onclick=()=>{if(lab.nodes.length>=24)return labStatus(tr('زۆرترین ٢٤ ئامێر ڕێگەپێدراوە','Maximum 24 devices'));const kind=btn.dataset.add,id=kind+Date.now().toString(36);const positions=[[130,130],[320,345],[540,125],[760,340],[270,215],[610,270],[840,130],[430,390]];const best=positions.map(([x,y])=>({x,y,score:Math.min(...lab.nodes.map(n=>Math.hypot(n.x-x,n.y-y)))})).sort((a,b)=>b.score-a.score)[0];lab.nodes.push({id,kind,x:best.x,y:best.y,name:kind[0].toUpperCase()+kind.slice(1),ip:kind==='laptop'?'192.168.1.11':'10.0.0.1'});activeId=id;setSelectedFields();renderLab();});
$('v4LinkBtn').onclick=()=>{connecting=!connecting;linkStart=null;labStatus(connecting?tr('بۆ دروستکردنی هێڵ، دوو ئامێر هەڵبژێرە','Click two devices to connect them'):tr('دۆخی بەستنەوە کۆتایی هات','Connection mode off'));renderLab()};
$('v4DeleteBtn').onclick=()=>{if(!activeId)return;lab.nodes=lab.nodes.filter(n=>n.id!==activeId);lab.links=lab.links.filter(pair=>!pair.includes(activeId));activeId=null;trace=[];traceIdx=-1;setSelectedFields();renderLab()};
$('v4ApplyNode').onclick=()=>{const n=selectedNode();if(!n)return;n.name=$('v4NodeName').value.trim().slice(0,32)||n.kind;n.ip=$('v4NodeIP').value.trim().slice(0,45);setSelectedFields();renderLab()};
$('v4RunTest').onclick=runTrace;$('v4StepTest').onclick=()=>{stopTrace();nextTrace()};$('v4ResetTest').onclick=()=>{stopTrace();trace=[];traceIdx=-1;$('v4TestLog').textContent='';renderLab()};
$('v4SaveLab').onclick=()=>labStatus(storage('torrnama-v4-lab',JSON.stringify(lab))?tr('نەخشە لەم Browser ـە پاشەکەوت کرا','Topology saved locally'):tr('پاشەکەوتکردن سەرکەوتوو نەبوو','Could not save'));$('v4DownloadLab').onclick=()=>download('torrnama-topology.json',JSON.stringify(lab,null,2));$('v4ResetLab').onclick=()=>{lab=clone(INITIAL);activeId=null;trace=[];traceIdx=-1;setSelectedFields();renderLab()};
$('v4ImportLab').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;if(file.size>100000) return labStatus(tr('فایلەکە زۆر گەورەیە','File too large'));try{const t=JSON.parse(await file.text());if(!isValidTopology(t))throw Error('Invalid topology');lab=t;trace=[];traceIdx=-1;activeId=null;setSelectedFields();renderLab();labStatus(tr('نەخشەکە هاوردە کرا','Topology imported'))}catch{labStatus(tr('فایلی JSON دروست نییە','Invalid topology JSON'))}e.target.value=''};
}
const originalDesc=Object.fromEntries(window.PROTOCOLS.map(p=>[p.id,clone(p.desc)]));
let edits={};try{const v=JSON.parse(storage('torrnama-v4-drafts')||'{}');if(v&&typeof v==='object'&&!Array.isArray(v))edits=v}catch{}
function applyEdits(){window.PROTOCOLS.forEach(p=>{const d=edits[p.id];if(d&&typeof d.ckb==='string'&&typeof d.en==='string'&&d.ckb.length<=7000&&d.en.length<=7000)p.desc={ckb:d.ckb,en:d.en}})}
applyEdits();
function loadAdminEditor(){const id=$('v4EditProtocol').value;const p=window.PROTOCOLS.find(p=>p.id===id);if(!p)return;$('v4EditKu').value=p.desc.ckb;$('v4EditEn').value=p.desc.en;}
function adminStatus(s){$('v4AdminStatus').textContent=s;}
function wireAdmin(){$('v4EditProtocol').innerHTML=window.PROTOCOLS.map(p=>`<option value="${esc(p.id)}">${esc(p.name)}</option>`).join('');$('v4EditProtocol').onchange=loadAdminEditor;
$('v4SaveDraft').onclick=()=>{const id=$('v4EditProtocol').value;const ckb=$('v4EditKu').value.trim().slice(0,7000),en=$('v4EditEn').value.trim().slice(0,7000);if(!ckb||!en)return adminStatus(tr('هەردوو زمان پڕ بکە','Please fill in both languages'));edits[id]={ckb,en};storage('torrnama-v4-drafts',JSON.stringify(edits));applyEdits();api.renderProtocol();adminStatus(tr('دەستکارییەکە لەم Browser ـە پاشەکەوت کرا','Saved in this browser only'))};
$('v4ResetDraft').onclick=()=>{const id=$('v4EditProtocol').value;delete edits[id];storage('torrnama-v4-drafts',JSON.stringify(edits));const p=window.PROTOCOLS.find(p=>p.id===id);p.desc=clone(originalDesc[id]);loadAdminEditor();api.renderProtocol();adminStatus(tr('دەقە سەرەکییەکە گەڕایەوە','Original restored'))};
$('v4ExportDrafts').onclick=()=>download('torrnama-local-edits.json',JSON.stringify({format:'torrnama-v4-drafts',edits},null,2));
$('v4ImportDrafts').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;if(file.size>1000000)return adminStatus(tr('فایلەکە زۆر گەورەیە','File too large'));try{const d=JSON.parse(await file.text());if(d.format!=='torrnama-v4-drafts'||typeof d.edits!=='object')throw Error('Invalid format');const next={};for(const [id,row] of Object.entries(d.edits)){if(window.PROTOCOLS.some(p=>p.id===id)&&typeof row?.ckb==='string'&&typeof row?.en==='string'&&row.ckb.length<=7000&&row.en.length<=7000)next[id]={ckb:row.ckb,en:row.en};}edits=next;storage('torrnama-v4-drafts',JSON.stringify(edits));window.PROTOCOLS.forEach(p=>{p.desc=clone(originalDesc[p.id])});applyEdits();loadAdminEditor();api.renderProtocol();adminStatus(tr('دەستکارییەکان هاوردە کران','Drafts imported'))}catch{adminStatus(tr('فایلی دەستکاری دروست نییە','Invalid draft file'))}e.target.value=''};
loadAdminEditor();}
function init(){mountDiagram();wireLab();wireAdmin();setSelectedFields();renderLab();for(const [tab,id] of [['explore','v4TabExplore'],['lab','v4TabLab'],['admin','v4TabAdmin']])$(id).onclick=()=>setTab(tab);
document.addEventListener('torrnama:step',renderMainDiagram);document.addEventListener('torrnama:protocol',renderMainDiagram);document.addEventListener('torrnama:lang',updateI18n);document.addEventListener('torrnama:theme',renderMainDiagram);
updateI18n();if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

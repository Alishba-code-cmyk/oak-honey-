const M=[
["Breakfast","Honey berry pancakes","Buttermilk stack, berries, honey.",11,"🥞","#e8cfa6"],
["Breakfast","Garden toast","Sourdough, feta, avocado, soft egg.",10.5,"🥑","#cfdcb4"],
["Breakfast","Granola bowl","Yoghurt, toasted oats, seasonal fruit.",8.5,"🥣","#eadbbd"],
["Lunch","Market grain bowl","Roasted vegetables, grains, herb dressing.",13.5,"🥗","#cfdcb4"],
["Lunch","Chicken pesto panini","Basil pesto, mozzarella, tomato.",12,"🥪","#e8cfa6"],
["Lunch","Tomato soup","Slow-roasted tomato with warm bread.",9,"🍲","#e2b9a0"],
["Drinks","Maple oat latte","Double espresso, oat milk, maple.",5.5,"☕","#d8c0a4"],
["Drinks","Vanilla cold brew","Slow-steeped, vanilla cream.",5,"🧊","#c9d3b5"],
["Drinks","Matcha latte","Ceremonial matcha, steamed milk.",5.5,"🍵","#c5d6ae"],
["Desserts","Cocoa banana cake","Dark cocoa, caramelised banana.",6,"🍫","#cdb29b"],
["Desserts","Butter croissant","Baked every morning at six.",4,"🥐","#ecd3a3"],
["Desserts","Lemon tart","Crisp pastry, tangy curd.",5.5,"🍋","#efe0a8"]];
const ph=(x,s)=>`<div class="ph" style="--c:${x[5]}" role="img" aria-label="Placeholder photo of ${x[1]}">${x[4]}</div>`;
const card=x=>`<article class="card">${ph(x)}<div class="in"><div class="tag">${x[0]}</div><div class="row"><h3>${x[1]}</h3><span class="price">$${x[3].toFixed(2)}</span></div><p>${x[2]}</p></div></article>`;
document.getElementById('pop').innerHTML=[0,1,3,6,7,9].map(i=>card(M[i])).join('');
const cats=["All",...new Set(M.map(x=>x[0]))],tabs=document.getElementById('tabs'),items=document.getElementById('items');
function show(c){items.innerHTML=M.filter(x=>c=="All"||x[0]==c).map(card).join('');
[...tabs.children].forEach(b=>b.setAttribute('aria-pressed',b.textContent==c))}
cats.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.onclick=()=>show(c);tabs.appendChild(b)});show("All");
const pages=["home","about","menu-page","contact"],ul=document.getElementById('menu'),tog=document.getElementById('tog');
function route(){const h=location.hash.slice(1);const p=pages.includes(h)?h:"home";
pages.forEach(id=>document.getElementById(id).classList.toggle('on',id==p));
ul.querySelectorAll('a').forEach(a=>a.getAttribute('href')=="#"+p?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
ul.classList.remove('open');tog.setAttribute('aria-expanded','false');window.scrollTo(0,0)}
addEventListener('hashchange',route);route();
tog.onclick=()=>{const o=ul.classList.toggle('open');tog.setAttribute('aria-expanded',o)};
document.getElementById('f').addEventListener('submit',ev=>{ev.preventDefault();
const n=document.getElementById('n'),e=document.getElementById('e'),m=document.getElementById('m');
const bad={en:!n.value.trim()?"Enter your name.":"",ee:!/^\S+@\S+\.\S+$/.test(e.value)?"Enter a valid email address.":"",em:m.value.trim().length<10?"Write at least 10 characters.":""};
for(const k in bad)document.getElementById(k).textContent=bad[k];
const ok=document.getElementById('ok');
if(Object.values(bad).some(Boolean)){ok.style.display='none';return}
ok.style.display='block';ok.textContent="Thanks, "+n.value.trim()+". We’ve got your message and will reply to "+e.value.trim()+" within one working day.";
ev.target.reset()});

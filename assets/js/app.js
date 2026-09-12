
const products=window.ILMORETTO_PRODUCTS||[];let cart=JSON.parse(localStorage.getItem('ilmCart')||'[]');
const grid=document.getElementById('productGrid');
function render(list=products){grid.innerHTML=list.map(p=>`<article class="product"><button class="wish" aria-label="wishlist">♡</button><img src="${p.img}" alt="${p.name}"><div class="product-body"><div class="product-name">${p.name}</div><div class="product-price">$${p.price.toFixed(2)}</div><div class="dots">${p.colors.map(c=>`<span class="dot" style="background:${c}"></span>`).join('')}</div><button class="add" data-id="${p.id}">Add to bag</button></div></article>`).join('');document.querySelectorAll('.add').forEach(b=>b.onclick=()=>add(b.dataset.id));}
function add(id){const p=products.find(x=>x.id===id);const f=cart.find(x=>x.id===id);if(f)f.qty++;else cart.push({...p,qty:1});save();openCart();}
function remove(id){cart=cart.filter(x=>x.id!==id);save();}
function save(){localStorage.setItem('ilmCart',JSON.stringify(cart));renderCart();}
function renderCart(){document.getElementById('cartCount').textContent=cart.reduce((a,b)=>a+b.qty,0);const holder=document.getElementById('cartItems');holder.innerHTML=cart.length?cart.map(x=>`<div class="cart-item"><img src="${x.img}"><div><b>${x.name}</b><div style="font-size:12px;color:#666;margin-top:5px">Qty ${x.qty} · $${x.price.toFixed(2)}</div></div><button onclick="remove('${x.id}')" class="iconbtn">×</button></div>`).join(''):'<p>Your bag is empty.</p>';document.getElementById('cartTotal').textContent='$'+cart.reduce((a,b)=>a+b.price*b.qty,0).toFixed(2);}
function openCart(){document.getElementById('cartPanel').classList.add('open');document.getElementById('overlay').classList.add('show');}
function closeCart(){document.getElementById('cartPanel').classList.remove('open');document.getElementById('overlay').classList.remove('show');}
document.getElementById('cartBtn').onclick=openCart;document.getElementById('overlay').onclick=closeCart;document.getElementById('closeCart').onclick=closeCart;
document.getElementById('search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();render(products.filter(p=>(p.name+' '+p.category).toLowerCase().includes(q)));});
document.querySelector('.subscribe')?.addEventListener('submit',e=>{e.preventDefault();alert('Thank you for joining ILMORETTO-IT.');e.target.reset();});render();renderCart();

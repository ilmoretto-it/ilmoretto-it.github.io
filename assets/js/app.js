
const PRODUCTS = [{"id": "ILM-001", "name": "Essential Heavyweight Tee", "audience": "Men", "category": "T-Shirts", "price": 48, "color": "Bone", "fit": "Relaxed", "tag": "core", "image": "assets/images/products/01.svg"}, {"id": "ILM-002", "name": "Contour Ribbed Top", "audience": "Women", "category": "Tops", "price": 42, "color": "Black", "fit": "Slim", "tag": "new", "image": "assets/images/products/02.svg"}, {"id": "ILM-003", "name": "Studio Oversized Hoodie", "audience": "Unisex", "category": "Hoodies", "price": 92, "color": "Stone", "fit": "Oversized", "tag": "best", "image": "assets/images/products/03.svg"}, {"id": "ILM-004", "name": "Raw Indigo Straight Jeans", "audience": "Men", "category": "Denim", "price": 108, "color": "Indigo", "fit": "Straight", "tag": "core", "image": "assets/images/products/04.svg"}, {"id": "ILM-005", "name": "Sculpted Midi Dress", "audience": "Women", "category": "Dresses", "price": 118, "color": "Espresso", "fit": "Regular", "tag": "new", "image": "assets/images/products/05.svg"}, {"id": "ILM-006", "name": "Utility Cargo Trouser", "audience": "Unisex", "category": "Pants", "price": 96, "color": "Olive", "fit": "Relaxed", "tag": "street", "image": "assets/images/products/06.svg"}, {"id": "ILM-007", "name": "Soft Tailored Blazer", "audience": "Women", "category": "Jackets", "price": 164, "color": "Sand", "fit": "Tailored", "tag": "form", "image": "assets/images/products/07.svg"}, {"id": "ILM-008", "name": "Boxy Wool Jacket", "audience": "Men", "category": "Jackets", "price": 178, "color": "Charcoal", "fit": "Boxy", "tag": "form", "image": "assets/images/products/08.svg"}, {"id": "ILM-009", "name": "Archive Graphic Tee 01", "audience": "Unisex", "category": "T-Shirts", "price": 58, "color": "Washed Black", "fit": "Oversized", "tag": "archive", "image": "assets/images/products/09.svg"}, {"id": "ILM-010", "name": "Pleated Wide-Leg Trouser", "audience": "Women", "category": "Pants", "price": 104, "color": "Cream", "fit": "Wide", "tag": "form", "image": "assets/images/products/10.svg"}, {"id": "ILM-011", "name": "Merino Mock Neck", "audience": "Men", "category": "Knitwear", "price": 126, "color": "Coal", "fit": "Regular", "tag": "core", "image": "assets/images/products/11.svg"}, {"id": "ILM-012", "name": "Rib Knit Cardigan", "audience": "Women", "category": "Knitwear", "price": 112, "color": "Oat", "fit": "Regular", "tag": "new", "image": "assets/images/products/12.svg"}, {"id": "ILM-013", "name": "Structured Mini Skirt", "audience": "Women", "category": "Skirts", "price": 76, "color": "Black", "fit": "Regular", "tag": "form", "image": "assets/images/products/13.svg"}, {"id": "ILM-014", "name": "Canvas Field Overshirt", "audience": "Men", "category": "Shirts", "price": 98, "color": "Taupe", "fit": "Relaxed", "tag": "street", "image": "assets/images/products/14.svg"}, {"id": "ILM-015", "name": "Minimal Leather Belt", "audience": "Unisex", "category": "Accessories", "price": 54, "color": "Black", "fit": "One Size", "tag": "core", "image": "assets/images/products/15.svg"}, {"id": "ILM-016", "name": "Sculpt Tote 02", "audience": "Unisex", "category": "Bags", "price": 132, "color": "Clay", "fit": "One Size", "tag": "best", "image": "assets/images/products/16.svg"}, {"id": "ILM-017", "name": "Mono Runner", "audience": "Unisex", "category": "Footwear", "price": 148, "color": "Bone", "fit": "True to size", "tag": "new", "image": "assets/images/products/17.svg"}, {"id": "ILM-018", "name": "Low Profile Cap", "audience": "Unisex", "category": "Accessories", "price": 38, "color": "Charcoal", "fit": "Adjustable", "tag": "core", "image": "assets/images/products/18.svg"}, {"id": "ILM-019", "name": "Silk Blend Shirt", "audience": "Women", "category": "Shirts", "price": 122, "color": "Ivory", "fit": "Relaxed", "tag": "form", "image": "assets/images/products/19.svg"}, {"id": "ILM-020", "name": "Washed Carpenter Denim", "audience": "Men", "category": "Denim", "price": 116, "color": "Vintage Blue", "fit": "Loose", "tag": "street", "image": "assets/images/products/20.svg"}, {"id": "ILM-021", "name": "Second Skin Long Sleeve", "audience": "Women", "category": "Tops", "price": 52, "color": "Cocoa", "fit": "Slim", "tag": "core", "image": "assets/images/products/21.svg"}, {"id": "ILM-022", "name": "Loopback Zip Hoodie", "audience": "Unisex", "category": "Hoodies", "price": 104, "color": "Ash", "fit": "Relaxed", "tag": "best", "image": "assets/images/products/22.svg"}, {"id": "ILM-023", "name": "Longline Trench", "audience": "Women", "category": "Outerwear", "price": 214, "color": "Khaki", "fit": "Regular", "tag": "form", "image": "assets/images/products/23.svg"}, {"id": "ILM-024", "name": "Technical Shell Jacket", "audience": "Men", "category": "Outerwear", "price": 228, "color": "Black", "fit": "Relaxed", "tag": "street", "image": "assets/images/products/24.svg"}];
let cart = JSON.parse(localStorage.getItem('ilmorettoCart') || '[]');
const money = n => '$' + Number(n).toFixed(2);

function productCard(p) {
  return `<article class="product">
    <img src="${p.image}" alt="${p.name}">
    <div class="pbody">
      <div class="small">${p.audience} · ${p.category}</div>
      <div class="meta"><h3>${p.name}</h3><span class="price">${money(p.price)}</span></div>
      <div class="small">${p.color} · ${p.fit} fit</div>
      <button class="btn" onclick="addToCart('${p.id}')">Add to bag</button>
    </div>
  </article>`;
}
function renderProducts(filter='All') {
  const grid = document.querySelector('#productGrid');
  if (!grid) return;
  const items = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.audience === filter || p.category === filter || p.tag === filter.toLowerCase());
  grid.innerHTML = items.map(productCard).join('');
}
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const found = cart.find(x => x.id === id);
  if (found) found.qty++;
  else cart.push({...p, qty: 1});
  saveCart();
  openCart();
}
function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
}
function saveCart() {
  localStorage.setItem('ilmorettoCart', JSON.stringify(cart));
  renderCart();
}
function renderCart() {
  document.querySelectorAll('.cartcount').forEach(el => el.textContent = cart.reduce((a,b) => a + b.qty, 0));
  const holder = document.querySelector('#cartItems');
  if (!holder) return;
  holder.innerHTML = cart.length
    ? cart.map(x => `<div class="cart-row"><img src="${x.image}" alt=""><div><strong>${x.name}</strong><div class="small">Qty ${x.qty} · ${money(x.price)}</div></div><button class="iconbtn" onclick="removeItem('${x.id}')">×</button></div>`).join('')
    : '<p class="small">Your bag is currently empty.</p>';
  const total = cart.reduce((a,b) => a + b.price*b.qty, 0);
  const t = document.querySelector('#cartTotal');
  if (t) t.textContent = money(total);
}
function openCart() {
  document.querySelector('#cartDrawer')?.classList.add('open');
  document.querySelector('#overlay')?.classList.add('show');
}
function closeCart() {
  document.querySelector('#cartDrawer')?.classList.remove('open');
  document.querySelector('#overlay')?.classList.remove('show');
}
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  }));
  document.querySelectorAll('[data-cart]').forEach(b => b.addEventListener('click', openCart));
  document.querySelector('#overlay')?.addEventListener('click', closeCart);
  document.querySelectorAll('.js-year').forEach(x => x.textContent = new Date().getFullYear());
  document.querySelectorAll('.newsletter form').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for joining ILMORETTO-IT.');
    f.reset();
  }));
});

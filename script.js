// --- DATOS ---
const users = JSON.parse(localStorage.getItem("users")) || [{ username: "admin", password: "1234" }];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let cartTotal = 0;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Productos con placeholders temporales
const products = [
  { 
    id: 1, 
    name: "Audífonos Inalámbricos", 
    price: 1000, 
    image: "https://github.com/Nepmart/Neptune-Market/blob/main/Audifono%20Bluetooth.jpg?raw=true",  
    images: [
      "https://via.placeholder.com/500/1a237e/ffffff?text=Audifonos+1",
      "https://via.placeholder.com/500/283593/ffffff?text=Audifonos+2",
      "https://via.placeholder.com/500/5c6bc0/ffffff?text=Audifonos+3"
    ],
    category: "electronica",
    description: "Audífonos Bluetooth con cancelación de ruido y 20 horas de batería.",
    features: [
      "Tecnología Bluetooth 5.0",
      "Cancelación activa de ruido",
      "Batería de 20 horas"
    ],
    reviews: [],
    rating: 4.5
  },
  { 
    id: 2, 
    name: "Cargador Solar", 
    price: 1500, 
    image: "https://github.com/Nepmart/Neptune-Market/blob/main/Cargado%20Solar.jpg?raw=true", 
    images: [
      "https://via.placeholder.com/500/2e7d32/ffffff?text=Cargador+1",
      "https://via.placeholder.com/500/388e3c/ffffff?text=Cargador+2",
      "https://via.placeholder.com/500/66bb6a/ffffff?text=Cargador+3"
    ],
    category: "electronica",
    description: "Cargador solar portátil de alta eficiencia con batería integrada.",
    features: [
      "Panel solar de alta eficiencia",
      "Batería de 20,000 mAh",
      "Dual USB para carga rápida"
    ],
    reviews: [],
    rating: 5
  },
  { 
    id: 3, 
    name: "Regleta Cuadrada\"", 
    price: 3500, 
    image: "https://raw.githubusercontent.com/Nepmart/Neptune-Market/refs/heads/main/51G92c4tj0L._AC_SL1500_.jpg",
    images: [
      "https://github.com/Nepmart/Neptune-Market/blob/b9c6abac296be83ff20140c5bfa0cfa17b6a54f6/51G92c4tj0L._AC_SL1500_.jpg",
      "https://via.placeholder.com/500/1976d2/ffffff?text=Monitor+2",
      "https://via.placeholder.com/500/64b5f6/ffffff?text=Monitor+3"
      
    ],
    category: "electronica",
    description: "Monitor profesional Dell 27\" QHD con colores precisos.",
    features: [
      "Resolución QHD 2560x1440",
      "Tasa de refresco 144Hz",
      "Tiempo de respuesta 1ms"
    ],
    reviews: [],
    rating: 4.8
  },
  { 
    id: 4, 
    name: "Reloj Smartwatch", 
    price: 2200, 
    image: "https://github.com/Nepmart/Neptune-Market/blob/main/SmartWatch.jpg?raw=true", 
    images: [
      "https://via.placeholder.com/500/d32f2f/ffffff?text=Smartwatch+1",
      "https://via.placeholder.com/500/f44336/ffffff?text=Smartwatch+2",
      "https://via.placeholder.com/500/ef9a9a/ffffff?text=Smartwatch+3"

    ],
    category: "electronica",
    description: "Smartwatch con monitor de ritmo cardíaco y seguimiento de actividad física.",
    features: [
      "Pantalla AMOLED táctil",
      "Resistente al agua 5ATM",
      "Monitoreo de sueño"
    ],
    reviews: [],
    rating: 4.2
  }
];

const coupons = { "NEP10": 0.10, "VERANO20": 0.20 };

// --- FUNCIONES DE AUTENTICACIÓN ---
function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const found = users.find(user => user.username === u && user.password === p);

  if (found) {
    currentUser = found;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert(`Bienvenido ${currentUser.username}!`);
    document.getElementById("userSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("user-welcome").textContent = `¡Hola, ${currentUser.username}!`;
    document.getElementById("search").value = "";
    renderProducts();
  } else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
  }
}

function showRegister() {
  document.getElementById("registerSection").style.display = "block";
}

function register() {
  const u = document.getElementById("newUsername").value;
  const p = document.getElementById("newPassword").value;
  
  if (!u || !p) {
    alert("Por favor completa todos los campos.");
    return;
  }
  
  if (users.find(user => user.username === u)) {
    alert("Este nombre de usuario ya existe.");
    return;
  }
  
  users.push({ username: u, password: p });
  localStorage.setItem("users", JSON.stringify(users));
  alert("¡Usuario registrado con éxito! Ahora puedes iniciar sesión.");
  document.getElementById("registerSection").style.display = "none";
}

// --- FUNCIONES DE PRODUCTOS ---
function renderProducts(prodList = products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  
  if (!container) {
    console.error("Contenedor de productos no encontrado!");
    return;
  }
  
  if (prodList.length === 0) {
    container.innerHTML = '<p class="no-products">No se encontraron productos.</p>';
    return;
  }
  
  prodList.forEach(p => {
    const isFavorite = favorites.includes(p.id);
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${p.id}, this)">
        <i class="fas fa-heart"></i>
      </button>
      <img src="${p.image}" alt="${p.name}" onclick="showProductDetail(${p.id})">
      <div class="product-info">
        <h3 onclick="showProductDetail(${p.id})">${p.name}</h3>
        <div class="product-meta">
          <span class="rating">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</span>
          <span>RD$ ${p.price.toFixed(2)}</span>
        </div>
        <button onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Agregar</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function toggleFavorite(productId, element) {
  const index = favorites.indexOf(productId);
  if (index === -1) {
    favorites.push(productId);
    element.classList.add('active');
    element.innerHTML = '<i class="fas fa-heart"></i>';
    element.classList.add('pulse');
    setTimeout(() => element.classList.remove('pulse'), 1500);
  } else {
    favorites.splice(index, 1);
    element.classList.remove('active');
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function searchProducts() {
  const q = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(q));
  renderProducts(filtered);
}

function advancedSearch() {
  const q = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("searchCategory").value;
  const maxPrice = parseFloat(document.getElementById("searchPrice").value) || Infinity;
  
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(q) &&
    (category === 'all' || p.category === category) &&
    p.price <= maxPrice
  );
  
  renderProducts(filtered);
}

function filterByCategory(category) {
  if (category === 'all') {
    renderProducts();
    return;
  }
  const filtered = products.filter(p => p.category === category);
  renderProducts(filtered);
}

function showProductDetail(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById("productDetailModal");
  const content = document.getElementById("productDetailContent");
  
  // Obtener productos relacionados
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  content.innerHTML = `
    <div class="product-detail">
      <div class="product-gallery">
        <img src="${product.image}" alt="${product.name}" class="product-main-image" id="mainProductImage">
        <div class="product-thumbnails">
          ${product.images.map((img, index) => `
            <img src="${img}" alt="Miniatura ${index + 1}" class="product-thumbnail ${index === 0 ? 'active' : ''}" 
                 onclick="changeProductImage('${img}', this)">
          `).join('')}
        </div>
      </div>
      <div class="product-info">
        <h1 class="product-title">${product.name}</h1>
        <div class="product-meta">
          <span class="rating">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))} ${product.rating}</span>
          <span>${product.reviews.length} reseñas</span>
        </div>
        <div class="product-price">RD$ ${product.price.toFixed(2)}</div>
        
        <div class="product-actions">
          <button onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Agregar al Carrito</button>
          <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" 
                  onclick="toggleFavorite(${product.id}, this)">
            <i class="fas fa-heart"></i> Favorito
          </button>
        </div>
        
        <div class="product-description">
          <h3>Descripción</h3>
          <p>${product.description}</p>
        </div>
        
        <div class="product-features">
          <h3>Características</h3>
          <ul>
            ${product.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    
    ${relatedProducts.length > 0 ? `
      <div class="related-products">
        <h2>Productos relacionados</h2>
        <div class="related-products-grid">
          ${relatedProducts.map(p => `
            <div class="product" style="cursor: pointer;" onclick="showProductDetail(${p.id})">
              <img src="${p.image}" alt="${p.name}" style="height: 120px;">
              <div class="product-info">
                <h4>${p.name}</h4>
                <p>RD$ ${p.price.toFixed(2)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
  
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeProductDetail() {
  document.getElementById("productDetailModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function changeProductImage(src, element) {
  document.getElementById("mainProductImage").src = src;
  document.querySelectorAll('.product-thumbnail').forEach(img => {
    img.classList.remove('active');
  });
  element.classList.add('active');
}

// --- FUNCIONES DEL CARRITO ---
function addToCart(id) {
  const productToAdd = products.find(p => p.id === id);
  if (!productToAdd) return;
  
  const itemInCart = cart.find(item => item.id === id);

  if (itemInCart) {
    itemInCart.qty += 1;
  } else {
    cart.push({ ...productToAdd, qty: 1 });
  }
  
  updateCart();
  
  // Animación de confirmación
  const button = event.target;
  button.innerHTML = '<i class="fas fa-check"></i> Agregado';
  button.style.backgroundColor = '#4caf50';
  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar';
    button.style.backgroundColor = '#ff5722';
  }, 1500);
}

function updateCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  let total = 0;
  
  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>RD$ ${(item.price * item.qty).toFixed(2)}</span>
      <button onclick="removeFromCart(${item.id})" style="padding: 0.2rem 0.5rem; font-size: 0.8rem;">
        <i class="fas fa-trash"></i>
      </button>
    `;
    list.appendChild(li);
  });
  
  cartTotal = total;
  document.getElementById("total").textContent = total.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function applyCoupon() {
  const code = document.getElementById("coupon").value.trim();
  if (coupons[code]) {
    const discount = coupons[code];
    const discountedTotal = cartTotal * (1 - discount);
    document.getElementById("total").textContent = discountedTotal.toFixed(2);
    alert(`Cupón aplicado: ${discount*100}% de descuento!`);
  } else {
    alert("Cupón inválido o expirado.");
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  
  if (!currentUser) {
    alert("Por favor inicia sesión para continuar con la compra.");
    return;
  }
  
  document.getElementById("paymentModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function goToPayment(url) {
  // Guardar carrito y redirigir
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartTotal", cartTotal.toString());
  window.location.href = url;
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM cargado - Inicializando aplicación");
  
  renderProducts();
  
  if (currentUser) {
    document.getElementById("userSection").style.display = "none";
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("user-welcome").textContent = `¡Hola, ${currentUser.username}!`;
  }
  
  updateCart();
  
  // Ocultar modal de pago al inicio
  document.getElementById("paymentModal").style.display = "none";
});
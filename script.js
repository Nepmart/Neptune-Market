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
    name: "Scanner Automotriz", 
    price: 1400, 
    image: "./images/ecanner0.png",  
    images: [
      "./images/ecanner0.png",
      "./images/escanner1.png",
      "./images/escanner2.png",
      "./images/escanner3.png",
    ],
    category: "Herramientas",
    description: "Escáner OBD2 V410 es una herramienta de escaneo de diagnóstico",
    features: [
      "El escáner OBD2 V410 es una herramienta de escaneo de diagnóstico diseñada para vehículos de pasajeros fabricados después de 1996 en los Estados Unidos.", 
      "Esta herramienta es compatible con nueve protocolos estándar OBDII/EOBD y ofrece funciones como prueba EVAP, prueba de voltaje, consulta de código de falla y más.", 
      "Viene con una guía del usuario, cable adaptador, cable USB y cuenta con una pantalla LCD para facilitar la lectura.",
      "Con soporte para varios idiomas y compatibilidad con varias interfaces OBD,", 
      "este escáner es una herramienta conveniente y versátil para solucionar problemas de fallas del motor en tu vehículo",
    ],
    reviews: [],
    rating: 4.5
  },
  { 
    id: 2, 
    name: "Cargador Celular para Vehiculo 250Watts", 
    price: 650,
    image: "./images/cargador1.png", 
    images: [
      "./images/cargador2.png",
      "./images/cargador3.png",
      "./images/cargador4.png"
    ],
    category: "Accesorios de Autos",
    description: "Cargador de Coche 2-6 Puertos, Carga Rapida (Iphone, Samsung,Xiaomi",
    features: [
      "Nombre del producto: Pantalla digital 4USB + 2PD",
      "Parámetros de entrada: 12-24V",
      "Parámetro de salida: Verde Súper Puerto: 5V/3A 9V/2.2A12V/1.6A (pantalla carga súper rápida)",
      "3 puertos USB: 5V/3,1A",
      "PD: 5V/3,1A",
      "Tamaño del producto: 65 mm * 40 mm * 40 mm",
      "Color del producto: negro",
      "Peso del producto: 27 g (peso desnudo)",
      "Material del producto: material ignífugo ABS + anillo de aleación de aluminio",
    ],
    reviews: [],
    rating: 5
  },
  { 
    id: 3, 
    name: "Regleta Cuadrada\"", 
    price: 1200, 
    image: "./images/regletaCuadrada1.jpg",
    images: [
      "./images/regletaCuadrada1.jpg",
      "./images/regletaCuadrada2.jpg",
      "./images/regletaCuadrada3.jpg",
      "./images/regletaCuadrada4.jpg",
      "./images/regletaCuadrada5.jpg",
      "./images/regletaCuadrada6.jpg",
    ],
    category: "electronica",
    description: "Regleta protectora de sobretensiones – Cable de extensión de enchufe plano de 6 pies con 8 tomas amplias y 4 puertos USB (1 USB C), extensor de salida de 3 lados para oficina en casa, blanco",
    features: [
      "Incombustible, Montable, Protección contra Sobretensiones, Protección contra sobrecarga, Protección contra sobretensiones, Ranura USB, Ranura Usb"
    ],
    reviews: [],
    rating: 4.8
  },
  { 
    id: 4, 
    name: "LAXASFIT Reloj Inteligente", 
    price: 1350, 
    image: "./images/relojLaxafit1.png", 
    images: [
      "./images/relojLaxafit1.png",
      "./images/relojLaxafit2.png",
      "./images/relojLaxafit3.png",
      "./images/relojLaxafit4.png",
      "./images/relojLaxafit5.png",
      "./images/relojLaxafit6.png",
      "./images/relojLaxafit7.png"
    ],
    category: "electronica",
    description: "LAXASFIT nuevo reloj inteligente para hombrese monitoreo ritmo cardíaco y seguimiento de actividad física.",
    features: [
      "Parámetro",
      "Pantalla: HD de 1,71 pulgadas",
      "Toque TP: toque de pantalla completa",
      "Tiempo de trabajo: 3 días",
      "Tiempo en espera: alrededor de 7 días",
      "Bluetooth: BLE5.2",
      "Soporte del sistema: Android 5.0 o superior, IOS 9.0 o superior.",
      "Funciones",
      "Conexión con una sola tecla, múltiples modos de ejercicio, detección de sueño, podómetro", 
      "frecuencia cardíaca, presión arterial, oxígeno en sangre, notificación de mensajes, marcación de",
      "llamadas bluetooth, música bluetooth, clima, calculadora, despertador, recordatorio de sedentarismo", 
      "cronómetro, toma de fotografías, asistente de voz, buscar teléfono celular, juego de carreras, linterna", 
      "calendario, contactos, recordatorio de intervalo de bebida, reinicio, apagado, configuración de idioma, configuración de estilo, código QR de la aplicación, puntero de pantalla de descanso",

      "Ver idiomas",
      "Inglés, chino, italiano, portugués, polaco, español, francés, griego, húngaro, checo, ruso, turco, holandés, alemán, vietnamita, indonesio, malayo, filipino, hebreo, sueco, finlandés, ucraniano, tailandés, farsi, árabe."
    ],
    
    
    reviews: [],
    rating: 4.2
  },

{ 
    id: 5, 
    name: "Memoria MicroSD 512MB", 
    price: 1200, 
    image: "./images/memoriaMicroSD1.png",
    images: [
      "./images/memoria128mb.png",
      "./images/memoria256mb.png",
      "./images/memoria512mb.png",
      "./images/memoriaMicroSD1.png",
      "./images/memoriaMicroSD2.png",
      "./images/memoriaMicroSD3.png",
      "./images/memoriaMicroSD4.png",
                ],
    category: "electronica",
    description: "Tarjeta de memoria TF de pequeña capacidad para CCTV o cámara Clase 10, tarjeta de memoria de alta velocidad, 64M, 128M, 256M, 512M",
features: [
      "• Origen : China continental",
      "• Marca other : La tarjeta está de la marca 'other', lo que significa que ofrece una excelente relación calidad-precio.",
      "• Tipo TF / Micro SD Card : Es un tipo TF / Micro SD Card, lo que permite una gran capacidad de almacenamiento y una alta velocidad de acceso.",
      "• Aplicación : Tachógrafo",
      "• Capacidad de alta velocidad : Con capacidades que van desde 64M hasta 512M, esta tarjeta ofrece una alta velocidad de memoria para soportar todas sus necesidades de grabación de video.",
      "• Clase 10 : Es una tarjeta de clase 10, lo que garantiza su compatibilidad con los dispositivos más modernos y eficientes.",
      "Notas de capacidad: 128M = aprox. 110M-115M, 256M = aprox. 220M-230M, 512M = aproximadamente 460M-480M. Esta es la diferencia en el cálculo entre el fabricante y su PC, por favor Google 'capacidad de almacenamiento del producto' para obtener más información.",
      "PC define 1GB = 1,073,741,824 bytes, mientras que el mercado define 1GB = 1,000,000,000 bytes. 100% de Capacidad real, a través de H2testw.",
      "Por favor, no utilice los lectores de tarjetas baratas para probar la velocidad, se reducirá debido a los lectores de tarjetas de baja calidad.",
      "Descripción del producto:",
      "Nombre: Tarjeta de memoria",
      "Capacidad: 128M, 256M, 512M",
      "Equipo aplicable: computadoras de escritorio, teléfonos celulares, computadoras portátiles y más dispositivos",
      "Temperatura de funcionamiento: -13°F a 185°F (-25°C a 85°C)",
      "Temperatura de almacenamiento: -40°F a 185°F (-40°C a 85°C)",
      "Tamaño: 49*18*10mm, peso: 14.2g",
      "El paquete incluye: 1X TARJETA DE Memoria"
    ],
    reviews: [],
    rating: 4.8
  },

{ 
    id: 6, 
    name: "KESHUYOU 2025 Reloj Inteligente", 
    price: 1450, 
    image: "./images/relojSmartWatch60.png",
    images: [
      "./images/relojSmartWatch60.png",
      "./images/relojSmartWatch61.png",
      "./images/relojSmartWatch62.png",
      "./images/relojSmartWatch63.png",
      "./images/relojSmartWatch64.png",
      "./images/relojSmartWatch65.png",
      "./images/relojSmartWatch66.png",
          ],
    category: "electronica",
description: `Descripción del producto
Marca: KESHUYOU
Modelo: 2025
Color: negro, plata
Software de aplicación: LAXASFIT
Embalaje: correa de silicona + cargador + manual
Chip: 5609
Capacidad de la batería: 150 mAh
Tamaño de la pantalla: pantalla LCD HD de pantalla completamente táctil de 1,32 pulgadas
Resolución: 128*128
Frecuencia cardíaca: soporte
Llamadas Bluetooth: soporte
Reproducción de música Bluetooth: soporte
Método de carga: carga magnética
Bluetooth: BLE5.0
Caja: Aleación de zinc
Idioma de la aplicación
Inglés, italiano, portugués, polaco, español, francés, griego, húngaro, checo, ruso, turco, holandés, alemán, vietnamita, indonesio, malayo, filipino, sueco, finlandés, ucraniano, tailandés, persa, árabe
Registro de ejercicio: pasos, frecuencia cardíaca, distancia, calorías, duración del ejercicio
Monitoreo dla salud: frecuencia cardíaca, presión arterial, nivel de oxígeno en sangre, monitoreo del sueño
Registro de ejercicio: pasos, frecuencia cardíaca, distancia del ejercicio, calorías, duración del ejercicio
Monitoreo de la salud: presión arterial, nivel de oxígeno en sangre, monitoreo del sueño
Alertas inteligentes: WeChat, QQ, Skype, WHATSAPP, Facebook, Twitter, Line, Kakaotalk, Instagram, etc.
Otras funciones: dial personalizado, modo de movimiento múltiple, pantalla de elevación manual (levantar rostros, activar el dial automáticamente), ajuste de brillo, visualización del tiempo, cronómetro, visualización de la hora, toma de fotografías remota, control de música (controlar el reproductor de música del teléfono, control de volumen), buscar teléfono celular
Cuerpo de aleación de zinc I BT llamada/música/múltiples idiomas/esfera personalizada/pantalla redonda múltiple Ul /1.32 incorporada`,
    features: [
      "KESHUYOU 2025 nuevo reloj inteligente de moda para mujer 6 llamadas Bluetooth monitoreo de salud alarma reloj inteligente deportivo para hombres"
    ],
    reviews: [],
    rating: 4.8
  },

  { 
    id: 7, 
    name: "Punta de Presentacion Laser", 
    price: 1200, 
    image: "./images/puntero1.png",
    images: [
      "./images/puntero1.png",
      "./images/puntero2.png",
      "./images/puntero3.png",
      "./images/puntero4.png",
      "./images/puntero5.png",
      "./images/puntero6.webp",
      "./images/puntero7.webp",
      "./images/puntero8.webp",
      "./images/puntero9.webp",
      "./images/puntero10.webp",
    
          ],
    category: "electronica",
    description: "Puntero de presentación láser 2,4G, bolígrafo de Control remoto de demostración inalámbrica para PowerPoint PPT para conferencias y reuniones",
    features: [
"Batería NO",
"Control remoto Sí",
"Con puertos USB Sí",
"Número de modelo S9",
"Página de la placa de rebote Sí",
"Color claro Rojo",
"Inalámbrico Sí",
"Origen CN(Origen)",
"Certificación CE,FCC,RoHS"
    ],
    reviews: [],
    rating: 4.8
  },

  { 
    id: 8, 
    name: "Cartera de Caballero Negro",
    price: 1200, 
    image: "./images/cartera1.webp",
    images: [
      "./images/cartera1.webp",
      "./images/cartera2.png",
      "./images/cartera3.webp",
      "./images/cartera4.webp",
      "./images/cartera5.webp",
          ],
    category: "ropa",
    description: " cartera para hombre, bolso de hombro de tela Oxford a la moda, informal, cruzado Diagonal, máquina de mano a la moda, bolso cuadrado pequeño",
    features: [
      "Número de modelo lw2053",
      "Exterior Ninguno",
      "Dureza HARD",
      "Tipo de diseño Liso",
      "Estilo Casual",
      "Material del revestimiento: POLIÉSTER",
      "Material principal: Oxford",
      "Forma: Se pliega",
      "Origen: CN(Origen)",
      "CN: Hebei",
      "Ocasión: Negocios",
      "Género: Unisex",
      "Tipo de cierre: Cremallera"
    ],
    reviews: [],
    rating: 4.8
},

{ 
  id: 9,
  name: "Linterna de Cabeza Recargable",
  price: 1200,
  image: "./images/linternacabeza1.jpeg",
  images: [
    "./images/linternacabeza1.jpeg",
    "./images/linternacabeza2.jpeg",
    "./images/linternacabeza3.jpeg",
    "./images/linternacabeza4.jpeg",
    "./images/linternacabeza5.jpeg",
    "./images/linternacabeza6.jpeg",
  ],
  category: "electronica",
  description: "Tecnología de detección inteligente: a diferencia de otros productos, nuestro faro está equipado con los últimos sensores inteligentes. Controla fácilmente la luz encendida y apagada agitando tu mano incluso si tienes guantes puestos, no ensuciará la unidad. Enciende la lámpara frontal y el interruptor de inducción al mismo tiempo.",
  features: [
    "Haz amplio de 230°: estos faros delanteros de barra de luz brillante proporcionan una excelente iluminación de gran angular de 230° y 350 lúmenes, en lugar de iluminar solo una pequeña zona delante de ti como los faros tradicionales. También diseñado con un foco lateral LED extra brillante para satisfacer tus diferentes necesidades de escenarios, por ejemplo, camping, correr, ciclismo, trabajo y reparación.",
    "5 modos de luz: el faro tiene 5 modos de iluminación: modo alto COB, modo bajo COB, modo alto XPE, modo bajo XPE y modo estroboscópico. Fácil de operar, pulsa brevemente el botón de encendido para cambiar el modo, pulsa durante mucho tiempo para encender el modo estroboscópico.",
    "【Linterna frontal recargable por USB】Batería recargable integrada de gran capacidad de 1200 mAh. No solo ahorra el costo de reemplazar las baterías, sino que es respetuoso con el medio ambiente. Tiempo de carga: 2 horas completamente cargada. Tiempo de trabajo durante 3-8 horas en diferentes modos de luz. Si se requiere iluminación durante mucho tiempo, se recomienda llevar dos a la vez para estar en espera.",
    "Ligera y cómoda: nuestra linterna frontal está hecha de ABS y silicona, con una diadema ajustable y elástica, es suave y cómoda. Solo 3.4 onzas, sin un foco pesado como los faros tradicionales. Diseño de tamaño pequeño que se puede plegar para caber fácilmente en tu bolsillo. IPX4 resistente al agua significa que está protegido contra salpicaduras de agua desde todos los ángulos, no tienes que preocuparte si llueve o nieve inesperadamente.",
    "Faros delanteros LED, paquete de 2 linternas recargables para adultos, faros delanteros de haz ancho de 230°, lámpara de cabeza con sensor de movimiento, diadema ajustable impermeable para exteriores, para correr, campamento, senderismo"
  ],
  reviews: [],
  rating: 4.8
},
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
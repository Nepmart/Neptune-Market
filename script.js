const products = [
  {
    id: 1,
    name: "Auriculares Bluetooth",
    price: 1250,
    category: "electronica",
    image: "https://via.placeholder.com/200x150?text=Auriculares"
  },
  {
    id: 2,
    name: "Lámpara Recargable",
    price: 890,
    category: "hogar",
    image: "https://via.placeholder.com/200x150?text=Lampara"
  },
  {
    id: 3,
    name: "Smartwatch Deportivo",
    price: 3290,
    category: "electronica",
    image: "https://via.placeholder.com/200x150?text=Smartwatch"
  },
  {
    id: 4,
    name: "Camisa Casual",
    price: 1490,
    category: "moda",
    image: "https://via.placeholder.com/200x150?text=Camisa"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts(filtered = products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="\${p.image}" alt="\${p.name}">
      <h3>\${p.name}</h3>
      <p>RD$\${p.price}</p>
      <button onclick="addToCart(\${p.id})">Agregar</button>
    `;
    container.appendChild(div);
  });
}

function filterCategory(cat) {
  if (cat === "todos") {
    loadProducts(products);
  } else {
    const filtered = products.filter(p => p.category === cat);
    loadProducts(filtered);
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cartItems");
  const total = document.getElementById("total");
  list.innerHTML = "";

  let totalPrice = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      \${item.name} x\${item.qty}
      <span>RD$\${item.price * item.qty}</span>
      <button onclick="removeFromCart(\${item.id})">❌</button>
    `;
    list.appendChild(li);
    totalPrice += item.price * item.qty;
  });

  total.textContent = totalPrice.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout() {
  const metodo = prompt("Selecciona método de pago:\n1. Transferencia\n2. PayPal\n3. Stripe");
  if (metodo === "1") {
    window.location.href = "checkout/transferencia.html";
  } else if (metodo === "2") {
    window.location.href = "checkout/paypal.html";
  } else if (metodo === "3") {
    window.location.href = "checkout/stripe.html";
  } else {
    alert("Método inválido.");
  }
}

loadProducts();
updateCart();

// Configuración inicial
emailjs.init("b83D3JpJuZ0Ke_kgf");

let users = JSON.parse(localStorage.getItem("users")) || [{ username: "admin", password: "1234" }];
let currentUser = localStorage.getItem("currentUser") || null;
// ===== INICIALIZAR CARRITO =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Verificar si el carrito debe vaciarse al iniciar
window.addEventListener("load", () => {
  const currentUser = localStorage.getItem("currentUser");
  
  // Si no hay usuario activo, el carrito se vacía automáticamente
  if (!currentUser) {
    localStorage.removeItem("cart");
    cart = [];
  }

  // Siempre renderizar carrito limpio al inicio
  renderCart();
});

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let coupons = { "NEP10": 0.10, "VERANO20": 0.20 };

let deliveryMethod = "pickup"; // pickup o shipping
let cartTotal = 0;

// ---------------------- LOGIN DE USUARIO ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const loginFields = document.getElementById("loginFields");
  const userPanel = document.getElementById("userPanel");
  const welcomeText = document.getElementById("welcomeText");

  if (currentUser) {
    loginFields.style.display = "none";
    userPanel.classList.remove("hidden");
    welcomeText.textContent = `Bienvenido, ${currentUser}`;
  }

  document.getElementById("entrar").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!username || !password) return alert("Ingrese usuario y contraseña.");
    currentUser = username;
    localStorage.setItem("currentUser", username);
    loginFields.style.display = "none";
    userPanel.classList.remove("hidden");
    welcomeText.textContent = `Bienvenido, ${username}`;
  });

  document.getElementById("crear-cuenta").addEventListener("click", () => {
    alert("El registro de usuarios estará disponible próximamente.");
  });

  cerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");
  localStorage.removeItem("cartTotal");
  cart = [];
  renderCart();
  userPanel.classList.add("hidden");
  loginFields.style.display = "block";
});

});
// Productos con placeholders temporales
const products = [
  { 
    id: 1, 
    name: "Scanner Automotriz", 
    price: 1200, 
    image: "./images/ecanner0.png",  
    images: [
      "./images/ecanner0.png",
      "./images/escanner1.png",
      "./images/escanner2.png",
      "./images/escanner3.png",
    ],
    category: "Accesorios Autos",
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
    price: 400,
    image: "./images/cargador1.png", 
    images: [
      "./images/cargador2.png",
      "./images/cargador3.png",
      "./images/cargador4.png"
    ],
    category: "Accesorios Autos",
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
    price: 0, 
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
    price: 1000, 
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
  name: "Memoria MicroSD (64MB - 512MB)",
  price: 250, // precio base (se ajustará según selección)
  image: "./images/memoriaMicroSD1.png",
  images: [
    "./images/memoria128mb.png",
    "./images/memoria256mb.png",
    "./images/memoria512mb.png",
    "./images/memoriaMicroSD1.png",
    "./images/memoriaMicroSD2.png",
    "./images/memoriaMicroSD3.png",
    "./images/memoriaMicroSD4.png"
  ],
  category: "electronica",
  description:
    "Tarjeta de memoria TF de pequeña capacidad ideal para cámaras CCTV o dispositivos de grabación. Clase 10, de alta velocidad.",
  variants: [
    { size: "128MB", price: 250 },
    { size: "256MB", price: 500 },
    { size: "512MB", price: 900 }
          ],
    
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
    price: 1200, 
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
    price: 900, 
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
    price: 450, 
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
    rating: 4.8,
},

{ 
  id: 9,
  name: "Linterna de Cabeza Recargable",
  price: 575,
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

{ 
  id: 10,
  name: "Puntadores de presentador inalámbricos de 2,4G",
  price: 0,
  image: "./images/wirelessPresenter1.avif",
  images: [
    "./images/wirelessPresenter1.avif",
    "./images/wirelessPresenter2.avif",
    "./images/wirelessPresenter3.avif",
    "./images/wirelessPresenter4.avif",
    "./images/wirelessPresenter5.avif",
  ],
  category: "electronica",
  description: "Característica: Este puntero rojo remoto inalámbrico de 2,4 GHz presentación en negro es pequeño y exquisito, portátil y con aplicaciones más ricas. Un asistente esencial para demostraciones o presentaciones, puede señalar fácilmente el PPT o la pizarra en cualquier rincón del aula. Hacer que sus demostraciones o presentaciones parezcan más dinámicos y hacer que los oyentes se sientan liberados. Este puntero también es el mejor regalo para amigos y familiares. Configuración sin complicaciones, simplemente conéctelo al puerto USB de su computadora. El receptor USB es plug and play, no requiere controlador. Ahorro de energía, liviano, adecuado para guardar en el bolsillo o en el bolso.",
  features: [
    "Especificaciones técnicas: Admite MS Word, Excel, PowerPoint, ACD See, sitio web, etc., con función de subir y bajar página. Fuente de alimentación: 1 pila AAA (no incluida). Interruptor: botón. Frecuencia de transmisión: 2,4 GHz. Longitud de onda: 650 mm. Potencia: <5 mw. Alcance: <15m. Sistema operativo: interfaz USB y para Microsoft Windows 2000 / XP / Vista. Tamaño: 10,5x3,9x2,6 cm. Peso neto: 29 g. Color negro. Paquete incluido: 1 mando a distancia inalámbrico para presentador, 1 receptor inalámbrico USB ultradelgado, 1 manual de usuario."
  ],
  reviews: [],
  rating: 4.8
},

{ 
  id: 11,
  name: "Cargador portátil de batería de 50000 mAh, cargador de batería de carga rápida de 22.5 W con cables integrados, cargador de teléfono portátil USB-C esencial para viajes, campamento, para iPhone",
  price: 0,
  image: "./images/PowerBank1.jpg"
  ,images: [
    "./images/PowerBank1.jpg",
    "./images/PowerBank2.jpg",
    "./images/PowerBank3.jpg",
    "./images/PowerBank4.jpg",
    "./images/PowerBank5.jpg",
    "./images/PowerBank6.jpg",
    "./images/PowerBank7.jpg",
    "./images/PowerBank8.jpg",
    "./images/PowerBank9.jpg",
    "./images/PowerBank10.jpg",
  ],
  category: "electronica",
  description:
`• Gran capacidad de 50000 mAh: el cargador portátil OHOVIV de capacidad masiva ultra alta proporciona 10 cargas para iPhone 15, que hacen de una nueva batería de polímero de alta densidad. Dependiendo del tamaño de la batería, la mayoría de los teléfonos inteligentes obtendrán más de 10 cargas completas. El banco de energía portátil funciona y no ocupa ningún espacio adicional, adecuado para camping, senderismo, vacaciones, viajes y otros espacios al aire libre.
• Carga 6 dispositivos a la vez: cargador de teléfono portátil OHOVIV de 50000 mAh con 4 cables integrados (Lightning, Type-C, Micro, USB-A) y 3 puertos de carga (2 USB-A, 1 tipo C), puedes cargar hasta 6 dispositivos a la vez sin sacrificar la energía para máxima comodidad. Estos cables de cargador portátil están hechos de materiales de alta calidad, soportando más de 10,000 curvas.
• Carga súper rápida de 22.5 W: el cargador portátil para teléfono celular cuenta con salida PD de 22.5 W y tecnología de carga rápida QC4.0, lo que le permite cargar tu iPhone al 55% en solo 30 minutos, 3 veces más rápido que un banco de baterías estándar. La carga bidireccional USB-C (IN&OUT) y la pantalla digital LED eliminan la ansiedad de energía, asegurando la mejor experiencia durante tus vacaciones.
• Diseño compacto con amplia compatibilidad: colócalo fácilmente en tu mochila, bolsillo o bolso y llévalo a cualquier lugar. Este paquete de batería externa ligera es de 5.82 x 2.83 x 1.18 pulgadas y pesa solo 1.07 libras. Compatible con casi todos los dispositivos electrónicos, batería externa para iPhone 16/15/14/13/12, serie iPad, para Samsung s24/s23/s22/s21/s20, Google Pixel y otros Android, tabletas, etc.
• Powerbank seguro y seguro: cargador de batería portátil integrado con baterías de calidad y 10 sistemas de protección múltiple para evitar sobrecargas, cortocircuitos y una serie de peligros potenciales. El chip inteligente AI actualizado y la tecnología de control de temperatura NTC minimizan la pérdida de energía en tiempo real, pueden reducir los riesgos de sobrecalentamiento en un 97%, que son esenciales para picnic familiar.
• Servicio posventa confiable: disfruta de la tranquilidad con 365 días de garantía de reemplazo, atención al cliente profesional 24/7. Estamos dedicados a proporcionar soluciones satisfactorias para cualquier problema que pueda encontrar. Lo que obtienes: 1 cargador portátil de 50000 mAh, 1 manual de usuario (idioma español no garantizado), 1 cable tipo C (bloque de cargador de pared no incluido)`,
  features: [
"Características y especificaciones",
"Entradas analógicas rgb	USB Tipo A, USB Tipo C",
"Capacidad Batería	50000 Miliamperios Hora",
"Características del producto: 4 cables incorporados, Carga rápida, Cargador de teléfono celular 50000mAh, Pantalla digital, Protección contra sobrecarga, Protección de sobrecarga.",
"Voltaje	3,7 Voltios",
"Fuente de energía Eléctrico con cable",
"Número de puertos 3",
"Dispositivos compatibles	Smartphone",
  ],
  reviews: [],
  rating: 4.8
},

{ 
  id: 12,
  name: "Arrancador de batería para automóvil, 1000 A, pico 12800 mAh, 12 V, con carga rápida por USB 3.0 (hasta 7 L de gas o motor diésel de 5,5 L) (1000A)",
  price: 0,
  image: "./images/ArrancadorBateria1.jpg"
  ,images: [
    "./images/ArrancadorBateria1.jpg",
    "./images/ArrancadorBateria2.jpg",
    "./images/ArrancadorBateria3.jpg",
    "./images/ArrancadorBateria4.jpg",
    "./images/ArrancadorBateria5.jpg",
    "./images/ArrancadorBateria6.jpg",
    "./images/ArrancadorBateria7.jpg",
    "./images/ArrancadorBateria8.jpg",
    "./images/ArrancadorBateria9.jpg",
    "./images/ArrancadorBateria10.jpg",
  ],
  category: "Accesorios Autos",
  description: 
    `• Potente arrancador: Arranca tu vehículo (hasta 7,0 l de gasolina o 5,5 l de diésel) con 1000 amperios de corriente máxima y abrazaderas resistentes. En cuestión de segundos.
• 12 meses en espera: Arranca tus coches de 12 V 20 veces con una carga completa. Autodescarga extremadamente baja, no te preocupes por perder carga durante el almacenamiento. Prepárate para empezar.
• El banco de energía de 12800 mAh tiene 2 salidas USB inteligentes (puerto de carga rápida de 18 W incluido). Puede cargar tu teléfono y tableta de forma rápida y segura al mismo tiempo. (Carga completa tipo C en 4 horas).
• Un salvavidas: La luz LED ultrabrillante tiene 4 modos de luz con linterna, intermitente, luz SOS, luz estroboscópica.
• Protecciones inteligentes: Cables de arranque inteligentes incorporados de 8 protecciones mejoradas, especialmente a prueba de chispas, protección de polaridad inversa, protección contra sobrecorriente, protección de alta temperatura, protección contra sobrecarga.`,

  features: [
"",
  ],
  reviews: [],
  rating: 4.8
},

{ 
  id: 13,
  name: "Altavoz Bluetooth, Mini subwoofer de ducha, manos libres impermeables con micrófono de ventosa para baño, piscina, playa, teléfono de coche",
  price: 0,
  image: "./images/AltaVocesBano0.avif",
  images: [
    "./images/AltaVocesBano0.avif",
    "./images/AltaVocesBano1.avif",
    "./images/AltaVocesBano3.avif",
    "./images/AltaVocesBano4.avif",
    "./images/AltaVocesBano5.avif",
    "./images/AltaVocesBano6.avif",
    "./images/AltaVocesBano7.avif",
  ],
  category: "electronica",  
  description: "Descripción del producto:\n\
- Modelo: Opansten-2024\n\
- Compatibilidad: Universal\n\
- Entrada/Salida: USB\n\
- Modo de sonido: Modo estándar\n\
- Categoría: Altavoces\n\
- Potencia de entrada: <25 W\n\
- Control por voz: No\n\
- Impermeable: Sí\n\
- Apoyo APP: No\n\
- Material: Metal\n\
- Adaptador de bandeja de entrada: No\n\
- Asistente personal inteligente: Ninguno\n\
- Mezcla de audio: Rango completo\n\
- Número de carcasas de altavoz: 1\n\
- Fuente de alimentación: CA, USB\n\
- Canales: 1\n\
- Batería: Sí\n\
- Comunicación: Inducción\n\
- Tipo de altavoz: Portátil\n\
- Material de la carcasa: PVC\n\
- Nombre de la marca: Opansten\n\
- Fuente de energía: Batería",

  features: [
"Características clave",
"1.Impermeable y portátil, cabe en tu bolsillo",
"2.Soporte manos libres",
"3.Controles fáciles de usar para reproducir música y contestar llamadas telefónicas",
"4.Micrófono incorporado de calidad cristalina",
"5.Transmite música desde cualquier dispositivo habilitado para Bluetooth",

"Especificación",
"• Tamaño: 85X45mm",
"• Bluetooth: 3,0 + EDR",
"• Frecuencia inalámbrica: 2,4 GHz",
"• Bluetooth manos libres: Sí",
"• Distancia disponible: 10 m",
"• Potencia: 3W",
"• A prueba de agua: IPX4",
"• Uso: reproductor de audio portátil, teléfono móvil, computadora",
"• Capacidad de la batería incorporada: 400 mAh",
"• Tipo de batería: batería de litio",
"• Tiempo del reproductor de música: 2-4 horas",

"El paquete incluye:",
"• 1 altavoz",
"• 1 cable USB",
"• 1 x caja al por menor",
  ],
  reviews: [],
  rating: 4.8
},
//---
{ 
  id: 14,
  name: "Cargador inalámbrico de 65W para móvil, base de carga rápida por inducción para iPhone 15, 14, 13, 12, 11 Pro, X, XS, Max, XR, 8, Samsung y Xiaomi",
  price: 0,
  image: "./images/deskchargerwireless1.jpeg",
  images: [
    "./images/deskchargerwireless1.jpeg",   
    "./images/deskchargerwireless2.jpeg",
    "./images/deskchargerwireless3.jpeg",
    "./images/deskchargerwireless4.jpeg",
    "./images/deskchargerwireless5.png",
    "./images/deskchargerwireless6.png",
    "./images/deskchargerwireless7.png"
    
],
  category: "electronica",
  description: `Lleve su experiencia de carga inalámbrica al siguiente nivel con nuestro soporte de carga rápida.

CONVENIENTE CARGA INALÁMBRICA QI - Dígale adiós a los cables enredados y disfrute de la carga inalámbrica simplemente colocando su teléfono en el soporte de carga. Nota: no se carga a través de fundas de teléfono de metal o fundas más gruesas de 0,2 pulgadas.

ÁNGULOS DE VISIÓN DOBLE - La almohadilla inalámbrica de 2 bobinas carga su teléfono vertical u horizontalmente para una vista y soporte más ideales al ver videos, escuchar música, jugar juegos y más. Perfecto para oficina, dormitorio o sala de estar.

ÚLTIMA GARANTÍA DE SEGURIDAD - Protecciones internas contra sobrecarga, sobrecorriente, sobretensión y sobrecalentamiento. Borde inferior de silicona antideslizante y soporte elevado brindan estabilidad adicional para cualquier superficie de escritorio.

ESPECIFICACIONES:
* Estándar de carga inalámbrica: Qi
* Admite carga: 5W/7,5W/10W/15W/30W/65W, admite todos los teléfonos con cargador inalámbrico.
* Rango de transmisión: 5-8mm
* Tasa de conversión de energía inalámbrica: ≥ 80
* Interfaz: USB tipo C
* Amplia compatibilidad: Compatible con todos los teléfonos que admiten carga inalámbrica.

EL PAQUETE INCLUYE:
* 1 cargador inalámbrico rápido
* 1 manual de usuario
* Dispositivos compatibles: Teléfonos`,
  features: [
    "Carga rápida de 65W",
    "Diseño delgado y portátil",
    "Compatible con múltiples dispositivos",
    "Protección contra sobrecalentamiento",
    "Base antideslizante"
  ],
  reviews: [],
  rating: 4.8
},

{ 
  id: 15,
  name: `UTHAI T22 2,5 \"SATA a USB3.0 HDD carcasa de disco duro móvil para SSD caja de almacenamiento HDD externo con Cable USB3.0/2,0 ABS.`
  ,price: 0,
  image: "./images/Encloser0.png",
  images: [
    "./images/encloser1.jpeg",
    "./images/encloser2.jpeg",
    "./images/encloser3.jpeg",
    "./images/encloser4.jpeg",
    "./images/encloser5.png",
    "./images/encloser6.png"
    
  ],
  category: "electronica",
  description: `Detalles del producto:
1. Modelo: UTHAI T2
2. Material: carcasa de plástico
3. Chip: IS621/JM57
4. Interfaz: USB 3.0 A SATA
5. Tratamiento superficial: inyección
6. Interfaz de transferencia USB 3.0 de alta velocidad, compatible con USB 2.0 y 1.1
7. Admite intercambio en caliente
8. Sistema operativo compatible: Win7/Win8/Win10/Mac OS 8.6 o superior
9. Velocidad de transmisión teórica USB 3.0: hasta 5 GB/s, USB2.0: 480 MB/s
10. Admite todo tipo de discos duros mecánicos SATA de 2,5" y unidades SSD`,
  features: [],
  reviews: [],
  rating: 4.8
},

];

// ---------------------- CARGAR PRODUCTOS ----------------------
function loadProducts(list = products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" onclick="openProductDetail(${p.id})">
      <div class="product-info">
        <h3 onclick="openProductDetail(${p.id})">${p.name}</h3>
        <p>RD$ ${p.price.toFixed(2)}</p>
        <button onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Agregar</button>
      </div>`;
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();      // carga los productos
  renderCart();        // carga el carrito
  updateDeliveryOption(); // inicializa la entrega
});

function openProductDetail(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById("productDetailModal");
  const content = document.getElementById("productDetailContent");

  // 🧩 Si el producto tiene variantes (ej. Memoria MicroSD)
  let variantHTML = "";
  if (product.variants) {
    variantHTML = `
      <label for="variantSelect"><strong>Seleccionar capacidad:</strong></label>
      <select id="variantSelect" onchange="updateVariantPrice(${product.id})">
        ${product.variants.map(v => `<option value="${v.price}">${v.size} - RD$ ${v.price}</option>`).join("")}
      </select>
    `;
  }

  // ✅ Mantiene tus imágenes normales (como antes)
  const galleryHTML = `
    <div class="product-gallery">
      <img src="${product.images[0]}" class="product-main-image" id="mainImage">
      <div class="product-thumbnails">
        ${product.images.map((img, i) => `
          <img src="${img}" class="product-thumbnail" onclick="changeMainImage('${img}')">
        `).join("")}
      </div>
    </div>
  `;

  // 🔹 Mostrar productos relacionados (excepto el mismo)
  const related = products
    .filter(p => p.category === product.category && p.id !== id)
    .slice(0, 4);

  let relatedHTML = "";
  if (related.length > 0) {
    relatedHTML = `
      <div class="related-products">
        <h3>Productos Relacionados</h3>
        <div class="related-grid">
          ${related.map(r => `
            <div class="related-item" onclick="openProductDetail(${r.id})">
              <img src="${r.images[0]}" alt="${r.name}" />
              <h4>${r.name}</h4>
              <p>RD$ ${r.price.toFixed(2)}</p>
            </div>`).join("")}
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="product-detail">
      ${galleryHTML}
      <div class="product-info">
        <h2 class="product-title">${product.name}</h2>
        <div class="product-rating">⭐⭐⭐⭐☆ (4.5)</div>
        <p id="productPrice">RD$ ${product.price.toFixed(2)}</p>
        ${variantHTML}
        <p class="product-description">${product.description}</p>
        <ul>${product.features.map(f => `<li>${f}</li>`).join("")}</ul>

        <div class="product-actions">
          <button onclick="addToCart(${product.id}, document.getElementById('variantSelect') ? document.getElementById('variantSelect').selectedOptions[0].text : null)">
            <i class="fas fa-cart-plus"></i> Agregar al carrito
          </button>
          <button class="fav-btn" onclick="toggleFavorite(${product.id})">
            <i class="fas fa-heart"></i> Favorito
          </button>
        </div>
      </div>
    </div>
    ${relatedHTML}
  `;

  modal.style.display = "flex";
}


  // ✅ Mantiene tus imágenes normales (como antes)
  const galleryHTML = `
    <div class="product-gallery">
      <img src="${product.images[0]}" class="product-main-image" id="mainImage">
      <div class="product-thumbnails">
        ${product.images.map((img, i) => `
          <img src="${img}" class="product-thumbnail" onclick="changeMainImage('${img}')">
        `).join("")}
      </div>
    </div>
  `;

  content.innerHTML = `
    <div class="product-detail">
      ${galleryHTML}
      <div class="product-info">
        <h2 class="product-title">${product.name}</h2>
        <p id="productPrice">RD$ ${product.price.toFixed(2)}</p>
        ${variantHTML}
        <p class="product-description">${product.description}</p>
        <ul>${product.features.map(f => `<li>${f}</li>`).join("")}</ul>
        <button onclick="addToCart(${product.id}, document.getElementById('variantSelect') ? document.getElementById('variantSelect').selectedOptions[0].text : null)">
          <i class="fas fa-cart-plus"></i> Agregar al carrito
        </button>
      </div>
    </div>
  `;

  modal.style.display = "flex";


function changeMainImage(imgSrc) {
  document.getElementById("mainImage").src = imgSrc;
}



// Nueva función: actualiza el precio al cambiar la variante
function updateVariantPrice(id) {
  function toggleFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
    alert("Eliminado de favoritos ❤️‍🔥");
  } else {
    favorites.push(id);
    alert("Agregado a favoritos ❤️");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

  const select = document.getElementById("variantSelect");
  if (!select) return;
  const newPrice = parseFloat(select.value);
  const product = products.find(p => p.id === id);
  if (product) {
    product.price = newPrice;
    document.getElementById("productPrice").textContent = `RD$ ${newPrice.toFixed(2)}`;
  }
}



function closeProductDetail() {
  document.getElementById("productDetailModal").style.display = "none";
}

// ---------------------- CARRITO ----------------------

function addToCart(id, variantText = null) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const variant = variantText ? variantText.split(" - ")[0] : null;
  const itemName = variant ? `${product.name} (${variant})` : product.name;
  const existingItem = cart.find(i => i.id === id && i.variant === variant);

  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({
      id: id,
      name: itemName,
      variant: variant,
      price: product.price,
      qty: 1
    });
  }

  saveCart();
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  if (!list || !totalEl) return; // seguridad

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.gap = "10px";
    li.style.padding = "6px 0";
    li.style.borderBottom = "1px solid #ddd";

    const info = document.createElement("span");
    info.textContent = `${item.name} x${item.qty}`;

    const price = document.createElement("span");
    price.textContent = `RD$ ${(item.price * item.qty).toFixed(2)}`;

    // 🗑️ Botón visible y funcional
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.title = "Eliminar del carrito";
    removeBtn.style.background = "none";
    removeBtn.style.border = "none";
    removeBtn.style.color = "red";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.fontSize = "1.1rem";
    removeBtn.onclick = () => removeFromCart(index);

    const rightSection = document.createElement("div");
    rightSection.style.display = "flex";
    rightSection.style.alignItems = "center";
    rightSection.style.gap = "8px";
    rightSection.appendChild(price);
    rightSection.appendChild(removeBtn);

    li.appendChild(info);
    li.appendChild(rightSection);
    list.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
  localStorage.setItem("cartTotal", total.toFixed(2));
  localStorage.setItem("cart", JSON.stringify(cart));
}


    totalEl.textContent = total.toFixed(2);
  localStorage.setItem("cartTotal", total.toFixed(2));
  localStorage.setItem("cart", JSON.stringify(cart));


function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}


function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

  totalEl.textContent = total.toFixed(2);
  localStorage.setItem("cartTotal", total.toFixed(2));

document.addEventListener("DOMContentLoaded", renderCart);

// ---------------------- CUPONES ----------------------
function applyCoupon() {
  const code = document.getElementById("couponCode").value.trim().toUpperCase();
  const totalEl = document.getElementById("total");
  let total = parseFloat(localStorage.getItem("cartTotal")) || 0;

  if (coupons[code]) {
    const discount = coupons[code];
    total = total - (total * discount);
    localStorage.setItem("cartTotal", total.toFixed(2));
    totalEl.textContent = total.toFixed(2);
    alert(`Cupón aplicado: ${discount * 100}% de descuento.`);
  } else {
    alert("Cupón inválido o vencido.");
  }
}

// ---------------------- OPCIONES DE ENTREGA ----------------------
function updateDeliveryOption() {
  const isShipping = document.getElementById("shipping").checked;
  const pickupPoints = document.getElementById("pickupPoints");
  pickupPoints.style.display = isShipping ? "block" : "none";
  deliveryMethod = isShipping ? "shipping" : "pickup";

  // Actualiza el texto del método en el modal (si ya está abierto)
  const methodEl = document.getElementById("modalDeliveryMethod");
  if (methodEl) {
    methodEl.textContent = isShipping ? "Envío a punto" : "Recogida en tienda";
  }
}

// ---------------------- CHECKOUT ----------------------
function checkout() {
  const delivery = document.querySelector('input[name="delivery"]:checked').value;
  const point = document.getElementById("pickupLocation").value;
  const modal = document.getElementById("paymentModal");
  const methodEl = document.getElementById("modalDeliveryMethod");
  const locationEl = document.getElementById("modalDeliveryLocation");

  if (delivery === "shipping") {
    if (!point) {
      alert("Por favor, selecciona un punto de entrega antes de continuar.");
      return;
    }
    methodEl.textContent = "Envío a punto";
    locationEl.textContent = point;
  } else {
    methodEl.textContent = "Recogida en tienda";
    locationEl.textContent = "No aplica";
  }

  modal.style.display = "flex";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
}

// ---------------------- FORMULARIO DE PEDIDO ----------------------
document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const cedula = document.getElementById("cedula").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const paymentMethod = document.getElementById("paymentMethod").value;
  const total = localStorage.getItem("cartTotal") || "0.00";
  const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
  const deliveryPoint =
    deliveryMethod === "shipping"
      ? document.getElementById("pickupLocation").value
      : "Recogida en tienda";

  if (!fullname || !cedula || !phone || !email || !address) {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }
  if (!paymentMethod) {
    alert("Selecciona un método de pago antes de continuar.");
    return;
  }

  const templateParams = {
    fullname,
    cedula,
    phone,
    email,
    address,
    deliveryMethod: deliveryMethod === "pickup" ? "Recogida en tienda" : "Envío a punto",
    deliveryPoint,
    total,
    paymentMethod:
      paymentMethod === "paypal" ? "Pago con PayPal" : "Pago por Transferencia Bancaria",
  };

  emailjs
    .send("service_up3dtue", "template_4k5e1m4", templateParams)
    .then(() => {
      alert("Pedido enviado correctamente. Serás redirigido a tu método de pago.");
      document.getElementById("paymentModal").style.display = "none";
      if (paymentMethod === "paypal") {
        window.location.href = "/pagos/paypal.html";
      } else {
        window.location.href = "/pagos/transferencia.html";
      }
    })
    .catch((error) => {
      console.error("Error al enviar el pedido:", error);
      alert("Error al enviar el pedido. Intenta nuevamente.");
    });
});

// ---------------------- BÚSQUEDA ----------------------
function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().includes(query));
  loadProducts(results);
}

// ---------------------- FILTRO POR CATEGORÍA ----------------------
function filterByCategory(category) {
  if (category === "all") {
    loadProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    loadProducts(filtered);
  }
}

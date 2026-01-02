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

const products = [
  { 
    id: 1, 
    name: "Medidor de Neumaticos Pantalla con Luz Rojo", 
    price: 600, 
    image: "./images/Medidor de Neumaticos Pantalla con Luz 4.avif",  
    images: [
      "./images/Medidor de Neumaticos Pantalla con Luz 1.avif",
      "./images/Medidor de Neumaticos Pantalla con Luz 2.webp",
      "./images/Medidor de Neumaticos Pantalla con Luz 3.avif",
      "./images/Medidor de Neumaticos Pantalla con Luz 4.avif",
      "./images/Medidor de Neumaticos Pantalla con Luz 5.webp",
      "./images/Medidor de Neumaticos Pantalla con Luz 6.avif"
    ],
    category: "Accesorios Autos",
    description: "Medidor de presión de neumáticos con retroiluminación, monitoreo Digital de presión de neumáticos de alta precisión, medidor de presión de aire de neumáticos de coche, pantalla LCD",
    features: [
      "Descripción:",
      "Nuevo y de alta calidad",
      "Tamaño: 13*4,5*2,5 cm/5,12*1,77*0,98 pulgadas",
      "Cuatro rangos de medición: PSI: 0-150, Bar,KPA,Kgf/cm2",
      "Incremento mínimo: 0,5 PSI",
      "Color: rojo, plata, azul, oro, negro, gris",
      "Fuente de alimentación: 3 * AG13 (incluido)",
      "Especificación:",
      "Boquilla iluminada y pantalla de visualización para máxima visibilidad con poca luz o de noche",
      "La pantalla digital muestra instantánea y claramente la lectura exacta, eliminando las conjeturas de los medidores analógicos.",
      "La boquilla se sella al vástago de la válvula para mediciones rápidas y precisas",
      "El control simple con botón enciende la unidad y selecciona el rango deseado"
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
    name: "Medidor de Neumaticos Llavero LCD Digital", 
    price: 400, 
    image: "./images/Medidor de Neumaticos tipo llavero LCD 0.avif",
    images: [
      "./images/Medidor de Neumaticos tipo llavero LCD 1.avif",
      "./images/Medidor de Neumaticos tipo llavero LCD 2.avif",
      "./images/Medidor de Neumaticos tipo llavero LCD 3.avif",
      "./images/Medidor de Neumaticos tipo llavero LCD 4.avif",
      "./images/Medidor de Neumaticos tipo llavero LCD 5.avif",
      "./images/Medidor de Neumaticos tipo llavero LCD 6.avif",
    ],
    category: "Accesorios Autos",
    description: "Probador de presión de aire de neumáticos de coche, medidor de neumáticos, pantalla LCD Digital, alarma de seguridad de neumáticos de motocicleta y coche",
    features: [
      "Pantalla clara: este medidor de presión de neumáticos de automóvil está equipado con una pantalla digital LCD transparente y botones de función. Con un rango de medición de presión de 5-150 PSI y lecturas precisas de 0.1 PSI, el indicador, combinado con una boquilla de válvula bien sellada, te ayuda a obtener datos de presión de neumáticos de forma rápida y precisa, por lo que es ideal para el monitoreo diario de la presión de los neumáticos y los controles de emergencia.",
      "【4 ajustes】: Este medidor de presión de neumáticos puede mostrar 4 unidades de presión de neumáticos: PSI, kPa, Bar y Kg/cm². Sin la necesidad de conversiones, cumple con los requisitos de uso de diferentes grupos de usuarios, brindándole una experiencia eficiente y conveniente.",
      "【Útil】: este medidor de presión de neumáticos de automóvil te ayuda a controlar y mantener los valores de presión de los neumáticos en tiempo real. No solo reduce el desgaste anormal de los neumáticos y prolonga la vida útil de los neumáticos, sino que también optimiza el rendimiento de manejo del vehículo, evita posibles riesgos de seguridad por adelantado y reduce los costos de mantenimiento de la fuente. Es una herramienta práctica para salvaguardar la seguridad de conducción y el mantenimiento económico del automóvil.",
      "【Fácil uso】: este medidor de presión de neumáticos es fácil de operar. Simplemente presione un botón para medir rápidamente la presión sin pasos complejos. Cuenta con un diseño de ahorro de energía que se apaga automáticamente cuando está inactivo. Adecuado para varios tipos de vehículos, como automóviles, camiones, SUV y motocicletas, cumple con las necesidades de medición de presión de neumáticos de diferentes vehículos y es un práctico accesorio para vehículos. Nota: Este producto no incluye pilas.",
      "Tamaño y material: este medidor de presión de neumáticos de automóvil mide aproximadamente 1.32 x 2.56 pulgadas, por lo que es compacto y ligero. Viene con un llavero, lo que permite colocarlo fácilmente en un bolsillo, cartera o compartimento de almacenamiento del vehículo sin ocupar mucho espacio, por lo que es adecuado para llevar y comprobar la presión de los neumáticos. Su carcasa de plástico ABS es impermeable, resistente al desgaste y cuenta con una textura antideslizante para un fácil agarre"
    ],
    reviews: [],
    rating: 4.8
  },

  { 
    id: 4, 
    name: "LAXASFIT Reloj Inteligente Q11 Cuadrado", 
    price: 1200, 
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
  name: "Inflador de Neumaticos 150PSI)",
  price: 2200, 
  image: "./images/inflador de neumaticos 1.avif",
  images: [
    "./images/inflador de neumaticos 1.avif",
    "./images/inflador de neumaticos 2.avif",
    "./images/inflador de neumaticos 3.avif",
    "./images/inflador de neumaticos 4.avif",
    "./images/inflador de neumaticos 5.avif",
    "./images/inflador de neumaticos 6.avif",
    
  ],
  category: "Accesorios Autos",
  description:
    "Compresor de aire portátil del inflador de neumáticos, bomba de aire pequeña de DC 12V para neumáticos de coche, bomba de neumáticos eléctrica de 150PSI",
     
    features: [
      " 【Inflación de neumáticos 2 veces más rápida y tamaño mini】: hasta 150 PSI, estos potentes compresores de aire inteligentes tienen un chip incorporado de alto rendimiento.Eleve la presión de los neumáticos de 28 a 35 PSI en solo 56 segundos o infle completamente los neumáticos del automóvil (0-36 PSI) en solo 5 minutos.Con solo 2,6 x 1,8 x 6,9 pulgadas y 0,8 LB, esta pequeña bomba de aire es compacta, cómoda de transportar y se guarda fácilmente en cualquier lugar de un vehículo.",
      "【Bomba de aire portátil de 12 V】: Con un cable de alimentación de 12 V CC de 10 pies, este inflador de neumáticos facilita el inflado de neumáticos delanteros y traseros.Se conecta directamente al encendedor de un automóvil, eliminando la necesidad de una batería separada.Puedes usarlo para inflar neumáticos, pelotas u otros objetos inflables: una excelente solución de emergencia en el camino.(※Nota: este modelo no contiene batería incorporada y debe conectarse al encendedor del automóvil).",
      "【4 modos y preajuste con un clic】: ofrece 4 modos de inflado preestablecidos (bicicletas, motocicletas, automóviles y pelotas), con un apagado automático cuando se alcanza el valor preestablecido.También puede configurar su propio valor de presión usando el botón 'R' para seleccionar la unidad de presión deseada y luego ajustarla con los botones '+' y '-' para cumplir con diversos requisitos de inflado.",
      "【Pantalla digital LCD y apagado automático】La gran pantalla LED muestra valores de presión en tiempo real y la presión preestablecida de solo un vistazo.La bomba del compresor de aire se apagará automáticamente cuando alcance la presión de los neumáticos deseada.No más inflado excesivo: es simple y seguro.Equipado con un chip mejorado de alta precisión, nuestro compresor de aire cuenta con una precisión mejorada de detección de presión de neumáticos a ±1 PSI.",
      "【Luz LED y boquilla multifuncional】 La bomba de aire también cuenta con una luz LED en la parte superior, lo que facilita su uso en la oscuridad. Ofrece 3 modos de iluminación (SOS, siempre brillante, estroboscópica). Las boquillas incluidas ayudan al compresor de aire a inflar automóviles, SUV, motocicletas, bicicletas y pelotas, etc. compactos o de tamaño mediano. Disfrute de una mejor experiencia de uso."
          ],
    reviews: [],
    rating: 4.8
  },

{ 
    id: 6, 
    name: "LaxasFit 2025 Reloj Inteligente K22 Redondo", 
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
    name: "Punta de Presentacion Laser S9 Tipo Lapiz", 
    price: 700, 
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
    price: 500, 
    image: "./images/cartera1.webp",
    images: [
      "./images/cartera1.webp",
      "./images/cartera2.png",
      "./images/Bolso Negro de Caballeros 1.avif",
      "./images/Bolso Negro de Caballeros 1.webp",
      "./images/Bolso Negro de Caballeros 2.webp",
      "./images/Bolso Negro de Caballeros 3.webp",

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
  name: "Linterna de Cabezal Frontal Recargable",
  price: 500,
  image: "./images/linternacabeza1.jpeg",
  images: [
    "./images/linternacabeza1.jpeg",
    "./images/linternacabeza2.jpeg",
    "./images/linternacabeza3.jpeg",
    "./images/linternacabeza4.jpeg",
    "./images/linternacabeza5.jpeg",
    "./images/linternacabeza6.jpeg",
  ],
  category: "Hierramientas",
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
  name: "Puntadores de presentador inalámbricos de 2,4G Negro-Gris 8018",
  price: 800,
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
  name: "Encloser Transparente Sata USB 3.0",
  price: 500,
  image: "./images/Encloser Transparente 1.avif"
  ,images: [
    "./images/Encloser Transparente 1.avif",
    "./images/Encloser Transparente 2.avif",
    "./images/Encloser Transparente 3.avif",
    "./images/Encloser Transparente 4.avif",
    "./images/Encloser Transparente 5.avif",
    "./images/Encloser Transparente 6.avif",
    "./images/Encloser Transparente 7.avif",
    "./images/Encloser Transparente 8.avif",

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
  name: `Encloser Negro Sata USB 3.0`
  ,price: 600,
  image: "./images/Encloser Negro 1.avif",
  images: [
    "./images/Encloser Negro 1.avif",
    "./images/Encloser Negro 2.avif",
    "./images/Encloser Negro 3.avif",
    "./images/Encloser Negro 4.avif",
    "./images/Encloser Negro 5.avif",
    "./images/Encloser Negro 6.avif"
    
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

{
  id: 16,
  name: "Echinacea GoldenSeal 1400Mg. 120Cap.",
  price: 650,
  image: "./images/Echinacea GoldenSeal 1400mg. 120Vcap 1.jpg",
  images: [
    "./images/Echinacea GoldenSeal 1400mg. 120Vcap 1.jpg",
    "./images/Echinacea GoldenSeal 1400mg. 120Vcap 2.jpg",
    "./images/Echinacea GoldenSeal 1400mg. 120Vcap 3.jpg",
    "./images/Echinacea GoldenSeal 1400mg. 120Vcap 4.jpg",
    "./images/Echinacea GoldenSeal 1400mg. 120Vcap 5.jpg",  
    "./images/Echinacea GoldenSeal 1400mg. 120Vcap 6.jpg",
    "./images/Echinacea GoldenSeal 1400mg. 120Vcap 7.jpg"
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      Suplemento herbal formulado con Echinacea y Goldenseal, dos plantas tradicionalmente utilizadas para apoyar el sistema inmunológico y ayudar al cuerpo en sus procesos naturales de limpieza interna.
      Esta combinación ha sido usada por generaciones en la herbolaria tradicional como apoyo al bienestar general.
    </p>

    <p>
      Cada porción aporta 1400 mg de extractos vegetales en cápsulas vegetarianas, libres de gluten y Non-GMO.
    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1 cápsula al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>Apoya el funcionamiento saludable del sistema inmunológico</li>
      <li>Contribuye a los procesos naturales de limpieza del organismo</li>
      <li>Tradicionalmente utilizado como apoyo para la purificación de la sangre</li>
      <li>Ayuda al bienestar general durante cambios de clima o temporadas exigentes</li>
      <li>Fórmula herbal natural para uso diario como complemento nutricional</li>
      <li>Ingredientes clave:</li>

      <li>Echinacea – Planta tradicionalmente utilizada para apoyar las defensas naturales del cuerpo.</li>
      <li>Goldenseal – Raíz herbal usada históricamente para apoyar procesos de limpieza interna y bienestar general.</li>

      <li>Cápsulas vegetales, libres de gluten y Non-GMO</li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
      Este producto es un suplemento dietético.
      No está destinado a diagnosticar, tratar, curar ni prevenir enfermedades.
      Consultar a un profesional de la salud si estás embarazada, amamantando o tomando medicamentos.
      Mantener fuera del alcance de los niños.
    </p>
  `,

  // Ya no es obligatorio usar features si los beneficios están en description,
  // pero lo dejo vacío por compatibilidad
  features: [],

  reviews: [],
  rating: 4.8
},

{
  id: 17,
  name: "Vitamina E-1000 IU 60Sgel.",
  price: 550,
  image: "./images/Vitamina E1000 60sgel 365 1.jpg", 
  images: [
    "./images/Vitamina E1000 60sgel 365 1.jpg",
    "./images/Vitamina E1000 60sgel 365 2.jpg",
    "./images/Vitamina E1000 60sgel 365 3.jpg",
    "./images/Vitamina E1000 60sgel 365 4.jpg",
    "./images/Vitamina E1000 60sgel 365 5.jpg",  
    "./images/Vitamina E1000 60sgel 365 6.jpg",
    "./images/Vitamina E1000 60sgel 365 7.jpg"
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      La Vitamina E 1000 IU es un suplemento de alta potencia que actúa como un potente antioxidante, ayudando a proteger las células del cuerpo contra el daño causado por los radicales libres. Es ampliamente utilizada para apoyar la salud de la piel, el sistema inmunológico y el bienestar cardiovascular.
Este suplemento es ideal para personas que buscan complementar su alimentación diaria con vitamina E de calidad, en una presentación práctica de cápsulas blandas fáciles de ingerir.

    </p>

    <p>
      Los beneficios antioxidantes ayudan al funcionamiento normal del organismo, sin sustituir tratamientos médicos.

      

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1 cápsula blanda al día, preferiblemente con alimentos, o según recomendación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>Ingrediente activo
      Vitamina E (d-alfa tocoferol) – Nutriente esencial con acción antioxidante que ayuda a proteger las células del cuerpo.ógico</li>
       </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
     	Suplemento dietético.
      No usar como sustituto de una dieta equilibrada.
      Consultar a un médico si está embarazada, en lactancia o tomando medicamentos.
      Mantener fuera del alcance de los niños.

    </p>
  `,

  // Ya no es obligatorio usar features si los beneficios están en description,
  // pero lo dejo vacío por compatibilidad
  features: [],

  reviews: [],
  rating: 4.8
},

{
  id: 18,
  name: "Garlic 6000mg. 200Sgel Fito Medic",
  price: 550,
  image: "./images/Garlic 6000mg. 200Sgel Fito Medic 6.jpg",
  images: [
    "./images/Garlic 6000mg. 200Sgel Fito Medic 6.jpg",
    "./images/Garlic 6000mg. 200Sgel Fito Medic 2.jpg",
    "./images/Garlic 6000mg. 200Sgel Fito Medic 3.jpg",
    "./images/Garlic 6000mg. 200Sgel Fito Medic 4.jpg",
    "./images/Garlic 6000mg. 200Sgel Fito Medic 7.jpg",
    "./images/Garlic 6000mg. 200Sgel Fito Medic 8.jpg",
    "./images/Garlic 6000mg. 200Sgel Fito Medic 9.jpg",
    "./images/Garlic 6000mg. 200Sgel Fito Medic 10.jpg"
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      Los Garlic Supplements de Fito Medic’s son cápsulas blandas de ajo sin olor formuladas para apoyar la salud cardiovascular, la circulación y el sistema inmunológico. El ajo es reconocido por sus propiedades naturales que pueden ayudar a mantener niveles saludables de colesterol y presión arterial, además de contribuir al bienestar general.
Este suplemento es ideal para adultos que buscan integrar los beneficios del ajo en su rutina diaria de manera cómoda y sin el inconveniente del olor fuerte.
 

    </p>

    <p>
      🧪 Ingrediente clave
•	Ajo (Garlic) en cápsulas blandas – Con propiedades tradicionales para la salud cardiovascular e inmunológica
•	Excipientes de calidad, softgels sin olor


    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1 cápsula al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya la salud del corazón y la circulación
✔️ Contribuye al mantenimiento de niveles saludables de colesterol
✔️ Favorece el sistema inmunológico
✔️ Ajo sin olor, fácil de consumir diariamente
✔️ Cápsulas blandas para mejor absorción

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
      	•	Suplemento dietético.
•	No exceder la dosis recomendada.
•	Consultar a un profesional de la salud si está embarazada, en lactancia o bajo medicación.
•	Mantener fuera del alcance de los niños.

    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
  id: 19,
  name: "Glucosamine Chondroitin MSM 180caps.",
  price: 850,
  image: "./images/Glucosamine Chondroitin MSM 1.jpg",
  images: [
    "./images/Glucosamine Chondroitin MSM 1.jpg",
    "./images/Glucosamine Chondroitin MSM 2.jpg",
    "./images/Glucosamine Chondroitin MSM 3.jpg",
    "./images/Glucosamine Chondroitin MSM 4.jpg",
    "./images/Glucosamine Chondroitin MSM 5.jpg",  
    "./images/Glucosamine Chondroitin MSM 6.jpg",
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      Suplemento combinado de Glucosamina Sulfato, Condroitina Sulfato y MSM (Metilsulfonilmetano), formulado para apoyar la salud de las articulaciones, cartílagos y tejidos conectivos. Esta mezcla avanzada ayuda a mantener la flexibilidad y movilidad articular, especialmente en personas activas o con necesidad de apoyo adicional en sus articulaciones como parte de un estilo de vida saludable.
La fórmula puede ser una opción nutritiva para quienes desean mantener su bienestar articular con componentes de alta calidad en una sola cápsula diaria. 

    </p>

    <p>
      ¿Qué contiene?
•	Glucosamina Sulfato – ayuda con la estructura y salud de cartílagos
•	Condroitina Sulfato – contribuye a la elasticidad y soporte articular
•	MSM (Metilsulfonilmetano) – favorece tejido conectivo saludable 

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1 cápsula antes de cada comida, o según indicación de un profesional de la salud. La dosis puede ajustarse bajo supervisión médica o nutricional.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>Apoya la salud de las articulaciones
•	✔️ Favorece la flexibilidad y movilidad natural
•	✔️ Contribuye al mantenimiento de cartílagos y tejidos conectivos
•	✔️ Mezcla combinada de ingredientes conocidos por su uso tradicional en bienestar articular
•	✔️ Fórmula conveniente para uso diario como parte de una vida saludable 
/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
      	Este producto es un suplemento dietético, no está diseñado para diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Amazon
        Consulta a tu médico si estás embarazada, amamantando, tomando medicamentos o tienes condiciones médicas preexistentes.
	      Mantener fuera del alcance de los niños.

    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
  id: 20,
  name: "B-Complex + Vitamina C 100Caps Nature Truth",
  price: 600,
  image: "./images/B-Complex + Vitamina C 100cap. Nature Truth 1.jpg",
  images: [
    "./images/B-Complex + Vitamina C 100cap. Nature Truth 1.jpg",
    "./images/B-Complex + Vitamina C 100cap. Nature Truth 2.jpg",
    "./images/B-Complex + Vitamina C 100cap. Nature Truth 3.jpg",
    "./images/B-Complex + Vitamina C 100cap. Nature Truth 4.jpg",
    "./images/B-Complex + Vitamina C 100cap. Nature Truth 5.jpg",  
    "./images/B-Complex + Vitamina C 100cap. Nature Truth 6.jpg",
    "./images/B-Complex + Vitamina C 100cap. Nature Truth 7.jpg"
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      Vitamin B Complex + Vitamin C es un suplemento formulado para apoyar la energía diaria, el sistema nervioso y el sistema inmunológico. Combina todas las vitaminas del complejo B con Vitamina C, nutrientes esenciales que ayudan al cuerpo a convertir los alimentos en energía y a proteger las células del estrés diario.
Ideal para personas con rutinas exigentes, cansancio frecuente o que desean reforzar su nutrición diaria de forma práctica.

    </p>

    <p>
      Ingredientes clave
•	Complejo de Vitaminas B (B1, B2, B3, B5, B6, B7, B9 y B12) – Apoyan energía, metabolismo y sistema nervioso.
•	Vitamina C – Potente antioxidante que contribuye a la función inmunológica y al bienestar general.


    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1 tableta al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
   🌟 Beneficios principales
✔️ Apoya la producción natural de energía
✔️ Contribuye al funcionamiento saludable del sistema nervioso
✔️ Ayuda a reducir la sensación de cansancio y fatiga
✔️ Apoya el sistema inmunológico
✔️ Contribuye al metabolismo de carbohidratos, proteínas y grasas
✔️ Fórmula vegana, Non-GMO y libre de gluten
       </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
      		Suplemento dietético.
No sustituye una dieta equilibrada.
Consultar con un profesional de la salud si está embarazada, en lactancia o bajo medicación.
Mantener fuera del alcance de los niños.


    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
  id: 21,
  name: "Chlorophyll Chewable 300Tab. Horbaach.",
  price: 650,
  image: "./images/Chlorophyll 300Tab Horbaach 1.jpg",
  images: [
    "./images/Chlorophyll 300Tab Horbaach 1.jpg",
    "./images/Chlorophyll 300Tab Horbaach 2.jpg",
    "./images/Chlorophyll 300Tab Horbaach 3.jpg",
    "./images/Chlorophyll 300Tab Horbaach 4.jpg",
    "./images/Chlorophyll 300Tab Horbaach 5.jpg",  
    "./images/Chlorophyll 300Tab Horbaach 6.jpg",
    "./images/Chlorophyll 300Tab Horbaach 7.jpg"
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      Las Chlorophyll Pills de Horbäach son un suplemento en tabletas masticables formulado con clorofila natural y sabor a menta, diseñado para apoyar la desintoxicación natural del cuerpo, ayudar a mantener un aliento fresco y contribuir al bienestar general.
Este suplemento es vegano, libre de gluten y Non-GMO, ideal para quienes buscan integrar los beneficios de la clorofila en su rutina diaria de forma práctica y agradable.

    </p>

    <p>
      🧪 Ingredientes clave
•	Clorofila – Pigmento vegetal con propiedades antioxidantes y de apoyo a la limpieza interna
•	Excipientes de calidad y sabor a menta natural
•	Tabletas veganas, libres de gluten y Non-GMO

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1–2 tabletas masticables al día, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Ayuda a neutralizar olores y mantener aliento fresco
✔️ Contribuye a la desintoxicación y limpieza interna natural
✔️ Apoya el bienestar general y la vitalidad
✔️ Tabletas masticables con sabor a menta para consumo fácil y agradable
✔️ Fórmula vegana, Non-GMO y libre de gluten

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
      	•	Suplemento dietético.
•	Mantener fuera del alcance de los niños.
•	Consultar a un profesional de la salud si está embarazada, en lactancia o bajo tratamiento médico.


    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 22,
  name: "Milk Thistle Extract 1000mg. 60caps. Nature's",
  price: 500,
  image: "./images/Milk Thistle 1000mg. 1.jpg",
  images: [
    "./images/Milk Thistle 1000mg. 1.jpg",
    "./images/Milk Thistle 1000mg. 2.jpg",
    "./images/Milk Thistle 1000mg. 3.jpg",
    "./images/Milk Thistle 1000mg. 4.jpg",
    "./images/Milk Thistle 1000mg. 5.jpg",  
    "./images/Milk Thistle 1000mg. 6.jpg",
    "./images/Milk Thistle 1000mg. 7.jpg",
    "./images/Milk Thistle 1000mg. 8.jpg",
    "./images/Milk Thistle 1000mg. 9.jpg"
    
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      El Milk Thistle Extract 1000 mg es un suplemento herbal diseñado para apoyar la salud del hígado, su desintoxicación natural y el bienestar general del organismo. Contiene Silymarin (del Cardo Mariano) y extracto de diente de león, ingredientes tradicionales utilizados para proteger y regenerar las células hepáticas.
Ideal para adultos que buscan mantener una función hepática saludable y promover la limpieza interna natural del cuerpo mediante un suplemento de calidad.

    </p>

    <p>
      🧪 Ingredientes clave
•	Milk Thistle (Silymarin / Cardo Mariano) – Apoya la protección y regeneración del hígado
•	Dandelion Extract (Diente de León) – Contribuye a la desintoxicación natural del cuerpo
•	Cápsula y excipientes de calidad, aptos para adultos

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1 cápsula al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya la salud y función del hígado
✔️ Contribuye a la desintoxicación y limpieza interna natural
✔️ Favorece la protección y regeneración de las células hepáticas
✔️ Contiene extractos herbales tradicionales como Cardo Mariano y Diente de León
✔️ Suplemento natural para bienestar general


/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
      	•	Suplemento dietético.
•	Mantener fuera del alcance de los niños.
•	Consultar a un profesional de la salud si está embarazada, en lactancia o bajo medicación.

    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 23,
  name: "Zinc 50mg. 60cap AMS",
  price: 650,
  image: "./images/Zinc 50mg. 60cap AMS 1.jpg",
  images: [
    "./images/Zinc 50mg. 60cap AMS 1.jpg",
    "./images/Zinc 50mg. 60cap AMS 2.jpg",
    "./images/Zinc 50mg. 60cap AMS 3.jpg",
    "./images/Zinc 50mg. 60cap AMS 4.jpg",
    "./images/Zinc 50mg. 60cap AMS 5.jpg",  
    "./images/Zinc 50mg. 60cap AMS 6.jpg",
        
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      El Zinc Quelado 50 mg es un suplemento mineral formulado para apoyar la función inmunológica, el bienestar general y la salud celular. Su forma quelada permite una alta absorción, asegurando que tu cuerpo pueda aprovechar al máximo este mineral esencial.
Ideal para hombres y mujeres adultos que buscan reforzar sus defensas, mejorar el metabolismo y mantener un estado saludable físico y mental, incluyendo apoyo a la piel, uñas y metabolismo energético.

    </p>

    <p>
      🧪 Ingredientes clave
  •	Zinc Quelado 50 mg – Mineral esencial que contribuye a la función inmunológica, síntesis proteica y metabolismo celular.
•	Excipientes de calidad, tabletas de fácil consumo.

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar 1 tableta al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya el funcionamiento normal del sistema inmunológico
✔️ Contribuye a la salud de la piel, uñas y cabello
✔️ Ayuda a mantener función cognitiva y bienestar emocional
✔️ Mineral quelado de alta absorción
✔️ Puede contribuir a la mejora del estado de ánimo y sueño saludable
✔️ Apto para adultos, hombres y mujeres


/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
      	•	Suplemento dietético.
•	No exceder la dosis recomendada.
•	Consultar con un profesional de la salud si está embarazada, en lactancia o tomando medicamentos.
•	Mantener fuera del alcance de los niños.

    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 24,
  name: "Hair Skin Nails 60cap.",
  price: 800,
  image: "./images/Hair Skin Nail 1.jpg",
  images: [
    "./images/Hair Skin Nail 1.jpg",
    "./images/Hair Skin Nail 2.jpg",
    "./images/Hair Skin Nail 3.jpg",
    "./images/Hair Skin Nail 4.jpg",
    "./images/Hair Skin Nail 5.jpg",  
    "./images/Hair Skin Nail 6.jpg",
    "./images/Hair Skin Nail 7.jpg",
    "./images/Hair Skin Nail 8.jpg"
        
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      Las Hair, Skin & Nails Gummies con Biotina son un suplemento en forma de gomitas sabor fruta, formulado para apoyar la salud del cabello, la piel y las uñas de manera práctica y agradable. Contienen biotina, una vitamina esencial que contribuye al mantenimiento normal del cabello y las uñas, ideal para quienes prefieren una alternativa a las cápsulas o tabletas.
Este suplemento es Non-GMO y libre de gluten, adecuado para hombres y mujeres que buscan complementar su rutina diaria de cuidado personal.

    </p>

    <p>
      🧪 Ingredientes clave
  •	Biotina (Vitamina B7) – Contribuye al metabolismo normal de nutrientes y al mantenimiento del cabello, la piel y las uñas.

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Consumir 2 gomitas al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya el crecimiento y fortalecimiento del cabello
✔️ Contribuye a mantener uñas más fuertes y saludables
✔️ Ayuda a conservar una piel de apariencia saludable
✔️ Fácil de consumir gracias a su presentación en gomitas
✔️ Sabor agradable, ideal para consumo diario

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
    •	Suplemento dietético.
•	No exceder la dosis recomendada.
•	Consultar con un profesional de la salud si está embarazada, en lactancia o tomando medicamentos.
•	Mantener fuera del alcance de los niños.
	

    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 25,
  name: "Calcium 1200mg. 120Sgel. Tahoe Nutritional",
  price: 800,
  image: "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 1.jpg",
  images: [
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 1.jpg",
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 2.jpg",
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 3.jpg",
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 4.jpg",
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 5.jpg",  
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 6.jpg",
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 7.jpg",
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 8.jpg",
    "./images/Calcium 1200mg. 120Sgel. Tahoe Nutritional 9.jpg"
        
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
      Suplemento nutricional formulado con Calcio 1200 mg junto con Vitamina D3, diseñado para apoyar la salud de los huesos y dientes, así como funciones esenciales del organismo relacionadas con el bienestar óseo y muscular. Esta combinación ayuda a mantener niveles adecuados de calcio y facilita su absorción y utilización en el cuerpo, como parte de una dieta equilibrada y un estilo de vida saludable. 
El producto se presenta en cápsulas blandas de fácil ingestión y está elaborado sin gluten, sin lactosa y sin organismos genéticamente modificados (non-GMO), ideal para complementar la rutina diaria de personas que desean reforzar su salud ósea de forma natural. 


    </p>

    <p>
      🧪 Ingredientes clave
  •	Calcio (1200 mg) – Mineral esencial para huesos y dientes
•	Vitamina D3 – Nutriente que ayuda a mejorar la absorción de calcio


    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
      Tomar según las indicaciones del envase o bajo supervisión de un profesional de la salud. Generalmente, se recomienda una dosis diaria con alimentos para una mejor absorción.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
•	✔️ Apoya la salud de los huesos y dientes
•	✔️ Ayuda a mantener niveles saludables de calcio en el organismo
•	✔️ Vitamina D3 favorece una mejor absorción de calcio
•	✔️ Contribuye al funcionamiento normal del sistema muscular
•	✔️ Fórmula sin gluten, sin lactosa y non-GMO para mayor tolerancia diaria 

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
    •	Este producto es un suplemento dietético y no está destinado a diagnosticar, tratar, curar ni prevenir enfermedades.
•	Consultar a un profesional de la salud si estás embarazada, amamantando, tomando medicamentos o tienes alguna condición médica preexistente.
•	Mantener fuera del alcance de los niños.

	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 26,
  name: "Raw Flora 50 Billon",
  price: 750,
  image: "./images/Raw Flora 50 Billon 1.jpg",
  images: [
    "./images/Raw Flora 50 Billon 1.jpg",
    "./images/Raw Flora 50 Billon 2.jpg",
    "./images/Raw Flora 50 Billon 3.jpg",
    "./images/Raw Flora 50 Billon 4.jpg",
    "./images/Raw Flora 50 Billon 5.jpg",  
    "./images/Raw Flora 50 Billon 6.jpg",
    "./images/Raw Flora 50 Billon 7.jpg",
    
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
     Raw Flora Probiotic con Prebióticos es un suplemento avanzado diseñado para apoyar la salud digestiva e intestinal mediante una potente fórmula de 50 mil millones de UFC (CFU) por porción. Combina probióticos (bacterias beneficiosas) con prebióticos, que ayudan a alimentar y mantener el equilibrio natural de la flora intestinal.
Ideal para hombres y mujeres que buscan mejorar la digestión, el bienestar intestinal y el soporte inmunológico como parte de su rutina diaria.

    </p>

    <p>
      🧪 Ingredientes clave
 •	Probióticos (50 Billion CFU) – Bacterias beneficiosas que apoyan la salud intestinal.
•	Prebióticos – Fibras que alimentan la flora intestinal y ayudan a mantener su equilibrio.



    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
     Tomar 1 cápsula al día, preferiblemente con alimentos, o según indicación de un profesional de la salud. 
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya el equilibrio de la flora intestinal
✔️ Contribuye a una digestión saludable
✔️ Ayuda a mantener el funcionamiento normal del sistema inmunológico
✔️ Favorece la absorción eficiente de nutrientes
✔️ Contiene probióticos + prebióticos para un soporte digestivo completo
✔️ Apto para vegetarianos y libre de gluten


/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
    •	Suplemento dietético.
•	No exceder la dosis recomendada.
•	Consultar con un profesional de la salud si está embarazada, en lactancia o tomando medicamentos.
•	Mantener fuera del alcance de los niños.

	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},


{
id: 27,
  name: "Acidosphilus Probiotics 200cap",
  price: 650,
  image: "./images/Acidosphilus Probiotics 200cap 1.jpg",
  images: [
    "./images/Acidosphilus Probiotics 200cap 1.jpg",
    "./images/Acidosphilus Probiotics 200cap 2.jpg",
    "./images/Acidosphilus Probiotics 200cap 3.jpg",
    "./images/Acidosphilus Probiotics 200cap 4.jpg",
    "./images/Acidosphilus Probiotics 200cap 5.jpg",  
    "./images/Acidosphilus Probiotics 200cap 6.jpg",
    "./images/Acidosphilus Probiotics 200cap 7.jpg",
    "./images/Acidosphilus Probiotics 200cap 8.jpg",
    
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
    Acidophilus Probiotic de Carlyle es un suplemento diseñado para apoyar la salud digestiva e intestinal mediante la incorporación de Lactobacillus acidophilus, un probiótico clave que ayuda a mantener un equilibrio saludable de la flora intestinal.
Con 500 millones de CFU por cápsula, este suplemento es ideal para hombres y mujeres que buscan mejorar la digestión, reforzar el bienestar intestinal y apoyar el sistema inmunológico de forma natural. Fórmula Non-GMO y libre de gluten, apta para uso diario.

    </p>

    <p>
      🧪 Ingredientes clave
•	Lactobacillus acidophilus (500 Million CFU por cápsula) – Bacteria beneficiosa que ayuda a mantener la salud intestinal
•	Cápsula y excipientes de calidad, libres de gluten y Non-GMO

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
     Tomar 1 cápsula al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya el equilibrio natural de la flora intestinal
✔️ Contribuye a una digestión saludable
✔️ Favorece la absorción de nutrientes
✔️ Ayuda a mantener el funcionamiento normal del sistema inmunológico
✔️ Apto para hombres y mujeres
✔️ Fórmula Non-GMO y libre de gluten

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
    •	Suplemento dietético.
•	No exceder la dosis recomendada.
•	Consultar con un profesional de la salud si está embarazada, en lactancia o tomando medicamentos.
•	Mantener fuera del alcance de los niños.
	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 28,
  name: "Multi Collagen 2000Mg. 180cap. Best Nature",
  price: 800,
  image: "./images/Collagen Pill 2000mg. 1.jpg",
  images: [
    "./images/Collagen Pill 2000mg. 1.jpg",
    "./images/Collagen Pill 2000mg. 2.jpg",
    "./images/Collagen Pill 2000mg. 3.jpg",
    "./images/Collagen Pill 2000mg. 4.jpg",
    "./images/Collagen Pill 2000mg. 5.jpg",  
    "./images/Collagen Pill 2000mg. 6.jpg",
    "./images/Collagen Pill 2000mg. 7.jpg",
        
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
    Acidophilus Probiotic de Carlyle es un suplemento diseñado para apoyar la salud digestiva e intestinal mediante la incorporación de Lactobacillus acidophilus, un probiótico clave que ayuda a mantener un equilibrio saludable de la flora intestinal.
Con 500 millones de CFU por cápsula, este suplemento es ideal para hombres y mujeres que buscan mejorar la digestión, reforzar el bienestar intestinal y apoyar el sistema inmunológico de forma natural. Fórmula Non-GMO y libre de gluten, apta para uso diario.

    </p>

    <p>
      🧪 Ingredientes clave
•	Lactobacillus acidophilus (500 Million CFU por cápsula) – Bacteria beneficiosa que ayuda a mantener la salud intestinal
•	Cápsula y excipientes de calidad, libres de gluten y Non-GMO

    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
     Tomar 1 cápsula al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya el equilibrio natural de la flora intestinal
✔️ Contribuye a una digestión saludable
✔️ Favorece la absorción de nutrientes
✔️ Ayuda a mantener el funcionamiento normal del sistema inmunológico
✔️ Apto para hombres y mujeres
✔️ Fórmula Non-GMO y libre de gluten

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
    •	Suplemento dietético.
•	No exceder la dosis recomendada.
•	Consultar con un profesional de la salud si está embarazada, en lactancia o tomando medicamentos.
•	Mantener fuera del alcance de los niños.
	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 29,
  name: "Echinacea 1300Mg. 100cap. Nature Truth's",
  price: 600,
  image: "./images/Echinacea 1300Mg 100cap 1.jpg",
  images: [
    "./images/Echinacea 1300Mg 100cap 1.jpg",
    "./images/Echinacea 1300Mg 100cap 2.jpg",
    "./images/Echinacea 1300Mg 100cap 3.jpg",
    "./images/Echinacea 1300Mg 100cap 4.jpg",
    "./images/Echinacea 1300Mg 100cap 5.jpg",  
    "./images/Echinacea 1300Mg 100cap 6.jpg",
    "./images/Echinacea 1300Mg 100cap 7.jpg",
        
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
   El Echinacea Extract de Nature's Truth es un suplemento herbal diseñado para apoyar el sistema inmunológico y contribuir al bienestar general. Cada cápsula contiene 1300 mg de extracto de Echinacea, una planta tradicionalmente utilizada para ayudar al cuerpo a mantener sus defensas naturales.
Esta fórmula es Non-GMO y libre de gluten, apta para uso diario en hombres y mujeres que buscan reforzar su salud de manera natural.

    </p>

    <p>
      🧪 Ingredientes clave
•	Echinacea purpurea (extracto) – Planta herbal utilizada históricamente para reforzar las defensas naturales del organismo.
•	Cápsula y excipientes de calidad, libres de gluten y Non-GMO.


    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
    Tomar 1 cápsula al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya el funcionamiento saludable del sistema inmunológico
✔️ Favorece el bienestar general del organismo
✔️ Contribuye a la resistencia natural frente a cambios ambientales
✔️ Fórmula tradicional a base de extracto de Echinacea
✔️ Non-GMO y libre de gluten

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
    •	Suplemento dietético.
•	Mantener fuera del alcance de los niños.
•	Consultar a un profesional de la salud si está embarazada, en lactancia o bajo medicación.

	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 30,
  name: "Folic Acid 400mcg",
  price: 450,
  image: "./images/Folic Acid 400mcg 1.jpg",
  images: [
    "./images/Folic Acid 400mcg 1.jpg",
    "./images/Folic Acid 400mcg 2.jpg",
    "./images/Folic Acid 400mcg 3.jpg",
    "./images/Folic Acid 400mcg 4.jpg",
    "./images/Folic Acid 400mcg 5.jpg",  
    "./images/Folic Acid 400mcg 6.jpg",
    
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
  El Folic Acid 400 mcg de Carlyle es un suplemento esencial de ácido fólico, diseñado para apoyar la salud celular, la producción de glóbulos rojos y la síntesis normal del ADN. Es especialmente recomendado para mujeres en edad fértil, así como para cualquier persona que busque reforzar su bienestar general y la salud metabólica.
Esta fórmula es vegetariana, Non-GMO y libre de gluten, ideal para consumo diario seguro y confiable.

    </p>

    <p>
      🧪 Ingredientes clave
•	Folic Acid 400 mcg – Vitamina B9 esencial para salud celular y producción sanguínea
•	Excipientes de calidad, tabletas vegetarianas


    </p>

    <p style="font-weight:600;">Modo de uso</p>
    <p>
    Tomar 1 tableta al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya la producción normal de glóbulos rojos
✔️ Contribuye a la síntesis normal de ADN y salud celular
✔️ Ayuda a mantener bienestar general y metabolismo saludable
✔️ Fórmula vegetariana, Non-GMO y libre de gluten
✔️ Suplemento diario seguro y práctico

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
   •	Suplemento dietético.
•	No exceder la dosis recomendada.
•	Consultar con un profesional de la salud si está embarazada, en lactancia o bajo medicación.
•	Mantener fuera del alcance de los niños.

	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 31,
  name: "Hydrocortisone Cream",
  price: 250,
  image: "./images/Hydrocortisone Cream 1.jpg",
  images: [
    "./images/Hydrocortisone Cream 1.jpg",
    "./images/Hydrocortisone Cream 2.jpg",
    "./images/Hydrocortisone Cream 3.jpg",
    "./images/Hydrocortisone Cream 4.jpg",
    "./images/Hydrocortisone Cream 5.jpg",  
    "./images/Hydrocortisone Cream 6.jpg",
    "./images/Hydrocortisone Cream 7.jpg",
    
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
  CareAll Hydrocortisone 1% es una crema tópica de máxima potencia sin receta médica diseñada para aliviar temporalmente la picazón, enrojecimiento e inflamación de la piel causados por diversas irritaciones comunes. Su fórmula con hidrocortisona al 1% ayuda a calmar la piel afectada y restaurar el confort cutáneo de manera rápida y efectiva.
Este producto es ideal para el uso diario en casos leves de irritación y viene en un paquete de 3 tubos de 1 onza, práctico para el hogar, viajes o botiquín personal.

    </p>

    <p>
      🧪 Ingredientes clave
•	Hidrocortisona 1% – corticosteroide tópico que ayuda a reducir inflamación, picazón y enrojecimiento de la piel.


    </p>

    <p style="font-weight:600;">Modo de uso</p>
   •	Aplicar una capa fina sobre el área afectada
•	Usar hasta 3–4 veces al día, según necesidad
•	Solo para uso externo
•	No usar por períodos prolongados sin indicación médica

    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
•	✔️ Alivia picazón e inflamación de la piel
•	✔️ Ayuda a reducir enrojecimiento y molestia
•	✔️ Efectivo contra irritaciones causadas por picaduras de insectos
•	✔️ Útil en casos leves de eczema, psoriasis y dermatitis
•	✔️ Ayuda a aliviar molestias por hiedra venenosa, roble y zumaque
•	✔️ Fórmula de máxima potencia (1%) sin receta médica


/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
  •	Este producto es un medicamento de uso tópico sin receta.
•	No usar en heridas abiertas, infecciones o piel severamente dañada.
•	Evitar el contacto con ojos, boca y mucosas.
•	Suspender el uso si la condición empeora o no mejora en 7 días.
•	Consultar a un médico antes de usar en niños menores de 2 años.
•	Mantener fuera del alcance de los niños.
•	Consultar a un profesional de la salud si estás embarazada, amamantando o tomando medicamentos.
•	Mantener fuera del alcance de los niños.


	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},


{
id: 32,
  name: "Iron Chelate 240cap. Nutricost",
  price: 800,
  image: "./images/Iron Chelate 240cap. Nuricost 1.jpg",
  images: [
    "./images/Iron Chelate 240cap. Nuricost 1.jpg",
    "./images/Iron Chelate 240cap. Nuricost 2.jpg",
    "./images/Iron Chelate 240cap. Nuricost 3.jpg",
    "./images/Iron Chelate 240cap. Nuricost 4.jpg",
    "./images/Iron Chelate 240cap. Nuricost 5.jpg",  
        
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
  El Hierro Quelado (Ferrochel®) es un suplemento esencial diseñado para apoyar la producción de glóbulos rojos y el transporte adecuado de oxígeno en el organismo. Su forma quelada permite una mejor absorción y mayor tolerancia, reduciendo molestias digestivas comunes asociadas al hierro tradicional.
Este suplemento es ideal para personas que buscan mantener niveles saludables de hierro como parte de una dieta equilibrada, ayudando a combatir la sensación de cansancio y apoyar la energía diaria de forma segura y eficaz.

    </p>

    <p>
      🧪 Ingredientes clave
•	Personas con bajo consumo de hierro en la dieta
•	Quienes buscan más energía y vitalidad
•	Apoyo nutricional diario bajo recomendación profesional



    </p>

    <p style="font-weight:600;">Modo de uso</p>
   •	Aplicar una capa fina sobre el área afectada
•	Usar hasta 3–4 veces al día, según necesidad
•	Solo para uso externo
•	No usar por períodos prolongados sin indicación médica

    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
•	Apoya la formación de glóbulos rojos
•	Contribuye al transporte de oxígeno en la sangre
•	Ayuda a mantener niveles saludables de energía
•	Favorece el funcionamiento del sistema inmunológico
•	Fórmula de alta absorción y buena tolerancia digestiva


/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
  
	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},


{
id: 33,
  name: "Men Multi 50+",
  price: 650,
  image: "./images/Men Multi 50+ 1.jpg",
  images: [
    "./images/Men Multi 50+ 1.jpg",
    "./images/Men Multi 50+ 2.jpg",
    "./images/Men Multi 50+ 3.jpg",
    "./images/Men Multi 50+ 4.jpg",
    "./images/Men Multi 50+ 5.jpg",  
    "./images/Men Multi 50+ 6.jpg", 
    "./images/Men Multi 50+ 7.jpg",
    "./images/Men Multi 50+ 8.jpg"

       
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
 El Multivitamínico para Hombres 50+ está especialmente formulado para cubrir las necesidades nutricionales de los hombres mayores de 50 años. Contiene una combinación balanceada de vitaminas del complejo B, Vitamina D, Magnesio y Zinc, nutrientes esenciales que apoyan la energía diaria, la salud ósea, muscular e inmunológica.
Este suplemento está diseñado para ayudar a mantener el bienestar general, apoyar el metabolismo y contribuir a un estilo de vida activo y saludable con el paso del tiempo.


    </p>

    <p>
      🧪 Ingredientes clave
•	Vitaminas del complejo B – Apoyan la producción de energía y el metabolismo.
•	Vitamina D – Contribuye a la absorción del calcio y a la salud ósea.
•	Magnesio – Apoya la función muscular y nerviosa.
•	Zinc – Contribuye al funcionamiento normal del sistema inmunológico y la salud general.

    </p>

    <p style="font-weight:600;">Modo de uso</p>
   Tomar 1 tableta al día, preferiblemente con alimentos, o según indicación de un profesional de la salud.

    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
✔️ Apoya la energía y vitalidad diaria
✔️ Contribuye al funcionamiento normal del sistema inmunológico
✔️ Ayuda a mantener huesos y músculos saludables
✔️ Apoya el metabolismo y la función celular
✔️ Fórmula adaptada a las necesidades del hombre 50+
✔️ Non-GMO y libre de gluten

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
  •	Suplemento dietético.
•	No sustituye una dieta equilibrada.
•	Consultar con un profesional de la salud si está embarazada, en lactancia o bajo tratamiento médico.
•	Mantener fuera del alcance de los niños.

	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{
id: 34,
  name: "Vitamina A 10,000",
  price: 450,
  image: "./images/Vitamina A 10,000 1.jpg",
  images: [
    "./images/Vitamina A 10,000 1.jpg",
    "./images/Vitamina A 10,000 2.jpg",
    "./images/Vitamina A 10,000 3.jpg",
    "./images/Vitamina A 10,000 4.jpg",
    "./images/Vitamina A 10,000 5.jpg",  
    "./images/Vitamina A 10,000 6.jpg",
    "./images/Vitamina A 10,000 7.jpg",
               
  ],
  category: "Suplementos",

  description: `
    <p style="font-size:18px; font-weight:600;">Detalles del producto</p>

    <p>
 Suplemento de Vitamina A en cápsulas blandas de alta potencia, diseñado para apoyar funciones esenciales del organismo como la salud de la piel, visión y sistema inmunológico. Cada cápsula proporciona una dosis eficaz de 10,000 UI (3,000 mcg) para complementar la alimentación diaria y mantener niveles adecuados de este nutriente importante para el bienestar general. 
Nature’s Truth es una marca conocida por su compromiso con productos de calidad, sin gluten y sin ingredientes artificiales, elaborados para integrarse fácilmente en tu rutina de bienestar. 

    </p>

    <p>
      🧪 Ingredientes clave
•	Vitamina A (Retinol o equivalente) – Nutriente esencial para funciones visuales, inmunitarias y mantenimiento de tejidos.

    </p>

    <p style="font-weight:600;">Modo de uso</p>
   Tomar 1 cápsula blanda al día o según indicación de un profesional de la salud. Ideal para complementar dietas que no aportan suficiente vitamina A.
    </p>

    <p style="font-weight:600;">Beneficios</p>
    <ul>
      <li>🌟 Beneficios principales
•	✔️ Apoya la visión saludable, especialmente en condiciones de poca luz
•	✔️ Favorece la salud de la piel y mucosas
•	✔️ Contribuye al sistema inmunológico
•	✔️ Su forma en cápsulas blandas facilita su absorción
•	✔️ Producto libre de gluten, trigo y colorantes artificiales 

/li>
    </ul>

    <p style="font-weight:600;">Advertencias</p>
    <p>
  •	Este producto es un suplemento dietético, no está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad.
•	Consulta a un médico si estás embarazada, amamantando, bajo medicación o tienes alguna condición médica.
•	Mantener fuera del alcance de los niños. 


	    </p>
  `,

    features: [],

  reviews: [],
  rating: 4.8
},

{ 
    id: 35, 
    name: "Scanner Automotriz V519 Multilenguaje OBD2 Rojo", 
    price: 1200, 
    image: "./images/Escaner Automotriz V519 0.avif",  
    images: [
      "./images/Escaner Automotriz V519 0.avif",
      "./images/Escaner Automotriz V519 1.avif",
      "./images/Escaner Automotriz V519 2.avif",
      "./images/Escaner Automotriz V519 3.avif",
      "./images/Escaner Automotriz V519 4.avif",
      "./images/Escaner Automotriz V519 5.avif",
      "./images/Escaner Automotriz V519 5.webp",
      "./images/Escaner Automotriz V519 7.webp", 
      "/images/Escaner Automotriz V519 8.webp",

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
    id: 36, 
    name: "Scanner Automotriz V519 Multilenguaje OBD2 Azul", 
    price: 1200,
    image: "./images/Escaner Automotriz V519 Azul.avif", 
    images: [
      "./images/Escaner Automotriz V519 Azul.avif",
      "./images/Escaner Automotriz V519 1.avif",
      "./images/Escaner Automotriz V519 2.avif",
      "./images/Escaner Automotriz V519 3.avif",
      "./images/Escaner Automotriz V519 4.avif",
      "./images/Escaner Automotriz V519 5.webp",
      "./images/Escaner Automotriz V519 5.avif",
      "./images/Escaner Automotriz V519 7.webp",
      "/images/Escaner Automotriz V519 8.webp",
      
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
    rating: 5
  },
{
id: 37, 
    name: "Cubo de Sensor de Oxigeno Negro 7/8 22mm", 
    price: 800,
    image: "./images/Cubo Sensor Oxigeno 1.jpg", 
    images: [
      "./images/Cubo Sensor Oxigeno 1.jpg",
      "./images/Cubo Sensor Oxigeno 2.jpg",
      "./images/Cubo Sensor Oxigeno 3.jpg",
      "./images/Cubo Sensor Oxigeno 4.jpg",
      "./images/Cubo Sensor Oxigeno 5.jpg",
      "./images/Cubo Sensor Oxigeno 6.jpg",
      "./images/Cubo Sensor Oxigeno 7.jpg",
            
    ],
    category: "Hierramientas",
    description: "Toma de sensor de oxígeno, herramienta de extracción de sensor O2 de 7/8 pulgadas (0.866 in) con corte de cable lateral, llave de 6 puntos de accionamiento de 1/2 pulgada para una fácil instalación",
    features: [
      "1. Diseño de alcance extendido: enchufe de 3.583 in de largo cuenta con un cuerpo extralargo de 3.583 in para alcanzar fácilmente ubicaciones de sensores de oxígeno empotrados o difíciles en compartimentos estrechos del motor.",
      "2. Ajuste de precisión para sensores O2 estándar Diseñado para adaptarse a la mayoría de sensores de oxígeno de 7/8 pulgadas (0.866 in), compatible con una amplia gama de vehículos, incluyendo automóviles, SUV y camiones ligeros.",
      "3. Recorte de cable lateral para un acceso sin daños, la apertura lateral integrada permite un acceso seguro alrededor del cable del sensor, evitando daños durante la extracción o el reemplazo.",
      "4. Accionamiento duradero de 1/2 pulgada, agarre de 6 puntos diseñado para su uso con un trinquete o llave estándar de 1/2 pulgada, ofreciendo un agarre firme y un par máximo sin redondear los bordes.",
      "5. Acero al cromo vanadio resistente Hecho de acero Cr-V de alta resistencia para un rendimiento duradero en talleres o aplicaciones automotrices de bricolaje."
    ],
    reviews: [],
    rating: 5
  },

{
id: 38, 
    name: "Linterna de Cabezal Frontal Recargable 3 Lineas", 
    price: 600,
    image: "./images/Luces Led de Cabeza Frontal 3 Lineas 1.avif", 
    images: [
      "./images/Luces Led de Cabeza Frontal 3 Lineas 1.avif",
      "./images/Luces Led de Cabeza Frontal 3 Lineas 2.avif",
      "./images/Luces Led de Cabeza Frontal 3 Lineas 3.avif",
      "./images/Luces Led de Cabeza Frontal 3 Lineas 4.avif",
      "./images/Luces Led de Cabeza Frontal 3 Lineas 5.avif",
      "./images/Luces Led de Cabeza Frontal 3 Lineas 8.avif",
            
    ],
    category: "Hierramientas",
    description: "Cargador de Coche 2-6 Puertos, Carga Rapida (Iphone, Samsung,Xiaomi",
    features: [
        "SÚPER BRILLANTE y 230° HAYA COB ANCHA: Linterna frontal LED con haz ancho COB súper brillante de 4,7 pulgadas, el nuevo 230° El faro de haz amplio le permite iluminar el área de visión sin mover la cabeza, un brillo de 450 lúmenes y una salida de distancia de 350 pies.Ideal para entusiastas del aire libre como equipo de camping.Ya sea que esté acampando, explorando, haciendo senderismo, montando en bicicleta, pescando, escalando, reparando y otras actividades al aire libre o en interiores, nuestros faros son sus excelentes asistentes.",
"Diadema ligera y ajustable: la diadema LED está hecha de ABS suave y silicona, y pesa solo 3,5 onzas.La diadema elástica ajustable es plegable sin afectar su uso, y su diseño liviano y compacto hace que sea fácil de guardar en el bolsillo.Adecuado para adultos o niños, el faro recargable se puede utilizar para actividades en interiores y exteriores sin presión, especialmente para reparaciones de automóviles, trabajos de bricolaje o situaciones de emergencia.",
"Faro con control de sensor de movimiento manos libres: la linterna frontal LED está equipada con una función avanzada de sensor de movimiento de gestos, lo que le permite controlar el interruptor de la lámpara frontal con un simple movimiento de la mano dentro de un rango de detección de 5 pulgadas.Cuando enciendes el faro, puedes presionar el botón del sensor para activar el modo del sensor (indicado por el LED que cambia de rojo a verde).En el modo sensor, también puede ajustar el modo de iluminación mediante el interruptor de encendido.",
"IPX4 resistente al agua y múltiples opciones de carga: el faro está diseñado con clasificación de impermeabilidad IPX4. Se puede utilizar normalmente en climas tormentosos. Admite múltiples opciones de carga a través de un versátil sistema de carga USB, incluida la carga tipo C, que permite una carga rápida con alta corriente y es segura y práctica. Es un equipo de camping ideal para los entusiastas del aire libre."
    ],
reviews: [],
    rating: 5
  },

{
id: 39, 
    name: "Sombrero de Sol", 
    price: 500,
    image: "./images/Sombrero de sol 0.jpg", 
    images: [
      "./images/Sombrero de Sol Gris 1.Avif",
      "./images/Sombrero de Sol Negro.jpg",
      "./images/Sombrero de Sol Gris 2.Avif",
      "./images/Sombrero de Sol Gris 3.Avif",
      "./images/Sombrero de Sol Gris 4.Avif",
      "./images/Sombrero de Sol Gris 5.Avif",
      "./images/Sombrero de Sol Gris 6.Avif",
      "./images/Sombrero de Sol Gris 7.Avif",
            
    ],
    category: "ropa",
    description: "Sombrero unisex de ala ancha - Sombrero de pesca y senderismo transpirable con correa ajustable, protección solar ligera para exteriores para hombres y mujeres, diseño elegante negro para pesca, montañismo y uso casual, sombrero de pesca, equipo de montañismo, accesorio de cabeza elegante, ropa de cabeza duradera",
    features: [
       
    ],
reviews: [],
    rating: 5
  },

{
id: 40, 
    name: "Bolso Marron y Negro de Cuerro", 
    price: 700,
    image: "./images/Bolso Negro y Marron Cuero.jpg", 
    images: [
      "./images/Bolso Marron de Cuero para caballeros 1.avif",
      "./images/Bolso Negro Cuero Caballeros.avif",
      "./images/Bolso Marron de Cuero para caballeros 2.webp",
      "./images/Bolso Marron de Cuero para caballeros 3.avif",
                  
    ],
    category: "ropa",
    description: "Bolso bandolera para hombre disponible en varios colores, con muchos bolsillos y gran capacidad, ideal para actividades al aire libre, viajes, compras y más. Un bolso de hombro elegante para hombre.",
    features: [
      "Estilo: Casual",
      "Instrucciones de cuidado: No lavable",
      "Detalles: Multi-compartimento",
      "Modo de alimentación: Sin carga de batería",
      "Tipo de impresión: Sin estampado"
    ],
reviews: [],
    rating: 5
  },

{
id: 40, 
    name: "Bolso Negro Ejecutivo de Cuero", 
    price: 700,
    image: "./images/Bolso Negro Cuero Ejecutivo 1.avif", 
    images: [
      "./images/Bolso Negro Cuero Ejecutivo 1.avif",
                        
    ],
    category: "ropa",
    description: "Bolsos de hombro tipo bandolera para hombre, bolsos Vintage impermeables para hombre, bolso de cuero PU de gran capacidad, bolsos de mensajero para hombre, bolso de mano",
    features: [
      "100% nuevo y de alta calidad",
      "Material: PU",
      "Paquete incluido: 1 ud.",
      "Conversión: 1 pulgada = 2,54 cm, 1 cm = 0,393 pulgadas"
    ],
reviews: [],
    rating: 5
  },


{
id: 41, 
    name: "Bolso Tela Negro Franja Verde y Gris", 
    price: 600,
    image: "./images/Bolso Caballero Negro con Gris Verde.jpg", 
    images: [
      "./images/Bolso Caballero Negro con Gris 1.avif",
      "./images/Bolso Caballero Negro con Gris 2.avif",
      "./images/Bolso Caballero Negro con Gris 3.avif",
      "./images/Bolso Caballero Negro con Verde 1.avif",
      "./images/Bolso Caballero Negro con Verde 2.avif",
      "./images/Bolso Caballero Negro con Verde 3.avif",
      "./images/Bolso Caballero Negro con Verde 4.avif"
                  
    ],
    category: "ropa",
    description: "Mini Bolso Color Gris y Verde",
    features: [
      "Nuevo 2025: Mini bolso cruzado para hombre de tela Oxford, estilo minimalista y casual, bolso de un solo hombro, compacto y práctico, con espacio para el teléfono móvil, bolso pequeño para hombre ideal para uso diario y casual."
    ],
reviews: [],
    rating: 5
  },

{
id: 42, 
    name: "Presentacion Puntero Laser Inalambrico MRVI", 
    price: 700,
    image: "./images/Presentacion Puntero MRVI 1.avif", 
    images: [
      "./images/Presentacion Puntero MRVI 1.avif",
      "./images/Presentacion Puntero MRVI 2.avif",
      "./images/Presentacion Puntero MRVI 3.avif",
      "./images/Presentacion Puntero MRVI 4.avif",
      "./images/Presentacion Puntero MRVI 5.avif",
      "./images/Presentacion Puntero MRVI 6.avif",
      "./images/Presentacion Puntero MRVI 7.avif"
                  
    ],
    category: "electronica",
    description: "Presentación Powerpoint USB inalámbrica de 2,4 Ghz Y400 Ppt Flip Pen puntero Clicker presentador luz roja Control remoto para Powerpoint",
    features: [
      "Características:",
      "*Material de alta calidad: este presentador está hecho de material de alta calidad, que es resistente al desgaste, no es fácil de romper, se puede usar durante mucho tiempo y es duradero.",
      "*Operación con un solo botón: un botón y una función, puede operar el clicker inalámbrico para presentaciones durante la presentación sin mirar hacia abajo y controlar fácilmente el espectáculo deslizante.",
      "*Portátil: el presentador es pequeño y compacto, liviano y fácil de transportar, es fácil de guardar en cualquier bolsillo o maletín.",
      "*Amplia aplicación: adecuado para computadoras de escritorio, portátiles, etc.",
      "*Multifuncional: el presentador inalámbrico tiene una variedad de funciones: indicación de láser rojo, control de volumen, avance y retroceso de página, cambio de ventana, hiperlinks y pantalla completa/negra.",
      "Material: plástico",
      "Tamaño: 12*6*3cm",
      "Modo de alimentación: batería AAA*2 (no incluida) "
    ],
    reviews: [],
    rating: 5
  },

{
id: 43, 
    name: "Mini Sopladora Portatil de Aire 130,000RPM", 
    price: 2200,
    image: "./images/Sopladora de Aire 5.avif", 
    images: [
      "./images/Sopladora de Aire 1.webp",
      "./images/Sopladora de Aire 2.webp",
      "./images/Sopladora de Aire 3.avif",
      "./images/Sopladora de Aire 4.webp",
      "./images/Sopladora de Aire 5.avif",
      "./images/Sopladora de Aire 6.avif",
      "./images/Sopladora de Aire 7.avif",
      "./images/Sopladora de Aire 8.webp",
      "./images/Sopladora de Aire 8.avif",
      "./images/Sopladora de Aire 9.avif",
      "./images/Sopladora de Aire 10.avif"

    ],
    category: "Hierramientas",
    description: "Mini ventilador de 130000RPM, plumero de aire eléctrico, velocidad del viento ajustable, ventilador portátil, soplador violento, limpieza de coche recargable",
    features: [
      "Especificaciones",
      "Velocidad sin carga: 130.000 rpm",
      "Velocidad del viento: 52 metros/segundo",
      "Voltaje de funcionamiento: 5,5 V-9 V",
      "Tiempo de carga: >2,5 h",
      "Voltaje de carga: DC5v 1A",
      "Potencia máxima: 100W",
      "Número de alas :13",
      "Protección contra altas temperaturas: 150℃",
      "2 baterías integradas: 18650 4000MAh",
      "Características",
      "Potencia potente y rendimiento eficiente",

"2 baterías integradas de alto rendimiento, gran capacidad de 8000 mAh, el nivel 1 se puede usar durante 4 horas, duraderas, equipadas con cable de datos USB, carga conveniente.",
"La velocidad máxima es de aproximadamente 130.000 RPM, la velocidad máxima del viento es de más de 52 m/s y el gran rendimiento es adecuado para diversos escenarios de eliminación de polvo.", 
"Utilizando tecnología de control numérico de mecanizado de precisión de gran tamaño, funcionamiento silencioso, proporciona un fuerte flujo de aire al mismo tiempo y disfruta de una brisa fresca sin ruido.",
"Operación conveniente y uso flexible",
"Con la función de regulación de velocidad continua, la velocidad se puede ajustar fácilmente y se pueden seleccionar los tres niveles de lentamente para satisfacer diferentes necesidades y personalizar la velocidad de soplado requerida.",
"Compacto, fácil de transportar, adecuado para uso en exteriores, en cualquier momento y en cualquier lugar para disfrutar del fuerte viento.",
"Seguridad y uso confiable",
"Equipado con un controlador de velocidad electrónico de 30 A para gestionar eficazmente el calor y ofrecer una potencia máxima de 100 W, segura y confiable, experimente un rendimiento potente y eficiente sin sacrificar la seguridad y la comodidad.",
    ],

reviews: [],
    rating: 5
  },

{
id: 44, 
    name: "Lampara Leds 3 Tono con Sensor", 
    price: 600,
    image: "./images/Luces Led Para Vitrinas.avif", 
    images: [
      "./images/Luces Led Para Vitrinas.avif",
      "./images/Luces Led Para Vitrinas 2.avif",
      "./images/Luces Led Para Vitrinas 3.avif",
      "./images/Luces Led Para Vitrinas 4.avif",
      "./images/Luces Led Para Vitrinas 5.avif",
      "./images/Luces Led Para Vitrinas 6.jpg",
      "./images/Luces Led Para Vitrinas 7.jpg",
      "./images/Luces Led Para Vitrinas 8.jpg",
    ],
    category: "Hogar",
    description: "Luces LED con Sensor de Movimiento para Gabinetes, Recargables por USB, 3 Modos Ajustables, Luz Nocturna Inalámbrica para Dormitorio, Escaleras, Cocina, Oficinas Inteligentes, Sala de Piano y Estudio de Baile, Luces de Lectura para Mesita de Noche, Luces para Gabinetes, Iluminación de Cocina",
    features: [
      "Tipo de fijación: Desmontable",
      "Tipo de montaje: Candelabro de pared, Imán",
      "Material de la pantalla: Plástico",
      "Terminado del metal: Matte",
      "Accesorios incluidos: Componentes múltiples",
      "Fuente de alimentación: Carga por USB",
      "Características de la batería: Batería recargable",
      "Pila recargable: Batería de litio integrada",
      "Marca: GTQPS",
      "Capacidad de la batería (mAh): 400MAh"
    ],
    reviews: [],
    rating: 5
  },

{
id: 45, 
    name: "Shampoo Tinte Negro 3 en 1", 
    price: 1200,
    image: "./images/Shampoo Tinte Negro 3-1 Extracto Ginseng Ajonjoli 1.avif", 
    images: [
      "./images/Shampoo Tinte Negro 3-1 Extracto Ginseng Ajonjoli 1.avif",
      "./images/Shampoo Tinte Negro 3-1 Extracto Ginseng Ajonjoli 2.avif",
      "./images/Shampoo Tinte Negro 3-1 Extracto Ginseng Ajonjoli 3.avif",
      "./images/Shampoo Tinte Negro 3-1 Extracto Ginseng Ajonjoli 4.avif",
      "./images/Shampoo Tinte Negro 3-1 Extracto Ginseng Ajonjoli 5.avif",
      "./images/Shampoo Tinte Negro 3-1 Extracto Ginseng Ajonjoli 6.avif",
      
    ],
    category: "Cosmeticos",
    description: "3 en 1 Tintado instantáneo shampo cambia el color del cabello gris a negro natural para hombres y mujeres tinte profundo nutritivo.",
    features: [
      "Funciones:",
"1. Ayudar a mejorar el entorno del cuero cabelludo, despertar los folículos pilosos, complementar la nutrición y hacer que el cabello sea negro.",
"2. Hecho con ingredientes herbales seguros y suaves, sin irritación de la piel.",
"3. Sacuda este producto bien antes de usarlo. Aplica en la zona afectada y masajea durante un minuto.",
"4. Anticaspa, mejora el picor del cuero cabelludo, hidrata y repara el cabello dañado.",

"FÁCIL DE USAR:",
"No requiere bol ni cepillo, solo hay que ponerse guantes y usarlo igual que el champú normal, esperar solo 15-20 minutos. No mancha tu piel.",
"Lista de equipaje: tinte para el pelo."
    ],
reviews: [],
    rating: 5
  },

{
id: 46, 
    name: "Bolso Negro Cruzado Tela Oxford", 
    price: 600,
    image: "./images/Bolso Cruzado negro 1.avif", 
    images: [
      "./images/Bolso Cruzado negro 1.avif",
      "./images/Bolso Cruzado negro 2.avif",
      "./images/Bolso Cruzado negro 3.avif",
           
      
    ],
    category: "ropa",
    description: "Mini Bolso Color Gris y Verde",
    features: [
      "Nuevo 2025: Mini bolso cruzado para hombre de tela Oxford, estilo minimalista y casual, bolso de un solo hombro, compacto y práctico, con espacio para el teléfono móvil, bolso pequeño para hombre ideal para uso diario y casual."
    ],
reviews: [],
    rating: 5
  },


{
id: 47, 
    name: "Protector de Cinturo Chevrolet Z71", 
    price: 900,
    image: "./images/Protector de Cinturon Z71 7.avif", 
    images: [
      "./images/Protector de Cinturon Z71 1.avif",
      "./images/Protector de Cinturon Z71 2.avif",
      "./images/Protector de Cinturon Z71 3.avif",
      "./images/Protector de Cinturon Z71 4.avif",  
      "./images/Protector de Cinturon Z71 5.avif",  
      "./images/Protector de Cinturon Z71 6.avif",
      "./images/Protector de Cinturon Z71 7.avif"

    ],
    category: "Accesorios Autos",
    description: "Protector Cinturon para Modelos Chevrolet Colorado, Silverado Z71",
    features: [
      
    ],
reviews: [],
    rating: 5
  },

{
id: 48, 
    name: "Cubo de Sensor de Oxigeno Niquelado 22mm. 7/8", 
    price: 1000,
    image: "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 1.jpg", 
    images: [
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 1.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 2.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 3.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 4.jpg",  
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 5.jpg",  
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 6.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 7.jpg"

    ],
    category: "Hierramientas",
    description: "Eliminación de sensores de osígeno: Diseñada con un enchufe hexagonal de 22 mm (7/8 in), la toma de sensor de oxígeno es ideal para retirar e instalar sensores de oxígeno en coches, SUVs, camiones ligeros y vehículos diésel. Garantiza un ajuste seguro y preciso para los sensores de oxígeno estándar.",
    features: [
                  "Compatibilidad de herramientas de 3/8 de pulgada: La herramienta de extracción de sensores de O2 presenta un diseño de empuñadura de 6 puntos y es compatible con trinquetes de accionamiento de 3/8 de pulgada, llaves dinamométricas y barras de extensión. Esto permite una retirada eficiente y sin esfuerzo de los sensores, minimizando el riesgo de desmontar tuercas y asegurando un ajuste perfecto.",
                  "Diseño: El ancho del corte del alambre es de 0,40 pulgadas, la longitud del corte es de 2,4 pulgadas, con un agujero cuadrado de 3/8 de pulgada y una longitud total de 3,15 pulgadas (80 mm). El recorte lateral permite que los cables del sensor pasen libremente, evitando daños en el cable durante la retirada e instalación, asegurando un proceso de reparación más seguro y eficiente.",
                  "Uso versátil: La herramienta de eliminación de sensores de O2 es compatible con la mayoría de los sensores estándar de oxígeno de 22 mm (7/8 in), lo que la convierte en imprescindible para reparaciones de automóviles y mantenimiento del sistema de escape. Permite una instalación rápida, incluso en espacios reducidos. Nota: Por favor, verifica la talla antes de la compra para asegurar la compatibilidad con el sensor de oxígeno de tu vehículo.",
                  "Alta durabilidad: Fabricado con acero de alta calidad con cromo vanadio (CR-V), el zócalo sensor de oxígeno ofrece una resistencia, durabilidad y resistencia a la corrosión excepcionales. Construido para soportar aplicaciones de alto par, no se deformará ni se romperá bajo presión.",

    ],
reviews: [],
    rating: 5
  },

{
id: 49, 
    name: "Cubo de Sensor de Oxigeno Niquelado 22mm. 1/2", 
    price: 1000,
    image: "./images/cubo sensor oxigeno 22mm 1-2 Niquelado 1.jpg", 
    images: [
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 1.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 2.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 3.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 4.jpg",  
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 5.jpg",  
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 6.jpg",
      "./images/cubo sensor oxigeno 22mm 7-8 Niquelado 7.jpg"

    ],
    category: "Hierramientas",
    description: "Eliminación de sensores de osígeno: Diseñada con un enchufe hexagonal de 22 mm (7/8 in), la toma de sensor de oxígeno es ideal para retirar e instalar sensores de oxígeno en coches, SUVs, camiones ligeros y vehículos diésel. Garantiza un ajuste seguro y preciso para los sensores de oxígeno estándar.",
    features: [
                  "Compatibilidad de herramientas de 3/8 de pulgada: La herramienta de extracción de sensores de O2 presenta un diseño de empuñadura de 6 puntos y es compatible con trinquetes de accionamiento de 3/8 de pulgada, llaves dinamométricas y barras de extensión. Esto permite una retirada eficiente y sin esfuerzo de los sensores, minimizando el riesgo de desmontar tuercas y asegurando un ajuste perfecto.",
                  "Diseño: El ancho del corte del alambre es de 0,40 pulgadas, la longitud del corte es de 2,4 pulgadas, con un agujero cuadrado de 3/8 de pulgada y una longitud total de 3,15 pulgadas (80 mm). El recorte lateral permite que los cables del sensor pasen libremente, evitando daños en el cable durante la retirada e instalación, asegurando un proceso de reparación más seguro y eficiente.",
                  "Uso versátil: La herramienta de eliminación de sensores de O2 es compatible con la mayoría de los sensores estándar de oxígeno de 22 mm (7/8 in), lo que la convierte en imprescindible para reparaciones de automóviles y mantenimiento del sistema de escape. Permite una instalación rápida, incluso en espacios reducidos. Nota: Por favor, verifica la talla antes de la compra para asegurar la compatibilidad con el sensor de oxígeno de tu vehículo.",
                  "Alta durabilidad: Fabricado con acero de alta calidad con cromo vanadio (CR-V), el zócalo sensor de oxígeno ofrece una resistencia, durabilidad y resistencia a la corrosión excepcionales. Construido para soportar aplicaciones de alto par, no se deformará ni se romperá bajo presión.",

    ],
reviews: [],
    rating: 5
  },


{
id: 50, 
    name: "Cubo de Sensor de Oxigeno Negro Corto 22mm. 7/8", 
    price: 1000,
    image: "./images/cubo sensor oxigeno 22mm negro 7-8 corto.jpg", 
    images: [
      "./images/cubo sensor oxigeno 22mm negro 7-8 corto 1.jpg",
      "./images/cubo sensor oxigeno 22mm negro 7-8 corto 2.jpg",
      "./images/cubo sensor oxigeno 22mm negro 7-8 corto 3.jpg",
      "./images/cubo sensor oxigeno 22mm negro 7-8 corto 4.jpg",  
      "./images/cubo sensor oxigeno 22mm negro 7-8 corto 5.jpg",  
      "./images/cubo sensor oxigeno 22mm negro 7-8 corto 6.jpg",
      

    ],
    category: "Hierramientas",
    description: "Construcción duradera de acero aleado  Fabricado en acero aleado 50BV30 de alta resistencia con un proceso forjado en frío, este conector sensor de oído ofrece una tenacidad superior y alta resistencia a la deformación, garantizando un rendimiento duradero sin romperse",
    features: [
      "Diseño optimizado para eficiencia  Cuenta con un diseño hexagonal para reducir el deslizamiento y maximizar el agarre, una estructura compacta desplazada para mejor palanca en espacios reducidos y un canal de alambre para proteger los arneses de cables durante la retirada de sensores",
      "Ajuste preciso para sensores de oxígeno Con un accionamiento de 3/8 y un tamaño de 7/8 (22 mm) este portaobjetos se adapta a la mayoría de los sensores de oxígeno y garantiza una retirada e instalación precisos y sin daños",
      "Fácil de usar con carracas estándar  Diseñada para un funcionamiento rápido y sencillo, esta herramienta para eliminar sensores de O2 funciona con cualquier carraca o barra diferencial estándar de 3/8, ahorrando tiempo y esfuerzo durante las reparaciones",
      "Herramienta Versátil para Automoción  No solo es ideal para eliminar sensores de O2 y NOX, sino también adecuada para otras tareas de reparación y mantenimiento automovilístico, lo que la convierte en una herramienta imprescindible para profesionales y entusiastas del bricolaje"
    ],
reviews: [],
    rating: 5
  },

{
id: 51, 
    name: "Estuche para Lentes en diferentes Colores", 
    price: 350,
    image: "./images/Estuche de Lentes 1.jpg", 
    images: [
      "./images/Estuche de Lentes 1.jpg",
      "./images/Estuche de Lentes 2.jpg",
      "./images/Estuche de Lentes 3.jpg",
      "./images/Estuche de Lentes 4.jpg",  
      "./images/Estuche de Lentes 5.jpg",  
      "./images/Estuche de Lentes 6.jpg",
      "./images/Estuche de Lentes 7.jpg",
      

    ],
    category: "Hierramientas",
    description: "Estuche rígido para gafas de sol y gafas de lectura, disponible en varios colores.",
    features: [
      "PROTECCIÓN DE POZO: hecho de esqueleto de acero inoxidable, el diseño de carcasa dura protege los vidrios de aplastarse y es cómodo de transportar.",
      "MANTIENE LAS GAFAS LIMPIAS: Debido a un forro tipo terciopelo, el forro suave también es ideal para proteger las lentes de la suciedad y los residuos, manteniéndolas limpias. Evita que tus gafas favoritas se arañen.",
      "TAMAÑO ADECUADO: el tamaño es de unos 16 x 6 x 4 cm/6,4 x 2,4 x 1,5 pulgadas, adecuado para la mayoría de las gafas de talla de todos.",
      "UN REGALO CON ESTILO: esta funda viene en cuatro colores. El diseño de un concepto sencillo y elegante es un regalo ideal para tus amigos y familia."  
    ],
reviews: [],
    rating: 5
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

// --- DATOS ---
const users = JSON.parse(localStorage.getItem("users")) || [{ username: "admin", password: "1234" }];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let cartTotal = 0;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let shippingCost = 250.00;
let deliveryMethod = 'pickup'; // 'pickup' o 'shipping'


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
    name: "Memoria MicroSD", 
    priceOptions: [
    { size: "128MB", price: 350, image: "./images/memoria128mb.png" },
    { size: "256MB", price: 650, image: "./images/memoria256mb.png" },
    { size: "512MB", price: 950, image: "./images/memoria512mb.png" },
    ],
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
    description: "Tarjeta de memoria TF de pequeña capacidad para CCTV o cámara Clase 10, tarjeta de memoria de alta velocidad.",
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
    price: 950, 
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
  price: 650,
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
  name: "Cargador portátil de batería de 50000 mAh",
  price: 1500, // Precio corregido, estaba en 0
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
  name: "Arrancador de batería para automóvil, 1000 A, pico 1280",
  price: 1800, // Precio asumido
  image: "./images/arrancadorBateria1.jpg",
  images: [
    "./images/arrancadorBateria1.jpg",
    "./images/arrancadorBateria2.jpg",
    "./images/arrancadorBateria3.jpg",
    "./images/arrancadorBateria4.jpg",
    "./images/arrancadorBateria5.jpg",
    "./images/arrancadorBateria6.jpg",
    "./images/arrancadorBateria7.jpg",
    "./images/arrancadorBateria8.jpg",
    "./images/arrancadorBateria9.jpg",  
    "./images/arrancadorBateria10.jpg",

  ],
  category: "Accesorios Autos",
  description: "Arrancador de batería para automóvil, 1000 A, pico 12800 mAh, cargador de batería portátil de carga rápida de 18 W, con linterna LED ultrabrillante.",
  features: [
    "• Potente Arrancador de Coche: Arranca de forma segura la batería agotada de tu vehículo con 1000 amperios de corriente máxima y abrazaderas resistentes. En cuestión de segundos.",
    "• 12 meses en espera: Arranca tus coches de 12 V 20 veces con una carga completa. Autodescarga extremadamente baja, no te preocupes por perder carga durante el almacenamiento. Prepárate para empezar.",
    "• El banco de energía de 12800 mAh tiene 2 salidas USB inteligentes (puerto de carga rápida de 18 W incluido). Puede cargar tu teléfono y tableta de forma rápida y segura al mismo tiempo. (Carga completa tipo C en 4 horas).",
    "• Un salvavidas: La luz LED ultrabrillante tiene 4 modos de luz con linterna, intermitente, luz SOS, luz estroboscópica.",
    "• Protecciones inteligentes: Cables de arranque inteligentes incorporados de 8 protecciones mejoradas, especialmente a prueba de chispas, protección de polaridad inversa, protección contra sobrecorriente, protección de alta temperatura, protección contra sobrecarga.",
  ],
  reviews: [],
  rating: 4.8
},

{ 
  id: 13, 
  name: "Altavoz Bluetooth Mini", 
  price: 550, // Precio asumido
  image: "./images/AltaVocesBano0.avif",
  images: [ 
    "./images/AltaVocesBano0.avif",
    "./images/AltaVocesBano1.avif",
    "./images/AltaVocesBano2.avif",
    "./images/AltaVocesBano3.avif",
  ],
  category: "electronica",
  description: "Altavoz Bluetooth, Mini subwoofer de ducha, manos libres impermeables con micrófono de ventosa para baño, piscina, playa, teléfono de coche.",
  features: [
    "• Impermeable al agua: IPX4",
    "• Uso: reproductor de audio portátil, teléfono móvil, computadora",
    "• Capacidad de la batería incorporada: 400 mAh",
    "• Tipo de batería: batería de litio",
    "• Tiempo del reproductor de música: 2-4 horas",
  ],
  reviews: [],
  rating: 4.8 
}, 

{ 
  id: 14, 
  name: "Cargador inalámbrico de 65W para móvil", 
  price: 850, // Precio asumido
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
  description: `Lleve su experiencia de carga inalámbrica al siguiente nivel con nuestro soporte de carga rápida. CONVENIENTE CARGA INALÁMBRICA QI - Dígale adiós a los cables enredados y disfrute de la carga inalámbrica simplemente colocando su teléfono en el soporte de carga. Nota: no se carga a través de fundas de teléfono de metal o fundas demasiado gruesas.`,
  features: [
    "• Entrada: 9V/2A", 
    "• Salida: 5W/7.5W/10W/15W (máx.)",
    "• Distancia de carga: ≤8mm"
  ],
  reviews: [],
  rating: 4.8 
},

{ 
  id: 15, 
  name: "Caja para Disco Duro USB 3.0", 
  price: 300, 
  image: "./images/encloser1.jpeg",
  images: [
    "./images/encloser1.jpeg", 
    "./images/encloser2.jpeg", 
    "./images/encloser3.jpeg", 
    "./images/encloser4.jpeg", 
    "./images/encloser5.png", 
    "./images/encloser6.png"
  ], 
  category: "electronica",
  description: `Caja/Carcasa (Enclosure) para Disco Duro Mecánico SATA de 2,5" y Unidades SSD. Interfaz USB 3.0.`,
  features: [
    "1. Modelo: UTHAI T2", 
    "2. Material: carcasa de plástico", 
    "3. Chip: IS621/JM57", 
    "4. Interfaz: USB 3.0 A SATA", 
    "5. Interfaz de transferencia USB 3.0 de alta velocidad, compatible con USB 2.0 y 1.1", 
    "6. Admite intercambio en caliente", 
    "7. Sistema operativo compatible: Win7/Win8/Win10/Mac OS 8.6 o superior", 
    "8. Velocidad de transmisión teórica USB 3.0: hasta 5 GB/s, USB2.0: 480 MB/s", 
    "9. Admite todo tipo de discos duros mecánicos SATA de 2,5\" y unidades SSD"
  ], 
  reviews: [], 
  rating: 4.8 
}, 

{ 
  id: 16, 
  name: `Shampoo Tinte Negro`, 
  price: 300, 
  image: "./images/ShampooTinteNegro0.jpg",
  images: [
    "./images/ShampooTinteNegro0.jpg", 
    "./images/ShampooTinteNegro1.jpg", 
    "./images/ShampooTinteNegro2.jpg", 
    "./images/ShampooTinteNegro3.jpg",
    "./images/ShampooTinteNegro4.jpg", 
    "./images/ShampooTinteNegro5.jpg",
    "./images/ShampooTinteNegro6.jpg",

  ], 
  category: "Cosmeticos",
  description: `Champú 3 en 1 de tinte para el cabello negro, fórmula herbaria natural de argán, cubre cabello gris para mujeres y hombres (16.9 onzas líquidas, negro)`,
  features: [
    "100% cobertura de cabello gris] Obtén un color de cabello vibrante con nuestro champú de tinte para cabello negro. Diseñado para una cobertura del 100% de las canas, este champú no solo refresca el color de tu cabello, sino que también mejora la salud y vitalidad de tu cabello.",
    "Fácil de usar y ahorra tiempo: nuestro champú de tinte para el cabello no requiere herramientas tradicionales de color para el cabello, simplemente aplícalo como lo harías con el champú normal, ahorrando tiempo y esfuerzo, y tiene una función 3 en 1.",
    "Ingredientes herbales: nuestro champú de color para el cabello está hecho de ingredientes herbales cuidadosamente seleccionados que garantizan que tu cabello esté saludable, nutre profundamente el cuero cabelludo y es suave con el cabello y el cuero cabelludo.",
    "Múltiples opciones de color: satisface las necesidades de diferentes colores y texturas de cabello, ya sea cabello liso o rizado, cabello grueso, cabello fino y cabello con densidad normal, adecuado tanto para hombres como para mujeres, lo que permite que tu cabello recupere su aspecto juvenil",
    "Instrucciones de uso: moja tu cabello, aplica una cantidad adecuada de champú de tinte para el cabello y masajea suavemente el cuero cabelludo hasta hacer espuma, deja actuar durante 3-5 minutos y luego enjuaga con agua tibia. Para obtener mejores resultados, úsalo regularmente."
    
],

  reviews: [], 
  rating: 4.8 
}, 


]; 

const coupons = { 
    "NEP10": 0.10, 
    "VERANO20": 0.20 
}; 

// --- FUNCIONES DE RENDERING Y FILTRADO ---

/**
 * Función principal para renderizar los productos en el contenedor.
 * @param {Array} productsToRender Lista de productos a mostrar. Por defecto, usa la lista completa.
 */
function renderProducts(productsToRender = products) {
    const container = document.getElementById("productContainer");
    if (!container) {
        console.error("El contenedor de productos no fue encontrado (ID: productContainer)");
        return;
    }

    container.innerHTML = ""; // Limpiar el contenedor

    productsToRender.forEach(product => {
        let priceText = "";
        let buttonText = '<i class="fas fa-cart-plus"></i> Agregar';
        let addToCartAction = `addToCart(${product.id})`;
        
        if (product.priceOptions && product.priceOptions.length > 0) {
            // Producto con múltiples opciones de precio (ej: Memoria MicroSD)
            const minPrice = Math.min(...product.priceOptions.map(opt => opt.price));
            priceText = `Desde RD$ ${minPrice.toFixed(2)}`;
            buttonText = '<i class="fas fa-eye"></i> Ver Opciones'; // Cambiar botón para invitar a ver detalles
            addToCartAction = `showProductDetail(${product.id})`;
        } else if (product.price > 0) {
            // Producto con precio único
            priceText = `RD$ ${product.price.toFixed(2)}`;
        } else {
            // Producto sin precio (e.g. precio en 0)
            priceText = "Consultar Precio";
            addToCartAction = `showProductDetail(${product.id})`; // No permite agregar si el precio es 0
        }

        const isFavorite = favorites.includes(product.id);
        const favoriteClass = isFavorite ? 'active' : '';
        const favoriteIcon = isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';

        const productHTML = `
            <div class="product">
                <button class="favorite-btn ${favoriteClass}" onclick="toggleFavorite(event, ${product.id})" title="Añadir a favoritos">
                    ${favoriteIcon}
                </button>
                <img src="${product.image}" alt="${product.name}" onclick="showProductDetail(${product.id})" />
                <div class="product-info">
                    <h3 onclick="showProductDetail(${product.id})">${product.name}</h3>
                    <p class="price-display">${priceText}</p>
                    <button class="add-to-cart-btn" onclick="${addToCartAction}">
                        ${buttonText}
                    </button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productHTML);
    });
}

function searchProducts() {
    const q = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(q));
    renderProducts(filtered);
} 

function advancedSearch() {
    const q = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("searchCategoryMain").value;
    const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseFloat(document.getElementById("searchPrice").value) || Infinity;

    const filtered = products.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const categoryMatch = category === 'all' || p.category === category;
        
        let price = p.price || (p.priceOptions && p.priceOptions.length > 0 ? p.priceOptions[0].price : 0);
        
        // Si tiene priceOptions, comprobamos si alguna opción cumple el rango de precio.
        if (p.priceOptions && p.priceOptions.length > 0) {
             const priceMatches = p.priceOptions.some(option => option.price >= minPrice && option.price <= maxPrice);
             return nameMatch && categoryMatch && priceMatches;
        }

        const priceMatch = price >= minPrice && price <= maxPrice;

        return nameMatch && categoryMatch && priceMatch;
    });

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

function toggleFavorite(event, productId) {
    event.stopPropagation();
    const element = event.currentTarget;
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
        element.innerHTML = '<i class="far fa-heart"></i>';
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        return;
    }

    const modal = document.getElementById("productDetailModal");
    const content = document.getElementById("productDetailContent");

    // Lógica para precio y opciones (si existen)
    let priceHTML = '';
    if (product.priceOptions && product.priceOptions.length > 0) {
        priceHTML = `<div class="price-options">
            <h4>Opciones de Tamaño/Capacidad:</h4>
            <div id="option-list">
            ${product.priceOptions.map(opt => `
                <button class="option-btn" 
                        onclick="selectProductOption(${product.id}, '${opt.size}', ${opt.price}, '${opt.image}', this)">
                    ${opt.size}: RD$ ${opt.price.toFixed(2)}
                </button>
            `).join('')}
            </div>
            <p class="product-price">Precio Seleccionado: <span id="selectedPrice">Selecciona una opción</span></p>
        </div>`;
    } else {
        const displayPrice = product.price > 0 ? `RD$ ${product.price.toFixed(2)}` : 'Consultar Precio';
        priceHTML = `<p class="product-price">Precio: ${displayPrice}</p>`;
    }
    
    // Obtener productos relacionados
    const relatedProducts = products 
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    // Contenido del modal
    content.innerHTML = `
        <div class="product-detail">
            <div class="product-gallery">
                <img src="${product.image}" alt="${product.name}" class="product-main-image" id="mainProductImage">
                <div class="product-thumbnails">
                    ${product.images.map(img => `
                        <img src="${img}" alt="${product.name} thumbnail" 
                             class="product-thumbnail" 
                             onclick="changeMainImage('${img}')">
                    `).join('')}
                </div>
            </div>
            <div class="product-info-detail">
                <h2 class="product-title">${product.name}</h2>
                <div class="product-meta">
                    <span class="rating">
                        ${'★'.repeat(Math.floor(product.rating))}
                        ${product.rating % 1 !== 0 ? '½' : ''} 
                        (${product.rating})
                    </span>
                    <span class="category-tag">${product.category}</span>
                </div>
                ${priceHTML}
                <p class="product-description">${product.description}</p>
                
                <h4>Características Principales</h4>
                <ul class="features-list">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>

                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
        
        ${relatedProducts.length > 0 ? `
            <div class="related-products-section">
                <h3>Productos Relacionados</h3>
                <div class="related-products">
                    ${relatedProducts.map(p => `
                        <div class="related-product-card" onclick="showProductDetail(${p.id});">
                            <img src="${p.image}" alt="${p.name}">
                            <p>${p.name}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    // Abrir modal y seleccionar la primera opción por defecto si existe
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    
    if (product.priceOptions && product.priceOptions.length > 0) {
        // Ejecutar la selección de la primera opción si está disponible
        const firstOptionButton = document.querySelector('.option-btn');
        if(firstOptionButton) {
            selectProductOption(product.id, product.priceOptions[0].size, product.priceOptions[0].price, product.priceOptions[0].image, firstOptionButton);
        }
    }
}

function changeMainImage(image) {
    document.getElementById("mainProductImage").src = image;
}

function selectProductOption(id, size, price, image, buttonElement) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Actualizar imagen principal
    document.getElementById("mainProductImage").src = image;

    // Actualizar precio en el detalle
    document.getElementById("selectedPrice").textContent = `RD$ ${price.toFixed(2)} (${size})`;
    
    // Desactivar todas las opciones y activar la seleccionada
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    
    // Guardamos la opción seleccionada en el objeto producto para usarla en addToCart.
    product.selectedOption = { id: id, size: size, price: price, image: image, originalId: product.id };
}

// --- FUNCIONES DEL CARRITO ---

function addToCart(id) {
    const productToAdd = products.find(p => p.id === id);
    if (!productToAdd) {
        return;
    }

    let itemDetails = {
        id: productToAdd.id,
        name: productToAdd.name,
        price: productToAdd.price,
        image: productToAdd.image
    };

    // Manejar producto con opciones
    if (productToAdd.priceOptions) {
        const option = productToAdd.selectedOption;
        if (!option) {
            alert("Por favor, selecciona una opción antes de agregar al carrito.");
            return;
        }
        // Crear un ID compuesto para que cada opción sea un artículo diferente en el carrito
        itemDetails = {
            id: `${productToAdd.id}-${option.size.replace(/\s/g, '')}`,
            name: `${productToAdd.name} (${option.size})`,
            price: option.price,
            image: option.image
        };
    } else if (productToAdd.price <= 0) {
        alert("Este producto requiere consulta de precio antes de agregar al carrito.");
        return;
    }

    const itemInCart = cart.find(item => item.id === itemDetails.id);

    if (itemInCart) {
        itemInCart.qty += 1;
    } else {
        cart.push({ 
            id: itemDetails.id, 
            name: itemDetails.name, 
            price: itemDetails.price, 
            image: itemDetails.image, 
            qty: 1 
        });
    }
    
    updateCart();

    // Animación de confirmación
    const button = event.target.closest('button');
    if (button) {
        const originalHTML = button.innerHTML;
        const originalBG = button.style.backgroundColor;
        button.innerHTML = '<i class="fas fa-check"></i> Agregado';
        button.style.backgroundColor = '#4caf50';
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.backgroundColor = originalBG;
        }, 1500);
    }
} 

function removeFromCart(itemId) {
    const index = cart.findIndex(item => item.id == itemId); // Usar == para comparar IDs
    if (index > -1) {
        cart.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cartItems");
    list.innerHTML = "";
    let itemsTotal = 0;

    cart.forEach(item => {
        itemsTotal += item.price * item.qty;
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <span>RD$ ${(item.price * item.qty).toFixed(2)}</span>
            <button onclick="removeFromCart('${item.id}')" style="padding: 0.2rem 0.5rem; background-color: #f44336;">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        list.appendChild(li);
    });

    cartTotal = itemsTotal; // Guardamos el subtotal (antes de cupones y envío)
    
    // Aplicar cupones y actualizar total
    applyCoupon(true); // Recalcular total con cupón si ya hay uno aplicado
    
    // Guardar carrito
    localStorage.setItem("cart", JSON.stringify(cart));
}

function applyCoupon(isSilent = false) {
    const input = document.getElementById("couponCode");
    const coupon = input.value.toUpperCase();
    const discount = coupons[coupon];
    const totalElement = document.getElementById("total");
    
    let currentTotal = cartTotal;

    if (discount) {
        currentTotal = cartTotal * (1 - discount);
        if (!isSilent) {
            alert(`Cupón aplicado: ${discount*100}% de descuento!`);
        }
    } else if (!isSilent && input.value !== "") {
        alert("Cupón inválido o expirado.");
    }
    
    // Añadir costo de envío
    if (deliveryMethod === 'shipping') {
        currentTotal += shippingCost;
    }
    
    totalElement.textContent = currentTotal.toFixed(2);
}

function updateDeliveryOption() {
    const pickupRadio = document.getElementById('pickup');
    const shippingRadio = document.getElementById('shipping');
    const pickupPointsDiv = document.getElementById('pickupPoints');
    
    if (pickupRadio.checked) {
        deliveryMethod = 'pickup';
        pickupPointsDiv.style.display = 'block';
    } else if (shippingRadio.checked) {
        deliveryMethod = 'shipping';
        pickupPointsDiv.style.display = 'none';
    }
    
    applyCoupon(true); // Recalcular total con el nuevo costo de envío
}


// --- FUNCIONES DE AUTENTICACIÓN --- 

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const u = usernameInput.value;
    const p = passwordInput.value;
    
    // Simulación de autenticación (solo verifica si no están vacíos)
    if (u && p) {
        localStorage.setItem('usuario', u);
        mostrarPanelUsuario(u);
    } else {
        alert("Por favor, introduce usuario y contraseña.");
    }
}

function register() {
    const u = document.getElementById("username").value.trim();
    if (u) {
        alert(`Cuenta creada correctamente para: ${u}`);
        localStorage.setItem("usuario", u);
        mostrarPanelUsuario(u);
    } else {
        alert("Por favor, introduce un nombre de usuario.");
    }
}

function logout() {
    localStorage.removeItem("usuario");
    mostrarFormularioLogin();
}

function mostrarPanelUsuario(usuario) {
    document.getElementById("loginFields").style.display = "none";
    document.getElementById("userPanel").style.display = "block";
    document.getElementById("welcomeText").textContent = `Bienvenido, ${usuario}`;
    document.getElementById("user-welcome").textContent = `¡Hola, ${usuario}!`;
}

function mostrarFormularioLogin() {
    document.getElementById("loginFields").style.display = "flex";
    document.getElementById("userPanel").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("user-welcome").textContent = "";
}


// --- FUNCIONES DE PEDIDO Y PAGO --- 

function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    
    const usuarioGuardado = localStorage.getItem("usuario");
    if (!usuarioGuardado) {
        alert("Por favor inicia sesión para continuar con la compra.");
        return;
    }
    
    // Actualizar datos del modal de pedido
    const deliveryMethodText = deliveryMethod === 'pickup' ? 'Recogida en Tienda (Gratis)' : `Envío a domicilio (RD$ ${shippingCost.toFixed(2)})`;
    document.getElementById('modalDeliveryMethod').textContent = deliveryMethodText;
    
    let locationText = '';
    if (deliveryMethod === 'pickup') {
        const selectedLocation = document.getElementById('pickupLocation').value;
        if (!selectedLocation) {
            alert("Por favor, selecciona un punto de recogida.");
            return;
        }
        locationText = `Punto de Recogida: ${selectedLocation}`;
    } else {
        locationText = 'La dirección se especificará en el formulario.';
    }
    document.getElementById('modalDeliveryLocation').textContent = locationText;
    
    // Mostrar modal
    document.getElementById("paymentModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
    document.body.style.overflow = "auto";
}


function sendOrder() {
    const submitBtn = document.getElementById('submitOrderBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    // 1. Recoger datos de la orden
    let orderDetails = '';
    cart.forEach(item => {
        orderDetails += `${item.name} (x${item.qty}) - RD$ ${(item.price * item.qty).toFixed(2)}\n`;
    });
    
    const totalElement = document.getElementById("total");
    const finalTotal = parseFloat(totalElement.textContent);
    
    orderDetails += `\n--------------------------------------`;
    orderDetails += `\nTotal del Pedido: RD$ ${finalTotal.toFixed(2)}`;
    
    const pickupLocation = deliveryMethod === 'pickup' ? document.getElementById('pickupLocation').value : 'N/A';
    
    // 2. Preparar los parámetros para la plantilla de EmailJS
    const templateParams = {
        from_name: document.getElementById('fullname').value,
        cedula: document.getElementById('cedula').value,
        phone: document.getElementById('phone').value,
        from_email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        delivery_method: deliveryMethod === 'pickup' ? 'Recogida en Tienda' : 'Envío a domicilio',
        pickup_location: pickupLocation,
        order_details: orderDetails,
        order_total: finalTotal.toFixed(2)
    };

    // ** IMPORTANTE: REEMPLAZA LOS PLACEHOLDERS DE EmailJS CON TUS PROPIOS VALORES **
    
    emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams) // <-- REEMPLAZA ESTO
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('✅ ¡Tu pedido ha sido enviado con éxito! Nos pondremos en contacto contigo pronto.');
        // Limpiar carrito y formulario
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        document.getElementById('order-form').reset();
        closePaymentModal();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirmar y Enviar Pedido';
    }, function(error) {
        console.log('FAILED...', error);
        alert('❌ Hubo un error al enviar tu pedido. Por favor, asegúrate de haber configurado EmailJS correctamente e intenta de nuevo.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirmar y Enviar Pedido';
    });
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Asignar los listeners de login/registro a los botones del formulario
    document.getElementById("entrar").addEventListener("click", login);
    document.getElementById("crear-cuenta").addEventListener("click", register);
    document.getElementById("cerrarSesion").addEventListener("click", logout);
    
    // Verificar si hay sesión activa
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
        mostrarPanelUsuario(usuarioGuardado);
    } else {
        mostrarFormularioLogin();
    }
    
    console.log("DOM cargado - Inicializando aplicación");
    renderProducts(); // ¡Llamada para mostrar productos!
    updateCart(); 
    updateDeliveryOption(); // Inicializar el cálculo de costo de envío
    
    // Add event listeners for delivery method changes
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateDeliveryOption);
    });
    
    document.getElementById("paymentModal").style.display = "none";
});
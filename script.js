// =========================
// 🌌 CONFIGURAR CANVAS
// =========================
const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

// tamaño pantalla
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// =========================
// ⭐ CREAR ESTRELLAS
// =========================
let stars = [];

for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2
  });
}

// =========================
// ✨ DIBUJAR ESTRELLAS
// =========================
function drawStars() {

  // fondo oscuro semi transparente
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // dibujar estrellas
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

// iniciar animación
drawStars();

// =========================
// 💖 FRASES (MUCHOS IDIOMAS)
// =========================
const phrases = [
  "Te amo","I love you","Je t’aime","Ti amo","Ich liebe dich",
  "Eu te amo","愛してる","사랑해","Я тебя люблю","Te iubesc",
  "Seni seviyorum","Ik hou van jou","Jag älskar dig",
  "Minä rakastan sinua","Kocham cię","Anh yêu em",
  "Saya cinta kamu","Mahal kita","Volim te"
];

// =========================
// 🪐 CREAR ANILLO
// =========================
phrases.forEach((text, i) => {

  const el = document.createElement("div");

  el.className = "love";
  el.innerText = text;

  // distribuir en círculo
  el.style.transform = `rotate(${i * (360 / phrases.length)}deg) translateX(250px)`;

  document.getElementById("galaxy-section").appendChild(el);

});

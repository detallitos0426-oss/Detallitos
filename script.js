/* ========================= */
/* CAMBIAR SECCIONES */
/* ========================= */
function show(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* ========================= */
/* GALAXIA */
/* ========================= */
const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// estrellas
let stars = [];

for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2
  });
}

// animación
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();

/* ========================= */
/* FRASES EN ANILLO */
/* ========================= */
const phrases = [
  "Te amo","I love you","Je t’aime","Ti amo","Ich liebe dich",
  "Eu te amo","愛してる","사랑해","Я тебя люблю","Te iubesc",
  "Kocham cię","Volim te","Anh yêu em","Saya cinta kamu"
];

phrases.forEach((text, i) => {
  const el = document.createElement("div");
  el.className = "love";
  el.innerText = text;

  el.style.transform =
    `rotate(${i * (360 / phrases.length)}deg) translateX(250px)`;

  document.body.appendChild(el);
});

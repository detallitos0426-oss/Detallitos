/* ========================= */
/* MENSAJE */
/* ========================= */
function showMessage() {
  alert("You are my everything 💖");
}

/* ========================= */
/* CORAZONES FLOTANDO */
/* ========================= */
setInterval(() => {

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);

}, 300);

/* ========================= */
/* CAMBIAR SECCIONES */
/* ========================= */
function showSection(id) {

  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* ========================= */
/* 🌌 GALAXIA / AGUJERO NEGRO */
/* ========================= */
const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

/* ========================= */
/* ⭐ ESTRELLAS */
/* ========================= */
let stars = [];

for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2
  });
}

/* ========================= */
/* 💖 40 IDIOMAS */
/* ========================= */
const phrases = [
  "Te amo",
  "I love you",
  "Je t’aime",
  "Ti amo",
  "Ich liebe dich",
  "Eu te amo",
  "愛してる",
  "사랑해",
  "Я тебя люблю",
  "Te iubesc",
  "Kocham cię",
  "Volim te",
  "Anh yêu em",
  "Saya cinta kamu",
  "Ik hou van jou",
  "Jag älskar dig",
  "Minä rakastan sinua",
  "Seni seviyorum",
  "Mahal kita",
  "Main tumse pyaar karta hoon",
  "Aloha wau iā ʻoe",
  "Ngiyakuthanda",
  "Ek is lief vir jou",
  "Wo ai ni",
  "Chan rak khun",
  "Mi amas vin",
  "Is breá liom thú",
  "Kimi o ai shiteru",
  "Obicham te",
  "Lubim ta",
  "Te dua",
  "Ngo oi ney",
  "Ina sonki",
  "Ani ohev otach",
  "Ya tebya lyublyu",
  "Mo ni fe re",
  "Nakupenda",
  "Eu amo-te",
  "Phom rak khun",
  "S'agapo"
];

/* ========================= */
/* 🪐 TEXTOS ORBITANDO */
/* ========================= */
const galaxySection = document.getElementById("galaxy");

let orbitTexts = [];

phrases.forEach((text, i) => {

  const el = document.createElement("div");

  el.className = "love";
  el.innerText = text;

  galaxySection.appendChild(el);

  orbitTexts.push({
    element: el,
    angle: (Math.PI * 2 / phrases.length) * i,
    radius: 260
  });

});

/* ========================= */
/* 🌌 ANIMACIÓN */
/* ========================= */
let rotation = 0;

function draw() {

  // fondo espacial suave
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // estrellas
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
  });

  /* ========================= */
  /* 🌌 AURA */
  /* ========================= */
  const glow = ctx.createRadialGradient(
    centerX,
    centerY,
    20,
    centerX,
    centerY,
    260
  );

  glow.addColorStop(0, "rgba(255,105,180,0.9)");
  glow.addColorStop(0.4, "rgba(128,0,255,0.5)");
  glow.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = glow;

  ctx.beginPath();
  ctx.arc(centerX, centerY, 260, 0, Math.PI * 2);
  ctx.fill();

  /* ========================= */
  /* 🕳️ AGUJERO NEGRO */
  /* ========================= */
  ctx.fillStyle = "black";

  ctx.beginPath();
  ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
  ctx.fill();

  /* ========================= */
  /* 💖 NÚCLEO LATIENDO */
  /* ========================= */
  ctx.beginPath();

  ctx.fillStyle = "hotpink";

  ctx.arc(
    centerX,
    centerY,
    18 + Math.sin(rotation * 6) * 6,
    0,
    Math.PI * 2
  );

  ctx.shadowColor = "hotpink";
  ctx.shadowBlur = 40;

  ctx.fill();

  ctx.shadowBlur = 0;

  /* ========================= */
  /* 🪐 ANILLO GIRANDO */
  /* ========================= */
  ctx.save();

  ctx.translate(centerX, centerY);
  ctx.rotate(rotation);

  ctx.strokeStyle = "rgba(255,20,147,0.8)";
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.ellipse(0, 0, 220, 90, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();

  /* ========================= */
  /* 💖 TEXTOS MOVIÉNDOSE */
  /* ========================= */
  orbitTexts.forEach(obj => {

    obj.angle += 0.002;

    const x = centerX + Math.cos(obj.angle) * obj.radius;
    const y = centerY + Math.sin(obj.angle) * obj.radius;

    obj.element.style.left = `${x}px`;
    obj.element.style.top = `${y}px`;

  });

  rotation += 0.01;

  requestAnimationFrame(draw);
}

/* iniciar */
draw();

function showMessage() {
  alert("You are my everything 💖");
}

/* ========================= */
/* 💖 CORAZONES */
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
/* 📂 CAMBIAR SECCIONES */
/* ========================= */
function showSection(id) {

  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* ========================= */
/* 🌌 CANVAS */
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

for (let i = 0; i < 400; i++) {

  stars.push({

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    size: Math.random() * 2,

    speed: Math.random() * 0.2
  });
}

/* ========================= */
/* 🪐 TE AMO EN IDIOMAS */
/* ========================= */
const phrases = [

  "🪐 Te amo (Costa Rica)",
  "🪐 I love you (USA)",
  "🪐 Je t’aime (France)",
  "🪐 Ti amo (Italy)",
  "🪐 愛してる (Japan)",
  "🪐 사랑해 (South Korea)",
  "🪐 Ich liebe dich (Germany)",
  "🪐 Eu te amo (Brazil)",
  "🪐 Я тебя люблю (Russia)",
  "🪐 Te quiero (Mexico)",

  "🪐 Kocham cię (Poland)",
  "🪐 Volim te (Croatia)",
  "🪐 Mahal kita (Philippines)",
  "🪐 Ik hou van jou (Netherlands)",
  "🪐 Jag älskar dig (Sweden)",

  "🪐 Seni seviyorum (Turkey)",
  "🪐 Wo ai ni (China)",
  "🪐 Chan rak khun (Thailand)",
  "🪐 S'agapo (Greece)",
  "🪐 Nakupenda (Kenya)",

  "🪐 Te iubesc (Romania)",
  "🪐 Main tumse pyaar karta hoon (India)",
  "🪐 Mi amas vin (Esperanto)",
  "🪐 Is breá liom thú (Ireland)",
  "🪐 Lubim ta (Slovakia)",

  "🪐 Te dua (Albania)",
  "🪐 Aloha wau iā ʻoe (Hawaii)",
  "🪐 Ngiyakuthanda (South Africa)",
  "🪐 Ek is lief vir jou (Afrikaans)",
  "🪐 Obicham te (Bulgaria)"

];

/* ========================= */
/* 🌌 GALAXIA */
/* ========================= */
const galaxySection = document.getElementById("galaxy");

let orbitTexts = [];

/* ========================= */
/* 🪐 CREAR PLANETAS */
/* ========================= */
phrases.forEach((text, i) => {

  const el = document.createElement("div");

  el.className = "love";

  el.innerText = text;

  galaxySection.appendChild(el);

  orbitTexts.push({

    element: el,

    angle:
      (Math.PI * 2 / phrases.length) * i,

    radius:
      i % 2 === 0 ? 260 : 340,

    speed:
      0.001 + Math.random() * 0.002
  });

});

/* ========================= */
/* 🌌 ROTACIÓN */
/* ========================= */
let rotation = 0;

/* ========================= */
/* 🌌 DIBUJAR */
/* ========================= */
function draw() {

  /* fondo espacial */
  ctx.fillStyle = "rgba(0,0,0,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  /* ========================= */
  /* ⭐ ESTRELLAS */
  /* ========================= */
  ctx.fillStyle = "white";

  stars.forEach(s => {

    ctx.beginPath();

    ctx.arc(
      s.x,
      s.y,
      s.size,
      0,
      Math.PI * 2
    );

    ctx.fill();

    s.y += s.speed;

    if (s.y > canvas.height) {
      s.y = 0;
    }

  });

  /* ========================= */
  /* 🌌 NEBULOSA */
  /* ========================= */
  const glow = ctx.createRadialGradient(
    centerX,
    centerY,
    20,
    centerX,
    centerY,
    320
  );

  glow.addColorStop(
    0,
    "rgba(255,20,147,0.9)"
  );

  glow.addColorStop(
    0.3,
    "rgba(128,0,255,0.4)"
  );

  glow.addColorStop(
    1,
    "rgba(0,0,0,0)"
  );

  ctx.fillStyle = glow;

  ctx.beginPath();

  ctx.arc(
    centerX,
    centerY,
    320,
    0,
    Math.PI * 2
  );

  ctx.fill();

  /* ========================= */
  /* 💖 NÚCLEO */
  /* ========================= */
  ctx.beginPath();

  const pulse =
    35 + Math.sin(rotation * 5) * 8;

  ctx.fillStyle = "hotpink";

  ctx.shadowColor = "hotpink";

  ctx.shadowBlur = 60;

  ctx.arc(
    centerX,
    centerY,
    pulse,
    0,
    Math.PI * 2
  );

  ctx.fill();

  ctx.shadowBlur = 0;

  /* ========================= */
  /* 🪐 ANILLOS */
  /* ========================= */
  ctx.save();

  ctx.translate(centerX, centerY);

  ctx.rotate(rotation);

  ctx.strokeStyle =
    "rgba(255,20,147,0.7)";

  ctx.lineWidth = 8;

  ctx.beginPath();

  ctx.ellipse(
    0,
    0,
    250,
    100,
    0,
    0,
    Math.PI * 2
  );

  ctx.stroke();

  ctx.rotate(rotation * 0.5);

  ctx.strokeStyle =
    "rgba(128,0,255,0.5)";

  ctx.beginPath();

  ctx.ellipse(
    0,
    0,
    340,
    150,
    0,
    0,
    Math.PI * 2
  );

  ctx.stroke();

  ctx.restore();

  /* ========================= */
  /* 🪐 ÓRBITAS */
  /* ========================= */
  orbitTexts.forEach((obj) => {

    /* velocidad */
    obj.angle += obj.speed;

    /* movimiento */
    const x =
      centerX +
      Math.cos(obj.angle) * obj.radius;

    const y =
      centerY +
      Math.sin(obj.angle) *
      (obj.radius * 0.45);

    /* posición */
    obj.element.style.left = `${x}px`;

    obj.element.style.top = `${y}px`;

    /* ========================= */
    /* 🌀 GIRAR TEXTO */
    /* ========================= */
    const rotate =
      obj.angle * 50;

    obj.element.style.transform =
      `translate(-50%, -50%) rotate(${rotate}deg)`;

  });

  rotation += 0.01;

  requestAnimationFrame(draw);
}

/* ========================= */
/* 🚀 INICIAR */
/* ========================= */
draw();

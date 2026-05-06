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
/* GALAXIA */
/* ========================= */
const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// estrellas
let stars = [];
for (let i = 0; i < 200; i++) {
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

// iniciar galaxia
draw();

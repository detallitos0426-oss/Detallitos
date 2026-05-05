const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();


// 💖 FRASES EN DIFERENTES IDIOMAS
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
  "Te iubesc"
];

phrases.forEach((text, index) => {
  const span = document.createElement("div");
  span.classList.add("love");
  span.innerText = text;

  span.style.top = "50%";
  span.style.left = "50%";
  span.style.animationDelay = index + "s";

  document.body.appendChild(span);
});

/* ========================= */
/* 🎆 FUEGOS ARTIFICIALES */
/* ========================= */

const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework() {

  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;

  for (let i = 0; i < 100; i++) {

    ctx.beginPath();

    ctx.arc(
      x + Math.random() * 100 - 50,
      y + Math.random() * 100 - 50,
      2,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `hsl(${Math.random() * 360},100%,50%)`;

    ctx.fill();
  }

}

setInterval(() => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  firework();

}, 1000);

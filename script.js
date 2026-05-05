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

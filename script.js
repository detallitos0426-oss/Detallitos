/* 📄 CAMBIAR PAGINA */

function showPage(id){

    document.querySelectorAll('.page')
    .forEach(page => {

        page.classList.remove('active');

    });

    document
    .getElementById(id)
    .classList.add('active');
}

/* ❤️ CORAZONES FLOTANDO */

function createHeart(){

    const heart =
    document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML='❤️';

    heart.style.left =
    Math.random()*100+'vw';

    heart.style.fontSize =
    Math.random()*25+15+'px';

    heart.style.animationDuration =
    Math.random()*3+3+'s';

    heart.style.opacity =
    Math.random();

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);
}

setInterval(createHeart,300);

/* 💌 ABRIR CARTAS */

function openLetter(button){

    const envelope =
    button.parentElement
    .querySelector('.envelope');

    envelope.classList.toggle('open');

}

/* ✨ ESTRELLAS FUGACES */

function createShootingStar(){

    const star =
    document.createElement('div');

    star.classList.add('shooting-star');

    star.style.top =
    Math.random()*50+'vh';

    star.style.left =
    Math.random()*100+'vw';

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);
}

setInterval(createShootingStar,4000);

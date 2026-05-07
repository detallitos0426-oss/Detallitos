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

/* ❤️ CORAZONES */

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

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);
}

setInterval(createHeart,300);

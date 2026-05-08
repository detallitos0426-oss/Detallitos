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

/* 💌 ABRIR CARTAS GRANDES */

function openLetter(button){

    const envelope =
    button.parentElement
    .querySelector('.envelope');

    /* CERRAR OTRAS */

    document
    .querySelectorAll('.envelope')
    .forEach(e => {

        if(e !== envelope){

            e.classList.remove('open');

        }

    });

    envelope.classList.toggle('open');
}

/* ❌ BOTON CERRAR CARTA */

function closeLetter(button){

    const envelope =
    button.closest('.envelope');

    envelope.classList.remove('open');
}

/* ❌ CERRAR AL TOCAR FUERA */

document.addEventListener('click',e=>{

    if(
        !e.target.closest('.paper') &&
        !e.target.closest('button')
    ){

        document
        .querySelectorAll('.envelope')
        .forEach(e=>{

            e.classList.remove('open');

        });

    }

});

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

/* 🌠 EFECTO EXTRA ESTRELLAS */

function createMiniStar(){

    const star =
    document.createElement('div');

    star.classList.add('mini-star');

    star.style.left =
    Math.random()*100+'vw';

    star.style.top =
    Math.random()*100+'vh';

    star.style.animationDuration =
    Math.random()*3+2+'s';

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },5000);
}

setInterval(createMiniStar,500);

/* ========================= */
/* 🎮 VIAJE POR LA GALAXIA */
/* ========================= */

let player =
document.getElementById('player');

let gameArea =
document.getElementById('gameArea');

let score = 0;
let lives = 3;

let gameRunning = false;

/* 🚀 MOVIMIENTO */

document.addEventListener('mousemove',e=>{

    if(!gameRunning) return;

    const rect =
    gameArea.getBoundingClientRect();

    let x =
    e.clientX - rect.left;

    x =
    Math.max(40,
    Math.min(rect.width-40,x));

    player.style.left =
    x+'px';

});

/* 📱 TOUCH */

document.addEventListener('touchmove',e=>{

    if(!gameRunning) return;

    const rect =
    gameArea.getBoundingClientRect();

    let x =
    e.touches[0].clientX - rect.left;

    x =
    Math.max(40,
    Math.min(rect.width-40,x));

    player.style.left =
    x+'px';

});

/* ✨ INICIAR */

function startGalaxyGame(){

    score = 0;
    lives = 3;

    gameRunning = true;

    document
    .getElementById('score')
    .innerText = score;

    document
    .getElementById('lives')
    .innerText = lives;

    spawnItems();

    randomMessages();
}

/* 💖 OBJETOS */

function spawnItems(){

    if(!gameRunning) return;

    createGameHeart();

    if(Math.random()>.6){

        createMeteor();
    }

    setTimeout(spawnItems,900);
}

/* ❤️ CORAZONES */

function createGameHeart(){

    const heart =
    document.createElement('div');

    heart.classList.add('game-heart');

    heart.innerHTML='💖';

    heart.style.left =
    Math.random()*90+'%';

    gameArea.appendChild(heart);

    const check =
    setInterval(()=>{

        if(!heart.parentElement){

            clearInterval(check);
            return;
        }

        const heartRect =
        heart.getBoundingClientRect();

        const playerRect =
        player.getBoundingClientRect();

        if(
            heartRect.left <
            playerRect.right &&

            heartRect.right >
            playerRect.left &&

            heartRect.top <
            playerRect.bottom &&

            heartRect.bottom >
            playerRect.top
        ){

            score++;

            document
            .getElementById('score')
            .innerText = score;

            heart.remove();

            clearInterval(check);
        }

    },30);

    setTimeout(()=>{

        heart.remove();

    },6000);
}

/* ☄️ METEORITOS */

function createMeteor(){

    const meteor =
    document.createElement('div');

    meteor.classList.add('meteor');

    meteor.innerHTML='☄️';

    meteor.style.left =
    Math.random()*90+'%';

    gameArea.appendChild(meteor);

    const check =
    setInterval(()=>{

        if(!meteor.parentElement){

            clearInterval(check);
            return;
        }

        const meteorRect =
        meteor.getBoundingClientRect();

        const playerRect =
        player.getBoundingClientRect();

        if(
            meteorRect.left <
            playerRect.right &&

            meteorRect.right >
            playerRect.left &&

            meteorRect.top <
            playerRect.bottom &&

            meteorRect.bottom >
            playerRect.top
        ){

            lives--;

            document
            .getElementById('lives')
            .innerText = lives;

            meteor.remove();

            clearInterval(check);

            if(lives <= 0){

                endGame();
            }

        }

    },30);

    setTimeout(()=>{

        meteor.remove();

    },5000);
}

/* 🌌 MENSAJES */

const messages = [

"Eres mi galaxia favorita 🌌",
"Te amo infinito ♾️",
"Nuestro amor brilla ✨",
"Siempre contigo 💖",
"Eres mi universo ❤️"

];

function randomMessages(){

    if(!gameRunning) return;

    const msg =
    document.getElementById('floatingMessage');

    msg.innerText =
    messages[
        Math.floor(
        Math.random()*messages.length
    )];

    msg.classList.add('show');

    setTimeout(()=>{

        msg.classList.remove('show');

    },2500);

    setTimeout(randomMessages,5000);
}

/* 💥 FINAL */

function endGame(){

    gameRunning = false;

    alert(
    '💖 Feliz 1 Año y 1 Mes ❤️\n\nGracias por estar conmigo ✨'
    );
}

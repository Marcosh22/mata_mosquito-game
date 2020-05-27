
let width = window.innerWidth;
let height = window.innerHeight;
let delay = getDelay();
let vidas = 3;
let time = 20;
let cronometro;
let process;

function getDelay() {
    let dificuldade = window.location.search.replace('?', '');

    switch(dificuldade) {
        case 'normal':
            return 1500;
        case 'dificil':
            return 1000;
        case 'expert':
            return 750;
        default:
            return 1500;
    }
}

function getWindowSize() {
    width = window.innerWidth;
    height = window.innerHeight;
}

function initProcess() {
    document.getElementById('tempo').innerHTML = time;
    iniciarCronometro();

    process = setInterval(function() {
        gerarMosca();
    }, delay);
}

function iniciarCronometro() {
    cronometro = setInterval(function () {
        
        time--;
        document.getElementById('tempo').innerHTML = time;

        if(time === 0) {
            window.location.href = 'vitoria.html'
            clearInterval(cronometro);
            clearInterval(process);
        }
    }, 1000);
}

function gerarMosca() {

    let positionX = Math.floor(Math.random()*width) - 90;
    let positionY = Math.floor(Math.random()*height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    if(document.getElementById('mosca')) {

        if(vidas === 0) {
            window.location.href = 'game_over.html'
            clearInterval(cronometro);
            clearInterval(process);
        }

        console.log(vidas)

        document.getElementById('vida'+vidas).src = 'img/coracao_vazio.png';
        vidas--;
        document.getElementById('mosca').remove();
    }

    let mosca = document.createElement('img');
    mosca.src = 'img/mosca.png'
    mosca.className = getSize() + ' ' + getSide();
    mosca.style.position = 'absolute';
    mosca.style.left = positionX + 'px';
    mosca.style.top = positionY + 'px';
    mosca.id = 'mosca'
    mosca.onclick = function () {
        document.getElementById("mosca").remove();
    }

    document.body.appendChild(mosca);
}

function getSide() {
    let side = Math.floor(Math.random() * 2)

    if(side === 0) {
        return 'left'
    }
    else if (side === 1) {
        return 'right'
    }
}

function getSize() {
    let size = Math.floor(Math.random() * 3)

    if(size === 0) {
        return 'size1'
    }
    else if (size === 1) {
        return 'size2'
    }
    else if (size === 2) {
        return 'size3'
    }
}
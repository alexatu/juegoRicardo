var tiempo, interval, puntos;
bola = document.getElementById("bola");//recojo las id
barra = document.getElementById("barra");//recojo las id
cont = document.getElementById("contador");//recojo las id
perder = document.getElementById("perder");//recojo las id
ini =document.getElementById("inicio");//recojo las id
tit=document.getElementById("titulo");//recojo las id
instrucciones=document.getElementById("instrucciones");//recojo las id
ancho = document.documentElement.clientWidth;//recojo el ancho de la pantalla
alto = document.documentElement.clientHeight;//recojo el alto de la pantalla
x = 30;
y = 30;
mx = 1;
my = 1;
mover = 10
puntuaciones=[]//creo el array de las puntuaciones

function mostrarInstrucciones() {//muestra las instrucciones
    instrucciones.style.display = "block";
    setTimeout(function() {
      instrucciones.style.display = "none";
    }, 5000); 
}
  
//distintas dificultades
function facil() {
    tiempo = 50
    mostrarInstrucciones();
    start(tiempo)
}


function normal() {
    tiempo = 30
    mostrarInstrucciones();
    start(tiempo)
}



function dificil() {
    tiempo = 20
    mostrarInstrucciones();
    start(tiempo)
}

//para el juego
function parar() {
    clearInterval(interval);
    document.removeEventListener("keydown", moverBarra);//borro los listener
    document.removeEventListener("keyup", soltarTecla);

    puntuaciones.push(puntos);//guarda los puntos y muestra el mensaje 
    perder.style.display = "block";
    perder.innerHTML = `<p>Has conseguido una puntuacion de ${puntos}</p>
    <input type="button" value="volver a jugar en facil" onclick=facil()></input>
    <input type="button" value="volver a jugar en normal" onclick=normal()></input>
    <input type="button" value="volver a jugar en dificil" onclick=dificil()></input>`
}


function jugar() {
    moverbola();

}


function inicio() {//preparo todo para comenzar el juego
    bola.style.left = "50px";
    puntos = 0
    j1 = [];
    j1.pulsado = false;
    bola.rebote = 1;
    bola.direccion = 1;
    cont.innerHTML = `<p>${puntos}</p>`
    cont.style.display="block";
    barra.style.display="block";
    bola.style.display="block";
    ini.style.display="none";
    document.addEventListener("keydown", moverBarra);
    document.addEventListener("keyup", soltarTecla);
    tit.style.display="none"
    perder.style.display = "none";
}
//recojo el tiempo segun dificultad
function start(t) {
    inicio();
    interval = setInterval(jugar, t);
}
//aumenta la puntuacion
function aumentarPuntos() {
    puntos++
    cont.innerHTML = `<p>${puntos}</p>`
}



//mueve la bola
function moverbola() {
    direccionBola();
    reboteBarra();
    switch (bola.rebote) {
        case 1: // derecha, abajo
            bola.style.left = (bola.offsetLeft + mover) + "px";
            bola.style.top = (bola.offsetTop + mover) + "px";
            break;
        case 2: // derecha, arriba
            bola.style.left = (bola.offsetLeft + mover) + "px";
            bola.style.top = (bola.offsetTop - mover) + "px";
            break;
        case 3: // izquierda, abajo

            bola.style.left = (bola.offsetLeft - mover) + "px";
            bola.style.top = (bola.offsetTop + mover) + "px";

            break;
        case 4: // izquierda, arriba

            bola.style.left = (bola.offsetLeft - mover) + "px";
            bola.style.top = (bola.offsetTop - mover) + "px";
            break;
    }
}
//cambia la direccion
function direccionBola() {
    if (bola.direccion === 1) {//derecha
        if (bola.offsetTop >= alto) bola.rebote = 2;
        else if (bola.offsetTop <= 0) bola.rebote = 1;
    }
    if (bola.offsetLeft >= ancho) {//cambio de rebote para direccionar
        console.log(ancho);
        bola.direccion = 2;
        if (bola.rebote == 1) bola.rebote = 3;
        else if (bola.rebote == 2) bola.rebote = 4;

    } else if (bola.direccion == 2) {//izquierda
        if (bola.offsetTop >= alto) bola.rebote = 4;
        else if (bola.offsetTop <= 0) bola.rebote = 3;
    }
    if (bola.offsetLeft <= 0) {
        parar();
    }
}


//hace que rebote en la barra
function reboteBarra() {

    if (bola.offsetLeft >= barra.offsetLeft && bola.offsetLeft <= barra.offsetLeft + barra.offsetWidth) {//comparo el ancho de la bola y de la barra para comprobar si rebota 
        if (bola.offsetTop + bola.offsetHeight >= barra.offsetTop && bola.offsetTop <= barra.offsetTop + barra.offsetHeight) {

            if (bola.direccion === 1) {
                aumentarPuntos();
                bola.rebote = 1;
            } else if (bola.direccion === 2) {
                aumentarPuntos();
                bola.direccion = 1;
                bola.rebote = 2;
            }
        }

    }
}


//mueve la barra
function moverBarra(e) {
    codigo = e.keyCode;
    console.log(codigo);
    barra.pulsado = true;
    console.log(barra.pulsado);
    if (codigo == 87 && barra.pulsado == true) {
        console.log("dentro");
        if (barra.offsetTop >= 0) {
            barra.style.top = (barra.offsetTop - 20) + "px";
        }

    } else if (codigo == 83 && barra.pulsado == true) {
        if (barra.offsetTop <= (alto - 100)) {
            barra.style.top = (barra.offsetTop + 20) + "px";
        }
    }
}

function soltarTecla(e) {
    codigo = e.keyCode//cojo el codigo de la tecla
    console.log("has dejado de pulsar" + codigo);
    if (codigo == 87) {//es la letra w
        barra.pulsado = false
    } else if (codigo == 83) {//es la letra s
        barra.pulsado = false
    }
}



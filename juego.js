var  tiempo,interval,puntos;
bola=document.getElementById("bola");
barra=document.getElementById("barra");
cont=document.getElementById("cont");
alto=document.width()
ancho=document.height();

function facil(){
tiempo=50
start(tiempo)
}


function normal(){
    tiempo=30
    start(tiempo)
}



function dificil(){
    tiempo=15
    start(tiempo)
}



function parar(){
clearInterval(interval);

}

function jugar(){


}


function inicio(){
bola.style.left=0;
puntos=0
j1=[];
j1.tecla=null;
j1.pulsado=false;
cont.innerHTML=`<p>${puntos}</p>`

}

function start(t){
    inicio();
    interval=setInterval(jugar,t)
}
function aumentarPuntos(){
    puntos++
    cont.innerHTML=`<p>${puntos}</p>`
}
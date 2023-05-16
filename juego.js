var  tiempo,interval,puntos;
bola=document.getElementById("bola");
barra=document.getElementById("barra");
cont=document.getElementById("contador");
ancho=document.documentElement.clientWidth;
alto=document.documentElement.clientHeight;
x=30;
y=30;
mx=1;
my=1;
mover=10
facil()

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
moverbola();

}


function inicio(){
bola.style.left=0;
puntos=0
j1=[];
j1.tecla=null;
j1.pulsado=false;
bola.rebote = 1;
bola.direccion = 1;
cont.innerHTML=`<p>${puntos}</p>`

}

function start(t){
    inicio();
    interval=setInterval(jugar,t);
}

function aumentarPuntos(){
    puntos++
    cont.innerHTML=`<p>${puntos}</p>`
}




function moverbola(){
    direccionBola();
    switch(bola.rebote){
        case 1: // derecha, abajo
            bola.style.left = (bola.offsetLeft + mover) +"px";
            bola.style.top = (bola.offsetTop + mover) +"px";
            break;
        case 2: // derecha, arriba
            bola.style.left = (bola.offsetLeft + mover) +"px";
            bola.style.top = (bola.offsetTop - mover) +"px";
            break;
        case 3: // izquierda, abajo
        console.log(bola)
            bola.style.left = (bola.offsetLeft - mover) +"px";
            bola.style.top = (bola.offsetTop + mover) +"px";
            
            break;
        case 4: // izquierda, arriba
    console.log(bola);
            bola.style.left = (bola.offsetLeft - mover) +"px";
            bola.style.top = (bola.offsetTop - mover) +"px";
            break;
    }
}

function direccionBola(){
    if(bola.direccion ===1){//derecha
        if(bola.offsetTop >= alto) bola.rebote=2;
        else if(bola.offsetTop <=0 ) bola.rebote=1; 
    }
    if(bola.offsetLeft >=ancho){//cambio de rebote para direccionar
        console.log(ancho);
        bola.direccion=2;
        if(bola.rebote==1)bola.rebote=3;
        else if(bola.rebote==2)bola.rebote=4;

    }else if(bola.direccion==2){//izquierda
        if(bola.offsetTop >= alto) bola.rebote=4;
        else if(bola.offsetTop <=0 ) bola.rebote=3;
    }
}






function iniciarJuego(){
    let boton_mascota = document.getElementById('boton-selpokemon');
    boton_mascota.addEventListener('click', seleccionarMascota);
}
//////////////////////////////////////////////////////////////////////////////
function numeroAleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1)+min); 
}
//////////////////////////////////////////////////////////////////////////////
function seleccionarMascota(){

    let agua = document.getElementById('m1');
    let fuego = document.getElementById('m2');
    let tierra = document.getElementById('m3');
    let fuego_agua = document.getElementById('m4');
    let fuego_tierra = document.getElementById('m5');
    let agua_tierra = document.getElementById('m6');
    let mascota_jugador = document.getElementById('mascota-jugador');
   
   if(agua.checked){
    mascota_jugador.innerHTML = 'agua';
   }else if(fuego.checked){
    mascota_jugador.innerHTML = 'fuego';
   }else if(tierra.checked){
    mascota_jugador.innerHTML = 'tierra';
   }else if(fuego_agua.checked){
    mascota_jugador.innerHTML = 'fuego y agua';
   }else if(fuego_tierra.checked){
     mascota_jugador.innerHTML = 'fuego y tierra';
   }else if(agua_tierra.checked){
     mascota_jugador.innerHTML = 'agua y tierra';
   }else{
     alert('No has seleccionado ninguna mascota'); 
   }   
   enemigoAleatorio();
}
//////////////////////////////////////////////////////////////////////////////
function enemigoAleatorio(){
    let numAleatorio = numeroAleatorio(1,6);
    let mascota_enemigo = document.getElementById('mascota-enemigo');
    if(numAleatorio == 1){
        mascota_enemigo.innerHTML = 'agua';
    }else if(numAleatorio == 2){
        mascota_enemigo.innerHTML = 'fuego';
    }else if(numAleatorio == 3){
        mascota_enemigo.innerHTML = 'tierra';
    }else if(numAleatorio == 4){
        mascota_enemigo.innerHTML = 'agua y fuego';
    }else if(numAleatorio == 5){
        mascota_enemigo.innerHTML = 'fuego y tierra';
    }else if(numAleatorio == 6){
        mascota_enemigo.innerHTML = 'agua y tierra';
    }else{
        mascota_enemigo.innerHTML = 'Error'; 
    }
}




let boton_atk_fuego;
let boton_atk_tierra;
let boton_atk_agua;
let boton_reiniciar;



window.addEventListener('load', iniciarJuego);


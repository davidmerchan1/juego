

function iniciarJuego(){
    let boton_mascota = document.getElementById('boton-selpokemon');
    boton_mascota.addEventListener('click', seleccionarMascota);
    
}

function seleccionarMascota(){

    let agua = document.getElementById('m1');
    let fuego = document.getElementById('m2');
    let tierra = document.getElementById('m3');
    let fuego_agua = document.getElementById('m4');
    let fuego_tierra = document.getElementById('m5');
    let agua_tierra = document.getElementById('m6');
    let mascota_jugador = document.getElementById('mascota-jugador');
   
   if(agua.checked){
    alert('seleccionaste tu mascota de tipo agua'); 
    mascota_jugador.innerHTML = 'agua';
   }else if(fuego.checked){
    return alert('seleccionaste tu mascota de tipo fuego'); 
   }else if(tierra.checked){
    return alert('seleccionaste tu mascota de tipo tierra'); 
   }else if(fuego_agua.checked){
    return alert('seleccionaste tu mascota de tipo fuego y agua'); 
   }else if(fuego_tierra.checked){
    return alert('seleccionaste tu mascota de tipo fuego y tierra'); 
   }else if(agua_tierra.checked){
    return alert('seleccionaste tu mascota de tipo agua y tierra'); 
   }else{
    return alert('No has seleccionado ninguna mascota'); 
   }


    
}

let boton_atk_fuego;
let boton_atk_tierra;
let boton_atk_agua;
let boton_reiniciar;



window.addEventListener('load', iniciarJuego);


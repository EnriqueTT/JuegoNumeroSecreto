let numeroSecreto=0;
let numeroDeIntentos=1;
let listaNumeros=[];
let numeroMaximo=10;
let numeroActual=0;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    //let numeroUsuario2 =document.querySelector('input');
    let numeroUsuario =parseInt(document.getElementById ('valorUsuario').value);
    if (numeroUsuario<11 && numeroUsuario>0){
        numeroActual=numeroUsuario;
        if (numeroSecreto===numeroUsuario){
            asignarTextoElemento("p",`Adivinaste el número secreto en ${numeroDeIntentos} ${(numeroDeIntentos===1)? "intento" : "intentos"}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#intento').setAttribute('disabled','true');
        }else{
            // if(numeroUsuario>numeroSecreto){
            //     asignarTextoElemento("p","El número secreto es menor");
            // }else{
            //     asignarTextoElemento("p","El número secreto es mayor");
            // }
            asignarTextoElemento("p",`El número secreto es ${(numeroUsuario>numeroSecreto)? "menor":"mayor"} `);
            numeroDeIntentos++;
            limpiarCaja();
        }
    }else{
        /*  Poniendo en practica los condicionales dentro de la cadena de texto
            Esta condición se cumple cuando el cuadro está vacío y hacen click en intentar
        */
            //asignarTextoElemento("p",`No ingresaste un número valido \n ${(numeroActual>0)? `El último número fue: ${numeroActual}`: "Vuelve a intenterlo"}`);
            asignarTextoElemento("p",`No ingresaste un número valido. ${(numeroActual>0)? ` El último número fue: ${numeroActual} ${(numeroActual>numeroSecreto)? "> al secreto":"< al secreto"}`: "Vuelve a intenterlo"}`);
    }
    
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    return;
}
function generadorNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // console.log(numeroGenerado);
    console.log(listaNumeros);
    if (listaNumeros.length==numeroMaximo){
        //asignarTextoElemento("p","Se acabaron los números");
        listaNumeros=[];
        return generadorNumeroSecreto();
    }else{
        if(listaNumeros.includes(numeroGenerado)){
            return generadorNumeroSecreto();
        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Adivina el Número Secreto!!');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generadorNumeroSecreto();
    numeroDeIntentos=1;
    numeroActual=0;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('intento').removeAttribute('disabled');
}

condicionesIniciales();
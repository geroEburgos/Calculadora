function agregarNumeroUno() {
    document.querySelector('.result').innerText += '1'
}

function agregarNumeroDos() {
    document.querySelector('.result').innerText += '2'
}

function agregarNumeroTres() {
    document.querySelector('.result').innerText += '3'
}

function agregarNumerCuatro() {
    document.querySelector('.result').innerText += '4'
}
function agregarNumerCinco() {
    document.querySelector('.result').innerText += '5'
}
function agregarNumerSeis() {
    document.querySelector('.result').innerText += '6'
}
function agregarNumerSiete() {
    document.querySelector('.result').innerText += '7'
}
function agregarNumerOcho() {
    document.querySelector('.result').innerText += '8'
}
function agregarNumerNueve() {
    document.querySelector('.result').innerText += '9'
}
function agregarNumeroCero() {
    document.querySelector('.result').innerText += '0'
}
function agregarNumeroDoblecero() {
    document.querySelector('.result').innerText += '00'
}
function suma() {
    document.querySelector('.result').innerText += '+'
}

function resta() {
    document.querySelector('.result').innerText += '-'
}

function multiplicar() {
    document.querySelector('.result').innerText += '*'
}
function dividir() {
    document.querySelector('.result').innerText += '/'
}
function porcentaje() {
    document.querySelector('.result').innerText += '%'
}
function limpiar() {
    document.querySelector('.result').innerText = ''
    //variable
}
//function limpiarCaracter() {
  //  document.querySelector('.result').innerText -= ''
//}
function punto() {
    document.querySelector('.result').innerText += '.'
}

function igual() {
   var cuenta = document.querySelector('.result').innerText
    console.log(cuenta)
    console.log(cuenta + 3) //solucionar que pueda hacer la cuenta con un tipo de dato numerico
    console.log(cuenta +78)
    console.log (eval (cuenta))
    var cuenta = document.querySelector('.result').innerText = eval(cuenta)
  

}


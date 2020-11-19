const { createBlock } = require("vue");

console.log("Hola de nuevo");

// Variables: var y let
// var: tendrá valores variables
// let: constante

// Te detectera el tipo de variable, de acuerdo al valor que tenga
var mes = 'Octubre'; // texto
mes = 10; // number
console.log(typeof(mes));

document.createElement("p");
var p = document.getElementById("p");
p.style.display = inlineBlock;
p.style.background = orange;
p.style.width = 50;

var hola = null;

console.log(hola);

console.log(document);
document.title = 'Prueba';

// Metodo
function suma(a, b) {
    debugger;
    alert("mi ensaje");
    document.getElementById('resultado').innerHTML = a + b;
}

// div metodo
var imprimir = function(par) {
    document.getElementById("valor").innerHTML = par;
}

var aumentar = function() {
    localStorage.cuenta++;
    imprimir(localStorage.cuenta);
}
var reiniciar = function() {
    localStorage.cuenta = 0;
    imprimir(localStorage.cuenta);
}
var eliminar = function() {
    localStorage.removeItem("cuenta");
    imprimir(localStorage.cuenta);
}


if (typeof(Object) != "undefined") {
    if (localStorage.cuenta) {
        imprimir(localStorage.cuenta);
    } else {
        localStorage.cuenta = 0;
    }
}
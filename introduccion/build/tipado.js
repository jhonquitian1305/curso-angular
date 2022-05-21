// Boolean
let esValido = true;
esValido = false;
// Number
let edad = 12;
// String
let nombre = 'Gustavo';
let apellido = 'López';
let nombre_completo = `${nombre} ${apellido}`;
// Array
let numeros = [12, 3, 5, 7, 9];
let numeros2 = [14, 6, 9, 8];
// Tupla
let sitio = ['Casa', 28008];
// Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = -1] = "Offline";
    Estado[Estado["Indefinido"] = 0] = "Indefinido";
    Estado[Estado["Online"] = 1] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
// Unknown
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = true;
let nuevaCadena = 'Esto es otra cadena';
// nuevaCadena = sinTipo;
// Any
let tipoIndefinido = 'Esto es un mensaje';
nuevaCadena = tipoIndefinido;
// Void
function logger() {
    console.log('Logger');
}

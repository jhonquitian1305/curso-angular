/* function sumar(a, b){
    return a + b;
} */
const sumar = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
// let numero = sumar2(4, 5);
// console.log(numero);
// Parámetros opcionales y valores por defecto
function nombreCompleto(nombre, apellido) {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
console.log(nombreCompleto('Pedro'));
console.log(nombreCompleto('Mario', 'Romero'));
function nombresCompletos(nombre, apellido = 'Gomez') {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
console.log(nombresCompletos('Carlos'));
console.log(nombresCompletos('Jose', 'Perez'));
// Parámetros REST
function nombreCompleto2(nombre, ...restoNombre) {
    return nombre + " " + restoNombre.join(' ');
}
console.log(nombreCompleto2('Ana', 'María', 'Dolores', 'García', 'Ramírez'));

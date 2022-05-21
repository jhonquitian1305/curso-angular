// Boolean
let esValido: boolean = true;
esValido = false;

// Number
let edad: number = 12;

// String
let nombre: string = 'Gustavo';
let apellido: string = 'López';

let nombre_completo: string = `${nombre} ${apellido}`

// Array
let numeros: number[] = [12, 3, 5, 7, 9];
let numeros2: Array<Number> = [14, 6, 9, 8];

// Tupla
let sitio: [string, number] = ['Casa', 28008];

// Enum
enum Estado {
    Offline = -1,
    Indefinido = 0,
    Online = 1
}

let stat: Estado= Estado.Online;
console.log(stat);

// Unknown
let sinTipo: unknown = 'Hola';
sinTipo = 32;
sinTipo = true;

let nuevaCadena: string = 'Esto es otra cadena';
// nuevaCadena = sinTipo;

// Any
let tipoIndefinido: any = 'Esto es un mensaje';
nuevaCadena = tipoIndefinido;

// Void
function logger(): void {
    console.log('Logger')
}
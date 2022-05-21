function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Rosa', apellido: 'García', edad: 45 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}, Modelo: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    else {
        console.log('El coche no tiene color');
    }
}
mostrarCoche({ marca: 'Mercedes', modelo: 'C180' });
mostrarCoche({ marca: 'Mercedes', modelo: 'Ty121', color: 'rojo' });
let p1 = { x: 20, y: 45 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('Hola', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}
class Nino {
}

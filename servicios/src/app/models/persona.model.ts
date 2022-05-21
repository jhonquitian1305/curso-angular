export class Persona{
    nombre: string;
    apellidos: string;
    edad: number;
    activo: boolean;

    constructor(pNombre: string = '', pApellidos: string = '', pEdad: number = 0, pActivo: boolean = true){
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
        this.activo = pActivo;
    }
}
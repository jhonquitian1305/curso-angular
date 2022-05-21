export class Empleado{
    nombre: string;
    apellidos: string;
    edad: number;
    departamento: string;
    password: string;
    imagen: string;
    email: string;

    constructor(nombre: string = '', apellidos: string = '', edad: number = 0, departamento: string = '', password: string = '', imagen = '', email: string = ''){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.departamento = departamento;
        this.password = password;
        this.imagen = imagen;
        this.email = email;
    }
}
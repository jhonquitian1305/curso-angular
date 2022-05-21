export class Producto{
    nombre: string;
    cantidad: number;
    departamento: string;
    
    constructor(pNombre: string = '', pCantidad: number = 0, pDepartamento: string = ''){
        this.nombre = pNombre;
        this.cantidad = pCantidad;
        this.departamento = pDepartamento;
    }

}
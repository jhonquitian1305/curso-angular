export class Tarea {
    titulo: string;
    descripcion: string;
    completa: boolean;

    constructor(pTitulo: string = '', pDescripcion: string = ''){
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.completa = false;
    }
}
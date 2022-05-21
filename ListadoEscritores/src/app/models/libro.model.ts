export class Libro{
    id: number;
    titulo: string;
    imagen: string;
    publicado: number;
    escritor: number;

    constructor(pId: number = 0, pTitulo: string = '', pImagen: string = '', pPublicado: number = 0, pEscritor: number = 0){
        this.id = pId;
        this.titulo = pTitulo;
        this.imagen = pImagen;
        this.publicado = pPublicado;
        this.escritor = pEscritor;
    }
}
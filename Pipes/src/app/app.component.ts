import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // CurrencyPipe
  precio: number;

  // DecimalPipe
  numero: number;

  // DatePipe
  fechaActual: Date;

  // PercentPipe
  numAleatorio: number;

  // JSONPipe
  estudiante: any;

  // Lower, Upper, Title
  texto: string;

  // SlicePipe
  animales: string[];
  minimo: number = 0;
  maximo: number;

  // AsyncPipe
  prom: Promise<string>;
  promPosts: Promise<any[]>;

  constructor(
    private postsService: PostsService
  ){
    this.precio = 185.52;
    this.numero = 3.5484841;
    this.fechaActual = new Date();
    this.numAleatorio = Math.random();
    this.estudiante = {
      nombre: 'Jorge',
      apellidos: 'Suárez',
      notas: [3, 5, 8, 5]
    }
    this.texto = 'En un lugar de la Mancha';
    this.animales = ['perro', 'gato', 'pájaro', 'tortuga'];
    this.maximo = this.animales.length;

    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('se resuelve la promesa pasados 4 segundos'), 4000)
    });

    this.promPosts = this.postsService.getAll();
  }

  ngOnInit(){
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000)
  }

}

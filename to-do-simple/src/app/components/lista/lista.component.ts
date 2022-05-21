import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() {
    this.tareas = [];
  }

  ngOnInit(): void {
  }

  mostrarTareas(){
    let resultado = `<ul>`;
    for(let tarea of this.tareas){
      resultado += `<li>${tarea.titulo} - ${tarea.descripcion}</li>`
    }
    resultado += `</ul>`;
    return resultado;
  }

}

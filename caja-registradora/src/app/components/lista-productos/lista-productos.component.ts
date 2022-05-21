import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];
  @Output() productoSeleccionado: EventEmitter<Producto>;

  constructor() {
    this.titulo = '';
    this.productos = [];
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pProducto: Producto){
    this.productoSeleccionado.emit(pProducto);
  }

}

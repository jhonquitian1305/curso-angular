import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(
    private empleadosServices: EmpleadosService
  ) {
    this.empleados = [];
  }

  ngOnInit(): void {
    this.empleadosServices.getAll()
      .then(arrEmpleados => {
        this.empleados = arrEmpleados;
      })
  }

}

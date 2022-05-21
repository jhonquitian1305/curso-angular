import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  // Para reconocer el id de la ruta
  empleadoId: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Se trae el id que se pasa por la ruta
    this.activatedRoute.params.subscribe(params => {
      this.empleadoId = params['empleadoId'];
    });
  }

}

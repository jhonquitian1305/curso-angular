import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  empleadoId: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Para acceder al id desde la ruta hija
    this.activatedRoute.parent?.params.subscribe(params => {
      this.empleadoId = params['empleadoId'];
    })
  }

}

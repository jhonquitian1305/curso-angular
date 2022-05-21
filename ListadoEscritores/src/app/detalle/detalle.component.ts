import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  escritor: Escritor = {
    id: 0,
    nombre: '',
    apellidos: '',
    imagen: '',
    pais: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params['escritorId']);
      this.escritor = await this.escritoresService.getById(parseInt(params['escritorId']))
    })
  }

}

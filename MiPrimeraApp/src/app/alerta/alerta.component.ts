import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input('texto') mensaje: string;
  @Input() subtitulo: string;
  
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.mensaje = 'Mensaje de la alerta por defecto';
    this.subtitulo = 'Valor del subtítulo';

    this.alertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.alertaPulsada.emit('La alerta ha sido pulsada');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() { 
    this.mensaje = 'Este es el mensaje inicial'
  }

  ngOnInit(): void {
  }

  // Identificando el evento
  onClick($event){
    console.log('Se ha pulsado el botón');
    console.log($event);
  }


  onChange($event){
    console.log($event.target.value)
  }

  onMouseEnter(){
    // console.log('Entro en el div');
    this.mensaje = 'Estoy dentro del div';
  }

  onMouseOut(){
    this.mensaje = 'Saliendo del div';
  }

  onChangeInput($event){
    // console.log($event.target.value);
  }

  onInput($event){
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }

  onFocus(){
    console.log('Recibe el foco');
  }

  onBlur(){
    console.log('Pierde el foco');
  }

}

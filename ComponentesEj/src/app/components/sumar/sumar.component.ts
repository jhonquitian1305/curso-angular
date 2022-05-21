import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  @Input() numero1: number = 0;
  @Input() numero2: number = 0;
  resultado: number = 0;

  constructor() {
    // this.numero1 = 80;
    // this.numero2 = 10;
  }

  ngOnInit(): void {
  }  

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

}

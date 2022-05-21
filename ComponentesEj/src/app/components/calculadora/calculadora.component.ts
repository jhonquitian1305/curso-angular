import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string = '';
  calculoFinalizado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // onClick($event: any){
  //   if(this.calculoFinalizado){
  //     this.resultado = $event.target.innerText;
  //     this.calculoFinalizado = false;
  //   }else{
  //     this.resultado += $event.target.innerText;
  //   }
  // }

  onClick(pValue: any){
    if(this.calculoFinalizado){
      this.resultado = pValue;
      this.calculoFinalizado = false;
    }else{
      this.resultado += pValue;
    }
  }

  onResultado(){
    this.resultado = eval(this.resultado);
    this.calculoFinalizado = true;
  }

}

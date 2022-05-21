import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() inicio: number= 10;
  @Output() terminaCronometro: EventEmitter<string>;
  contador: number = 0;
  
  constructor() {
    this.contador = 10;
    this.terminaCronometro = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio : 10;
  }

  cuentaRegresiva(){
    let interval = setInterval(() => {
      this.contador--;
      if(this.contador < 0){
        clearInterval(interval);
        this.contador = this.inicio;
        this.terminaCronometro.emit(`Finaliza el cronómetro con el número ${this.inicio}`);
      }
    }, 1000);
  }

}

import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() texto: string | undefined;

  constructor() {
    console.log('**** Estoy en el constructor');
    console.log('Lo uso para inicializar propiedades');
    console.log(`Texto: ${this.texto}`);
  }

  ngOnChanges(changes: SimpleChange){
    console.log('**** Estoy en el ngOnChanges');
    console.log(`Texto: ${this.texto}`);
    console.log(changes);
    console.log(`Valor anterior: ${changes.previousValue}. Valor actual: ${changes.currentValue}`);
  }

  ngOnInit(): void {
    console.log('**** Estoy en el ngOnInit');
    console.log('Lo uso para lanzar las acciones que arrancan el componente');
    console.log(`Texto: ${this.texto}`);
  }

  ngAfterViewInit(){
    console.log('**** Estoy en el ngAfterViewInit');
    console.log('Lo uso para lanzar acciones iniciales dentro de la plantilla');
  }

  ngOnDestroy(){
    
  }

}

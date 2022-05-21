import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  propiedadesParrafo: any;

  mostrar: boolean

  constructor(){
    this.propiedadesParrafo = {
      color: 'red',
      fontSize: '24px'
    }

    this.mostrar = true;
  }

  cambiaColor(pColor: string){
    switch(pColor){
      case 'a':
        this.propiedadesParrafo.color = 'yellow';
        break;
      case 'r':
        this.propiedadesParrafo.color = 'red';
        break;
      case 'v':
        this.propiedadesParrafo.color = 'green';
        break;
    }
  }

  onChange($event: any){
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`;
  }

  onClickMostrar(){
    this.mostrar = !this.mostrar;   
  }

}

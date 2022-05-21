import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    numeros: number[] = [];

    constructor() {
      this.numeros = [8, 12, 20, 45];
    }

    onTerminaCronometro($event: any){
      console.log($event);
    }

}

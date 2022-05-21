import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent {
  
  arrPersonas: Persona[] = [];

  constructor(private personasService: PersonasService){

  }

  ngOnInit(){
    this.arrPersonas = this.personasService.getAll();    
  }

  onClick(){
    this.personasService.create(new Persona('Nueva', 'García', 45, true));
  }

  async onClickActivas(){
    // this.personasService.activos()
    //   .then((arrTempPersonas) => console.log(arrTempPersonas))
    //   .catch(err => console.log(err))
    try {
      this.arrPersonas = await this.personasService.activosV2();      
    } catch (error) {
      console.log(error)
    }
  }
}

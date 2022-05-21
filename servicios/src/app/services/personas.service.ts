import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable()
export class PersonasService {

  personas: Persona[];

  constructor() {
    this.personas = [
      new Persona('Mario', 'Rodríguez', 32, true),
      new Persona('Rocío', 'García', 15, false),
      new Persona('Laura', 'Robles', 28, true),
      new Persona('Lorenzo', 'Romero', 65, true),
    ];
  }

  getAll(){
    return this.personas;
  }

  create(personaNueva: Persona){
    this.personas.push(personaNueva)
  }

  activos(): Promise<Persona[]>{
    const promesa = new Promise<Persona[]>((resolve, reject) => {
      const arrTemporal: Persona[] = [];
      for(let persona of this.personas){
        if(persona.activo){
          arrTemporal.push(persona);
        }
      }
      resolve(arrTemporal);
    });
    return promesa;
  }

  activosV2(): Promise<Persona[]>{
    return new Promise((resolve, reject) => {
      const arrTemporal = this.personas.filter(persona => persona.activo);
      resolve(arrTemporal);
    });
  }
}

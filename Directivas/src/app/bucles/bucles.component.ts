import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas: any[];

  constructor() {
    this.personas = [
      { nombre: 'Emerita', apellidos: 'Pabón Herrera', calle: 'Carretera Cádiz-Málaga, 53', telefono: '659 676 533'},
      { nombre: 'Kenneth ', apellidos: 'Navarro Ordóñez', calle: 'Calle Carril de la Fuente, 17', telefono: '691 903 598'},
      { nombre: 'Emillen', apellidos: 'Villalpando Abeyta', calle: 'Inglaterra, 27', telefono: '677 191 348'},
      { nombre: 'Aglaya', apellidos: 'Mercado Pacheco', calle: 'C/ Cuesta del Álamo, 78', telefono: '647 606 366'},
      { nombre: 'Pacífico', apellidos: 'Benavides Bahena', calle: 'Cádiz, 65', telefono: '774 660 386'},
      { nombre: 'Filadelfo', apellidos: 'Chávez Ayala', calle: 'Valadouro, 63', telefono: '687 374 790'},
      { nombre: 'Icaro', apellidos: 'Serna Velázquez', calle: 'Plaza Maior, 31', telefono: '674 241 407'},
    ]
  }

  ngOnInit(): void {
  }

  onClick(){
    this.personas.push({
      nombre: 'Dulcinea', apellidos: 'Baez Nazario', calle: 'C/ Andalucía, 92', telefono: '791 958 158'
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[] = [];

  constructor(private escritoresServices: EscritoresService) {}

  async ngOnInit() {
    // this.arrEscritores = this.escritoresServices.getAll();
    // this.escritoresServices.getAllPromise()
    //   .then(escritores => {
    //     this.arrEscritores = escritores;
    //   })

    this.arrEscritores = await this.escritoresServices.getAllPromise();
  }

  async onChange($event: any){
    if($event.target.value === 'todos'){
      this.arrEscritores = await this.escritoresServices.getAllPromise();
    }else{
      this.arrEscritores = await this.escritoresServices.getByPais($event.target.value);
    }    
  }

}

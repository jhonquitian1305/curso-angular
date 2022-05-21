import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formNewEmpleado: FormGroup;

  constructor(
    private empleadosService: EmpleadosService
  ) {
    this.formNewEmpleado = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      edad: new FormControl('', [
      ]),
      departamento: new FormControl(''),
      password: new FormControl(''),
      imagen: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formNewEmpleado.value);
    this.empleadosService.insert(this.formNewEmpleado.value);
  }

}

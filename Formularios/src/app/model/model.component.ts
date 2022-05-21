import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('',[
        Validators.maxLength(10)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl('',),
      repite_password: new FormControl('',),
      email: new FormControl('',[
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      ])
    });
  }

  ngOnInit(): void {
    const emailControl = this.formulario.controls['email'];
    emailControl.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => console.log(value)
    })
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

  edadValidator(formControl: any){
    const value = formControl.value;
    
    const max = 65;
    const min = 18;

    if(value >= min && value <= max){
      return null;      
    }else{
      return {edadValidator: {max, min}};
    }
  }

  dniValidator(formControl: any){
    const value = formControl.value;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if(/^\d{8}[a-zA-Z]$/.test(value)){
      const numero = value.substr(0, value.length - 1);
      const letra = value.charAt(value.length - 1);

      const calculo = numero % 23;

      const letraSeleccionada = letras.charAt(calculo);
      if(letra.toUpperCase() === letraSeleccionada){
        return null;        
      }else{
        return { dniValidator: 'La letra no coincide con el número' };
      }
    }else{
      return { dniValidator: 'El dni no tiene el formato correcto' };
    }
  }
}

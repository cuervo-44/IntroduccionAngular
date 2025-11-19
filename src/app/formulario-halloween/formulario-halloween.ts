import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-formulario-halloween',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule],
  templateUrl: './formulario-halloween.html',
  styleUrl: './formulario-halloween.css'
})
export class FormularioHalloween {

  formulario: FormGroup;

  invitados = [
    { nombre: 'Opción 1', valor: 'opcion1' },
    { nombre: 'Opción 2', valor: 'opcion2' },
    { nombre: 'Opción 3', valor: 'opcion3' }

  ]

  constructor(private fb: FormBuilder) {
     this.formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [, Validators.required, Validators.email]],
    edad: ['', Validators.required],
    pais: ['',Validators.required ],
    aceptaCondiciones: ['', ],
    comentario: ['', ]
    });
  }


  mostrar() {
    if (this.formulario.invalid) {
      console.log("Estu mete miedo")
    
    }else {
      console.log(this.formulario.value);
    }
  }
}  

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrls: ['./identificacion-usuario.component.css']
})
export class IdentificacionUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required,]]
    });
  }

  IdentificarUsuario() {
    if (this.fGroup.invalid) {
      alert("Datos incompletos");
    } else {
      let usuario = this.obtenerFormGroup['usuario'].value;
      let clave = this.obtenerFormGroup['clave'].value;
    }
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }

}

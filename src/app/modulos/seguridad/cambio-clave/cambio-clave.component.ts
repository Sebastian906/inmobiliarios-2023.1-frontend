import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {

  }

  ngOnInit() {
    this.fGroup = this.fb.group({
      usuario: ['',[Validators.required, Validators.email]]
    });
  }

  CambiarClave() {
    if(this.fGroup.invalid) {
      alert("Debe ingresar la nueva contraseña del usuario");
    } else {
      let usuario = this.obtenerFormGroup["usuario"].value;
      this.servicioSeguridad.CambiarClavePorUsuario(usuario).subscribe({
        next: (datos:UsuarioModel) => {
          alert("Se ha cambiado la contraseña" + datos.clave)
        },
        error: (err) => {
          alert("Ha ocurrido un error cambiando la contraseña.")
        }
      });
    }
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }

}

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';
import { AsesorModel } from 'src/app/modelos/asesor.model';


@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb : FormBuilder,
    private servicioParametro : InmuebleService,
    private router : Router
  ){

  }

  ngOnInit() {
    this.ConstruirFormularioAsesor();
  }

  ConstruirFormularioAsesor() {
    this.fGroup = this.fb.group({
      nombres: ['', [Validators.required, Validators.toString]],
      apellidos: ['', [Validators.required, Validators.toString]],
      telefono: ['', [Validators.required, Validators.toString]],
      ciudad: ['', [Validators.required, Validators.toString]],
      email: ['', [Validators.required, Validators.email]],
      fechaDeNacimiento: ['', [Validators.required, Validators.toString]],
      cedula: ['', [Validators.required, Validators.toString]]
    });
  }

  guardarAsesor() {
    if (this.fGroup.invalid) {
      alert("Datos incompletos");
    } else {
      let nombres = this.obtenerFormGroup['nombres'].value;
      let apellidos = this.obtenerFormGroup['apellidos'].value;
      let telefono = this.obtenerFormGroup['telefono'].value;
      let ciudad = this.obtenerFormGroup['ciudad'].value;
      let email = this.obtenerFormGroup['email'].value;
      let fechaDeNacimiento = this.obtenerFormGroup['fechaDeNacimiento'].value;
      let cedula = this.obtenerFormGroup['cedula'].value;

      this.servicioParametro.guardarAsesor(nombres, apellidos, telefono, ciudad, email, fechaDeNacimiento, cedula).subscribe({
        next: (datos: AsesorModel) => {
          //if(datos._id == undefined || datos._id == null){
          //  alert("Datos incorrectos");
          //}else{
            //this.servicioParametro.guardarAsesor()
            //console.log(datos);
            //if(this.servicioParametro.AlmacenarDatosAsesorIdentificado(datos)){
            //this.router.navigate(["guardar-asesor"])
            //}
          //}
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }


}

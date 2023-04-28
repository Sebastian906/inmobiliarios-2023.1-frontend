import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-verificacion-dosfa',
  templateUrl: './verificacion-dosfa.component.html',
  styleUrls: ['./verificacion-dosfa.component.css']
})
export class VerificacionDosfaComponent {

  usuarioId: string="";
  fGroup:FormGroup = new FormGroup({});

  constructor(
    private servicioSeguridad : SeguridadService,
    private fb : FormBuilder){

  }

  ngOnInit(){
    let datos = this.servicioSeguridad.ObtenerDatosUsuarioLS();
    if(datos != null){
      this.usuarioId = datos._id!;
      this.ConstruirFormulario();
    }
  }

  ConstruirFormulario(){
    this.fGroup = this.fb.group({
      codigo: ['', [Validators.required]]
    });
  }

  ValidarCodigo2fa(){
    if(this.fGroup.invalid){
      alert("Debe ingresar el codigo");
    }else {
    let codigo2fa = this.ObtenerFormGroup["codigo"].value;
    }
  }

  get ObtenerFormGroup(){
    return this.fGroup.controls;
  }
}

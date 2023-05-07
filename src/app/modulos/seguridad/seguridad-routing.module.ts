import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperacionClaveComponent } from './recuperacion-clave/recuperacion-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { VerificacionDosfaComponent } from './verificacion-dosfa/verificacion-dosfa.component';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';
import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico/validar-hash-usuario-publico.component';

const routes: Routes = [
  {
    path: "identificar-usuario",
    component: IdentificacionUsuarioComponent
  },
  {
    path: "cambiar-clave",
    component: CambioClaveComponent
  },
  {
    path: "recuperar-clave",
    component: RecuperacionClaveComponent
  },
  {
    path: "cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path: "2fa",
    component: VerificacionDosfaComponent
  },
  {
    path: "registro-publico",
    component: RegistroPublicoUsuariosComponent
  },
  {
    path: "validar-hash-usuario-publico/?hash",
    component: ValidarHashUsuarioPublicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }

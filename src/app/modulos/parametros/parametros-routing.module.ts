import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';

const routes: Routes = [
  {
    path: "inmueble-listar",
    component: ListarInmuebleComponent
  },

  {
    path: "guardar-asesor",
    component: CrearAsesorComponent
  },
  {
    path: "crear-asesor",
    component: CrearAsesorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }

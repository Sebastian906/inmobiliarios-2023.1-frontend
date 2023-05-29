import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';

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
  },
  {
    path: "detalles-inmueble/:id",
    component: ListarInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }

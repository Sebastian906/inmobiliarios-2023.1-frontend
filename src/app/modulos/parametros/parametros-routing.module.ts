import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';

const routes: Routes = [
  {
    path: "inmueble-listar",
    component: ListarInmuebleComponent
  },
  {
    path: "inmueble-agregar",
    component: CrearInmuebleComponent
  },
  {
    path: "inmueble-eliminar/:id",
    component: EliminarInmuebleComponent
  },
  {
    path: "inmueble-editar/:id",
    component: EditarInmuebleComponent
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

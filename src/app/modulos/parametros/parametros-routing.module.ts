import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { ListarSolicitudComponent } from './solicitud/listar-solicitud/listar-solicitud.component';

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
  },
  {
    path: "cliente-agregar",
    component: CrearClienteComponent
  },
  {
    path: "cliente-editar/:id",
    component: EditarClienteComponent
  },
  {
    path: "cliente-listar/:id",
    component: ListarClienteComponent
  },
  {
    path: "cliente-eliminar/:id",
    component: EliminarClienteComponent
  },
  {
    path: "solicitud-listar/:id",
    component: ListarSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }

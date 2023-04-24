import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearCodeudorComponent } from './codeudor/crear-codeudor/crear-codeudor.component';
import { EditarCodeudorComponent } from './codeudor/editar-codeudor/editar-codeudor.component';
import { EliminarCodeudorComponent } from './codeudor/eliminar-codeudor/eliminar-codeudor.component';
import { ListarCodeudorComponent } from './codeudor/listar-codeudor/listar-codeudor.component';
import { CrearTipoSolicitudComponent } from './tipoSolicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './tipoSolicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './tipoSolicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './tipoSolicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudComponent } from './solicitud/listar-solicitud/listar-solicitud.component';
import { CrearEstadoSolicitudComponent } from './estadoSolicitud/crear-estado-solicitud/crear-estado-solicitud.component';
import { EditarEstadoSolicitudComponent } from './estadoSolicitud/editar-estado-solicitud/editar-estado-solicitud.component';
import { EliminarEstadoSolicitudComponent } from './estadoSolicitud/eliminar-estado-solicitud/eliminar-estado-solicitud.component';
import { ListarEstadoSolicitudComponent } from './estadoSolicitud/listar-estado-solicitud/listar-estado-solicitud.component';
import { CrearTipoInmuebleComponent } from './tipoInmueble/crear-tipo-inmueble/crear-tipo-inmueble.component';
import { EditarTipoInmuebleComponent } from './tipoInmueble/editar-tipo-inmueble/editar-tipo-inmueble.component';
import { EliminarTipoInmuebleComponent } from './tipoInmueble/eliminar-tipo-inmueble/eliminar-tipo-inmueble.component';
import { ListarTipoInmuebleComponent } from './tipoInmueble/listar-tipo-inmueble/listar-tipo-inmueble.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { ListarAsesorComponent } from './asesor/listar-asesor/listar-asesor.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearFotoInmuebleComponent } from './fotoInmueble/crear-foto-inmueble/crear-foto-inmueble.component';
import { EditarFotoInmuebleComponent } from './fotoInmueble/editar-foto-inmueble/editar-foto-inmueble.component';
import { EliminarFotoInmuebleComponent } from './fotoInmueble/eliminar-foto-inmueble/eliminar-foto-inmueble.component';
import { ListarFotoInmuebleComponent } from './fotoInmueble/listar-foto-inmueble/listar-foto-inmueble.component';
import { CrearVideoComponent } from './video/crear-video/crear-video.component';
import { EditarVideoComponent } from './video/editar-video/editar-video.component';
import { EliminarVideoComponent } from './video/eliminar-video/eliminar-video.component';
import { ListarVideoComponent } from './video/listar-video/listar-video.component';


@NgModule({
  declarations: [
    CrearCodeudorComponent,
    EditarCodeudorComponent,
    EliminarCodeudorComponent,
    ListarCodeudorComponent,
    CrearTipoSolicitudComponent,
    EditarTipoSolicitudComponent,
    EliminarTipoSolicitudComponent,
    ListarTipoSolicitudComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    ListarSolicitudComponent,
    CrearEstadoSolicitudComponent,
    EditarEstadoSolicitudComponent,
    EliminarEstadoSolicitudComponent,
    ListarEstadoSolicitudComponent,
    CrearTipoInmuebleComponent,
    EditarTipoInmuebleComponent,
    EliminarTipoInmuebleComponent,
    ListarTipoInmuebleComponent,
    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    ListarAsesorComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    ListarClienteComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent,
    ListarInmuebleComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
    ListarDepartamentoComponent,
    CrearCiudadComponent,
    EditarCiudadComponent,
    EliminarCiudadComponent,
    ListarCiudadComponent,
    CrearFotoInmuebleComponent,
    EditarFotoInmuebleComponent,
    EliminarFotoInmuebleComponent,
    ListarFotoInmuebleComponent,
    CrearVideoComponent,
    EditarVideoComponent,
    EliminarVideoComponent,
    ListarVideoComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }

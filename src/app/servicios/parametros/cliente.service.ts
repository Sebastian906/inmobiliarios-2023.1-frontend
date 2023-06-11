import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { PaginadorClienteModel } from 'src/app/modelos/paginador.cliente.model';
import { SeguridadRoutingModule } from 'src/app/modulos/seguridad/seguridad-routing.module';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
=======
export class InmuebleService {
  token= "";
  urlBase : string = ConfiguracionRutasBackend.urlParametros;
  constructor(private http: HttpClient, private servicioSeguridad: SeguridadService) { 
    this.token = this.servicioSeguridad.ObtenertokenLocalStorage();
  }

  listarRegistros(pag: number): Observable<PaginadorInmuebleModel>{
    let limit = ConfiguracionPaginacion.registroPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}inmueble?filter={"limit":${limit}, "skip":${skip}}`
    return this.http.get<PaginadorInmuebleModel>(url);
  }
}
>>>>>>> 714ec0c52b4da33fbe0101f3b4b0bc1eb6a848aa

export class ClienteService {
  urlBase : string = ConfiguracionRutasBackend.urlParametros;
  constructor(private http: HttpClient) { }

  listarRegistros(pag: number): Observable<PaginadorClienteModel>{
    let limit = ConfiguracionPaginacion.registroPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorClienteModel>(`${this.urlBase}cliente?filter={"limit":${limit}, "skip":${skip}}`);
  }
}

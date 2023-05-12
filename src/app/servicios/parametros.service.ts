import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleModel } from '../modelos/inmueble.model';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  /**
   * Listado de Inmuebles
   * @returns
   */
  listarRegistros():Observable<InmuebleModel[]>{
    return this.http.get<InmuebleModel[]>(`${this.urlBase}inmueble?filter={"limit":${ConfiguracionPaginacion.registroPorPagina}}`);
  }
}

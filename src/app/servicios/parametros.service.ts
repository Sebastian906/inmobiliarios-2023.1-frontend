<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { AsesorModel } from '../modelos/asesor.model';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { Observable } from 'rxjs';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleModel } from '../modelos/inmueble.model';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';
>>>>>>> d3645eaab4474b305f95c725c8af3da18c1298c9

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
<<<<<<< HEAD
  urlBase : string = ConfiguracionRutasBackend.urlParametros
  constructor(private http: HttpClient) { }


  AlmacenarDatosAsesorIdentificado(datos: AsesorModel): boolean{
    let cadena = JSON.stringify(datos);
    let datosLS = localStorage.getItem("guardar-asesor");
    if(datosLS){
      return false;
    } else{
      localStorage.setItem("guardar-asesor", cadena);
      return true;
    }
  }
  guardarAsesor(nombres: string, apellidos: string, telefono: string, ciudad: string, email:string,fechaDeNacimiento:Date, cedula:string): Observable<AsesorModel> {
    return this.http.post<AsesorModel>(`${this.urlBase}/asesor`, {
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      ciudad: ciudad,
      email: email,
      fechaDeNacimiento: fechaDeNacimiento,
      cedula: cedula
    });
=======
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }

  /**
   * Listado de Inmuebles
   * @returns
   */
  listarRegistros():Observable<InmuebleModel[]>{
    return this.http.get<InmuebleModel[]>(`${this.urlBase}inmueble?filter={"limit":${ConfiguracionPaginacion.registroPorPagina}}`);
>>>>>>> d3645eaab4474b305f95c725c8af3da18c1298c9
  }
}

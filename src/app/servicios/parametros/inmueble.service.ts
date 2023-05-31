import { AsesorModel } from '../../modelos/asesor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleModel } from '../../modelos/inmueble.model';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  urlBase : string = ConfiguracionRutasBackend.urlParametros
  constructor(private http: HttpClient) { }


    /**
   * Listado de Inmuebles
   * @returns
   */
  listarRegistros():Observable<InmuebleModel[]>{
    return this.http.get<InmuebleModel[]>(`${this.urlBase}inmueble?filter={"limit":${ConfiguracionPaginacion.registroPorPagina}}`);
  }

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
    }  
}

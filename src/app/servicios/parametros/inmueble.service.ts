import { AsesorModel } from '../../modelos/asesor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  urlBase : string = ConfiguracionRutasBackend.urlParametros;
  constructor(private http: HttpClient) { }

  listarRegistros(): Observable<InmuebleModel[]> {
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

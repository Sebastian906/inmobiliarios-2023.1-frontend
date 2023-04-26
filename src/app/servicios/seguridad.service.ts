import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor() { }

  urlBase: string = ConfiguracionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) {
    this.validacionDeSesion();
  }


  /**
   * Identificar usuario
   * @param usuario 
   * @param clave 
   * @returns datos del usuario validado
   */
  IdentificarUsuario(usuario: string, clave: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.urlBase}identificar-usuario`, {
      correo: usuario,
      clave: clave
    });
  }
}

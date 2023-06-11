import { Component } from '@angular/core';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listaRegistros: InmuebleModel[] = [];

  constructor(
    private servicio: InmuebleService
    ){
  }

  ngOnInit() {
    this.servicio.listarRegistros().subscribe({
      next: (datos) => {
        console.log(datos)
        this.listaRegistros = datos;
        console.log(this.listaRegistros)
      },
      error: (err) => {

      }
    })
  }

}

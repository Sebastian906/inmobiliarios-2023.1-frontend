import { Component } from '@angular/core';
import { AsesorModel } from 'src/app/modelos/asesor.model';

@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
})
export class ListarAsesorComponent {
  /*listaRegistros:AsesorModel[]=[];

  constructor(
    private servicioAsesores: ParametrosService
  ){

  }

  ngOnInit(){
    this.servicioAsesores.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {
        alert("Error leyendo la información.")
      }
    });
  }*/
}

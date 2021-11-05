import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
   
  ]
})
export class PorPaisComponent {

  public termino: string = "Hola mundo";
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPaises(this.termino)
      .subscribe( (paises) => {
        console.log(JSON.stringify(paises, null, 4))
        this.paises = paises;
      }, (error: any) => {
        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }

  

}

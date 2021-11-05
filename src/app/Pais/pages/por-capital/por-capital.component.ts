import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = "Hola mundo";
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital( termino )    
      .subscribe(
        (paises) => {
          console.log(JSON.stringify(paises, null, 4));
          this.paises = paises;
        }, (error: any) => {
          this.hayError = true;
          this.paises = [];
        }
      )
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }

}

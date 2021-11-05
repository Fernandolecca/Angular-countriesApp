import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  paises: Country[] = [];
  regionActiva: string = '';

  constructor(
    private paisService: PaisService
  ) { }

  getClassCss(region: string) {
    return (region == this.regionActiva) ? 'btn btn-primary ' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
   if(region === this.regionActiva) return; 

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPaisPorRegion(region)
      .pipe(tap( console.log ))
      .subscribe( paises => this.paises = paises);
    // TODO: consumir servicio para cargar region
  }

}

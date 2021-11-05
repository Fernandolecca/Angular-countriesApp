import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private URL: string = "https://restcountries.eu/rest/v2";

  get params (): HttpParams {
    return new HttpParams()
      .set('fields', 'name;population;flag;alpha2Code');
  }

  constructor(
    private http: HttpClient    
  ) { }

  buscarPaises(termino: string): Observable<Country[]> {

    const url = `${this.URL}/name/${termino}`;

    return this.http.get<Country[]>(url); 

  }

  buscarCapital(termino: string): Observable<Country[]> { 
    const url = `${this.URL}/capital/${termino}`;

    return this.http.get<Country[]>(url); 

  }

  buscarPaisPorAlpha(codigoPais: string): Observable<Country> {
    const url = `${this.URL}/alpha/${codigoPais}`;

    return this.http.get<Country>(url);
  }

  buscarPaisPorRegion(region: string): Observable<Country[]> {
    const url = `${this.URL}/region/${region}`;

    return this.http.get<Country[]>(url ,{ params: this.params });
  }
}

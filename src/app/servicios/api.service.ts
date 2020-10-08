import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://restcountries.eu/rest/v2/region/europe');
  }

  cargarPeliculas() {
    return this.http.get('https://api.mockaroo.com/api/da585a60?count=30&key=7b4ed670');
  }
}

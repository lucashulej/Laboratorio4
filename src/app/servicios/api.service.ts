import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://restcountries.eu/rest/v2');
    //return this.http.get('https://api.mocki.io/v1/570c5e5c');
  }

  cargarPeliculas() {
    return this.http.get('https://api.mockaroo.com/api/da585a60?count=30&key=7b4ed670');
  }
}

import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  
  peliculas: Observable<any[]>;
  listaPeliculasListado: Pelicula[];
  pelicula;

  constructor(private db : AngularFireDatabase) {}

  ngOnInit(): void {
    this.peliculas = this.db.list('peliculas').valueChanges(); 
    this.peliculas.subscribe((peliculas:any) => {
      this.listaPeliculasListado = peliculas;
      console.log(this.listaPeliculasListado);
      this.listaPeliculasListado = this.listaPeliculasListado.filter(pelicula => pelicula.activo != false);
    }, error => console.log(error));
  }

  agarrarPelicula(pelicula:Pelicula) {
    this.pelicula = pelicula;
  }

  agarrarEliminarPelicula(pelicula:Pelicula) {
    //this.listaPeliculasListado = this.peliculasService.eliminarPelicula(pelicula);
    pelicula.activo = false;
    this.db.list('peliculas').set(pelicula.id.toString(),pelicula);
  }
}

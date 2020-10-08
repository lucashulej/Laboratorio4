import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor} from '../../clases/actor';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculas: Observable<any[]>;
  listaPeliculasBusqueda: Pelicula[];
  pelicula;

  constructor(private db : AngularFireDatabase) {}

  ngOnInit(): void {
    
    this.peliculas = this.db.list('peliculas').valueChanges(); 
    this.peliculas.subscribe((peliculas:any) => {
      this.listaPeliculasBusqueda = peliculas;
      console.log(this.listaPeliculasBusqueda);
      this.listaPeliculasBusqueda = this.listaPeliculasBusqueda.filter(pelicula => pelicula.activo != false);
    }, error => console.log(error));
    
   /*
   let actor:Actor = new Actor();
   actor.id = 6;
   actor.nombre = "Emma";
   actor.apellido = "Stone";
   actor.sexo = "femenino";
   actor.fechaDeNacimiento = "09/12/1968";
   actor.foto = "https://es.web.img3.acsta.net/pictures/15/05/15/16/30/134942.jpg";

    
        this.db.list('actores').set(actor.id.toString(),actor);
        */
  }

  agarrarPelicula(pelicula:Pelicula) {
    this.pelicula = pelicula;
  }
}

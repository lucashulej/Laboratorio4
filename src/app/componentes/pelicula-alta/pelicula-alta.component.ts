import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Actor} from '../../clases/actor';
import { PeliculasService } from '../../servicios/peliculas.service';
import { Pelicula } from 'src/app/clases/pelicula';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  actores: Observable<any[]>;
  listaActores: Actor[];
  pelicula:Pelicula = new Pelicula();
  constructor(private db : AngularFireDatabase, private peliculaService : PeliculasService, private http: HttpClient) {}

  ngOnInit(): void {
    this.actores = this.db.list('actores').valueChanges(); 
    this.actores.subscribe((actores:any) => {
      this.listaActores = actores;
      console.log(this.listaActores);
    }, error => console.log(error));
    this.pelicula.tipo = "comedia";
   
      this.http.get('https://restcountries.eu/rest/v2/region/europe').subscribe((data:any) => console.log(data));
    
  }

  agarrarActor(actor:Actor) {
    console.log(actor);
    if(!this.pelicula.actores.includes(actor.id)) {
      this.pelicula.actores.push(actor.id);
    }
    console.log(this.pelicula.actores);
  }

  crearPelicula() {
    if(this.pelicula.nombre != null && this.pelicula.fechaEstreno != null && this.pelicula.cantidadPublico != null && this.pelicula.actores.length != 0) {
      this.pelicula.id = this.peliculaService.obtenerIdParaAlta();
      this.pelicula.fotoPelicula = "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png";
      console.log(this.pelicula);
      this.peliculaService.subirPelicula(this.pelicula);
    }
  }
}

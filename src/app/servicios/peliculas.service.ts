import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Pelicula } from '../clases/pelicula';
import { PeliculaListadoComponent } from '../componentes/pelicula-listado/pelicula-listado.component';
import { ApiService} from '../servicios/api.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas: Observable<any[]>;
  listaPeliculas :any[];
  idAlta:number = 0;
  constructor(private db : AngularFireDatabase, private service:ApiService) {
    this.peliculas = this.db.list('peliculas').valueChanges(); 
    this.peliculas.subscribe((peliculas:any) => {
      this.listaPeliculas = peliculas;
      this.setearIdParaAlta();
    }, error => console.log(error));
  }

  setearIdParaAlta() {
    let aux = 0;
    for (const pelicula of this.listaPeliculas) {
      if(aux == 0) {
        this.idAlta = pelicula.id;
        continue;
      }
      if(this.idAlta < pelicula.id) {
        this.idAlta = pelicula.id;
      }
    }
    this.listaPeliculas
  }

  obtenerIdParaAlta() {
    return this.idAlta+1;
  }

  
/*
        let pelicula:Pelicula = new Pelicula();
        pelicula.id = 8;
        pelicula.nombre = "Yo Antes De Ti";
        pelicula.tipo = "amor";
        pelicula.fechaEstreno = "08/01/2008";
        pelicula.cantidadPublico = 75;
        pelicula.fotoPelicula = "https://i.pinimg.com/originals/bb/fd/ef/bbfdef754ec62e24c2cbc48894476263.jpg";
        pelicula.activo = true;
        pelicula.actor = "";
        console.log(pelicula);
        this.db.list('peliculas').set(pelicula.id.toString(),pelicula);
      */
    /*
    service.cargarPeliculas().subscribe((lista:any) =>  {

      this.listaPeliculas = lista;
      console.log(this.listaPeliculas);
     
      
      for(let i = 0; i < 30; i++) {
        let pelicula:Pelicula = this.listaPeliculas[i];
        pelicula.activo = true;
        pelicula.actor = "";
        console.log(pelicula);
        this.db.list('peliculas').set(pelicula.id.toString(),pelicula);
        console.log("pelicula subida");
      }
      
        
      
    });
    */
    
  

  obtenerLista() {
    return new Promise<any>((resolve, reject) => {
      this.peliculas.subscribe((peliculas:any) => {
        this.listaPeliculas = peliculas;
          resolve(this.peliculas)})  
    });
  }

  eliminarPelicula(pelicula:Pelicula) {
    return this.listaPeliculas.filter(auxPelicula => auxPelicula.id != pelicula.id);
  }

  cargar() {
    
    for (let pelicula of this.listaPeliculas) {
      this.db.list('peliculas').set(pelicula.id.toString(), {pelicula});
    }

   /*
    peliculas.map(pelicula => {
      this.db.list('peliculas').set(pelicula.id.toString(), {pelicula});
    });
    */
  }
}

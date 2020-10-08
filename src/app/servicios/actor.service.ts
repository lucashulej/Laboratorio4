import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';
import { ApiService} from '../servicios/api.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actores: Observable<any[]>;
  listaActores :any[];
  idAlta:number = 0;
  constructor(private db : AngularFireDatabase, private service:ApiService) {
    this.actores = this.db.list('actores').valueChanges(); 
    this.actores.subscribe((actores:any) => {
      this.listaActores = actores;
      this.setearIdParaAlta();
    }, error => console.log(error));
  }

  setearIdParaAlta() {
    let aux = 0;
    for (const actor of this.listaActores) {
      if(aux == 0) {
        this.idAlta = actor.id;
        continue;
      }
      if(this.idAlta < actor.id) {
        this.idAlta = actor.id;
      }
    }
  }

  obtenerIdParaAlta() {
    return this.idAlta+1;
  }

  subirActor(actor:Actor) {
    this.db.list('actores').set(actor.id.toString(),actor);
  }
}

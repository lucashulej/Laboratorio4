import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Actor} from '../../clases/actor';
import { ActorService } from '../../servicios/actor.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {

  actores: Observable<any[]>;
  listaActores: Actor[];
  actor:Actor = new Actor();
  

  constructor(private db : AngularFireDatabase, private actorService: ActorService) {}

  ngOnInit(): void {
    this.actores = this.db.list('actores').valueChanges(); 
    this.actores.subscribe((actores:any) => {
      this.listaActores = actores;
      console.log(this.listaActores);
    }, error => console.log(error));
    this.actor.sexo = "masculino";
  }

  crearActor() {
    //if(this.actor.nombre == "" || this.actor.apellido == "" || this.actor.fechaDeNacimiento == "" || this.actor.nacionalidad == "") {
      this.actor.id = this.actorService.obtenerIdParaAlta();
      this.actor.foto = "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png";
      this.actorService.subirActor(this.actor);
      console.log(this.actor);
    //}
  }

  agarrarPaisEmitido(pais:any) {
    console.log(pais);
    this.actor.nacionalidad = pais.name;
  }
}

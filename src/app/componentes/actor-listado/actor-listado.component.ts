import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor} from '../../clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  actores: Observable<any[]>;
  listaActores: Actor[];

  constructor(private db : AngularFireDatabase) {}

  ngOnInit(): void {
    this.actores = this.db.list('actores').valueChanges(); 
    this.actores.subscribe((actores:any) => {
      this.listaActores = actores;
      console.log(this.listaActores);
    }, error => console.log(error));
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActorService } from '../../servicios/actor.service';

@Component({
  selector: 'app-eliminar-actor',
  templateUrl: './eliminar-actor.component.html',
  styleUrls: ['./eliminar-actor.component.scss']
})
export class EliminarActorComponent implements OnInit {

  @Input() actor;

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
  }

  borrar(actor) {
    this.actorService.eliminarActor(actor);
    this.actor = null;
  }
}

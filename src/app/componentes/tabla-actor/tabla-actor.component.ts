import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Input() listaActores:[];
  @Output() actorEmitido: EventEmitter<any> = new EventEmitter();
  @Output() actorEliminar: EventEmitter<any> = new EventEmitter();
  @Output() actorModificar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitirActor(actor) {
    this.actorEmitido.emit(actor);
  }

  eliminarActor(actor) {
    this.actorEliminar.emit(actor);
  }

  modificarActor(actor) {
    this.actorModificar.emit(actor);
  }
}

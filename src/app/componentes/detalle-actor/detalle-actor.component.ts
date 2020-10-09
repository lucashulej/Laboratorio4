import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {

  @Input() actor;
  
  constructor() { }

  ngOnInit(): void {
  }

  limpiar() {
    this.actor=null;
  }
}

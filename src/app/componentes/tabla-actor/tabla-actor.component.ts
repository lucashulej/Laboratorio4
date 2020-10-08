import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Input() listaActores:[];

  constructor() { }

  ngOnInit(): void {
  }

}

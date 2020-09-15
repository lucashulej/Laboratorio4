import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.scss']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listado:[]; 
  @Output() emitirUsuario: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  detalle(usuario) {
    this.emitirUsuario.emit(usuario);
  }
}

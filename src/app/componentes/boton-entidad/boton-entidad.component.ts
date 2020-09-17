import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.scss']
})
export class BotonEntidadComponent implements OnInit {

  @Input() entidad;
  @Output() emitirBorrarUsuario: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarEntidad() {
    this.emitirBorrarUsuario.emit(this.entidad);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.scss']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() usuario;
  @Output() emitirBorrarUsuario: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  tomarUsuarioParaBorrar(usuario) {
    this.emitirBorrarUsuario.emit(usuario);
  }
}

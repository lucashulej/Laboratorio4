import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.scss']
})
export class BotonEntidadComponent implements OnInit {

  @Input() entidad;

  constructor() { }

  ngOnInit(): void {
  }

  borrarEntidad() {
    //borra entidad
  }
}

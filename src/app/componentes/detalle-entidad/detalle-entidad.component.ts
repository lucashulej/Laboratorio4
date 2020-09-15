import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.scss']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() usuario;

  constructor() { }

  ngOnInit(): void {}
}

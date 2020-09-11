import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.scss']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listado: []; 

  constructor() { }

  ngOnInit(): void {
  }

}

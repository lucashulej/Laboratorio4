import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-paises-bandera',
  templateUrl: './componente-paises-bandera.component.html',
  styleUrls: ['./componente-paises-bandera.component.scss']
})
export class ComponentePaisesBanderaComponent implements OnInit {

  @Input() paises:[]; 
  constructor() { }

  ngOnInit(): void {
  }

}

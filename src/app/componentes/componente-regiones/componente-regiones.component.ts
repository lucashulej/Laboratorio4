import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-regiones',
  templateUrl: './componente-regiones.component.html',
  styleUrls: ['./componente-regiones.component.scss']
})
export class ComponenteRegionesComponent implements OnInit {
  
  @Output() emitirRegion: EventEmitter<any> = new EventEmitter();
  region:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  emitir(region:string) {
    this.region = region;
    this.emitirRegion.emit(region);
  }
}

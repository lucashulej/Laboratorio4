import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listaPeliculas:[];
  @Output() emitirPelicula: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
  seleccionarEntidad(pelicula) {
    this.emitirPelicula.emit(pelicula);
  }
}

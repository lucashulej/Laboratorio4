import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula;
  @Input() Borrado;
  @Output() borrarPelicula: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(pelicula) {
    this.borrarPelicula.emit(pelicula);
  }

}

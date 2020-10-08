import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service'; 
@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  listaPaises:any[] = [];
  @Output() paisEmitido: EventEmitter<any> = new EventEmitter();
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data:any) => {
      console.log(data);
      for(let i = 0; i < 5; i++) {
        console.log(data[i]);
        this.listaPaises.push(data[i]);
      }
    });
  }

  emitirPais(pais) {
    this.paisEmitido.emit(pais);
    console.log("se emitio");
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
  styleUrls: ['./componente-principal.component.scss']
})
export class ComponentePrincipalComponent implements OnInit {

  listado = new Array();
  listadoFiltrado = new Array();

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((data:any) => {
      this.listado = data;
      console.log(this.listado);
      });
   }

   filtrarRegion(region) {
    this.listadoFiltrado = this.listado.filter(pais => pais.region == region);
    console.log(this.listadoFiltrado);
   }

  ngOnInit(): void {
  }

}

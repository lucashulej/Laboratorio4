import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.scss']
})
export class ControlEntidadComponent implements OnInit {

  listadoPadre: [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data:any) => {
    this.listadoPadre = data;
    console.log(this.listadoPadre);
    });
  }

 
}

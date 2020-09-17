import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.scss']
})
export class ControlEntidadComponent implements OnInit {

  listadoPadre = new Array();
  listadoPadreBorrado = new Array();
  usuarioParaDetalle:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((data:any) => {
    this.listadoPadre = data;
    console.log(this.listadoPadre);
    });
  }

  tomarUsuarioParaDetalle(usuario) {
    this.usuarioParaDetalle = usuario;
  }

  tomarUsuarioParaBorrar(usuario) {
    this.listadoPadre = this.listadoPadre.filter(usuarioAux => usuarioAux != usuario);
    if(!this.listadoPadreBorrado.includes(usuario)) {
      this.listadoPadreBorrado.push(usuario);
    }
    console.log(this.listadoPadreBorrado);
  }
 
}

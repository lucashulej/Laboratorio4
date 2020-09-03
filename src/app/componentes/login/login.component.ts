import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ///////////////////////////////////////////////////////
  edadUno: number;
  edadDos: number;
  promedio: number = 0;
  suma:number = 0;
  ///////////////////////////////////////////////////////

  usuario: Usuario = new Usuario();
  error : boolean = false;
  constructor() {}

  ngOnInit(): void {}

  hacerAlgo(): void {
    console.log(this.usuario.nombre);
    console.log(this.usuario.clave);
  }

  submitLogin() {
    if(this.usuario.nombre === "lucas" && this.usuario.clave === "123456") {

    }
    else {
      this.error = true;
    }
  }

  ///////////////////////////////////////////////////////
  calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  limpiar() {
    this.edadUno = null;
    this.edadDos = null;
    this.suma = 0;
    this.promedio = 0;
  }
  ///////////////////////////////////////////////////////
}

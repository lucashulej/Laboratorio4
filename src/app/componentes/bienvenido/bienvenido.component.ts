import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['entidad/principal']);
  }

}

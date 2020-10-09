import { Component, Input, OnInit } from '@angular/core';
import { ActorService } from '../../servicios/actor.service';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.scss']
})
export class ModificarActorComponent implements OnInit {

  @Input() actor;

  nombre:string ="";
  apellido:string ="";
  fechaDeNacimiento:Date =null;
  sexo:string ="";

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
   
  }
  ngOnChanges():void{
    this.nombre = this.actor.nombre;
    this.apellido = this.actor.apellido;
    this.fechaDeNacimiento = this.actor.fechaDeNacimiento;
    this.sexo = this.actor.sexo;
  }

  modificar() {
    this.actor.nombre = this.nombre;
    this.actor.apellido = this.apellido;
    this.actor.fechaDeNacimiento = this.fechaDeNacimiento;
    this.actor.sexo = this.sexo;
    this.actorService.subirActor(this.actor);
    this.actor = null;
  }
}

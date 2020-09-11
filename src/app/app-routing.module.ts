import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from 'src/app/componentes/bienvenido/bienvenido.component';
import { LoginComponent } from 'src/app/componentes/login/login.component';
import { ErrorComponent } from 'src/app/componentes/error/error.component';
import { ControlEntidadComponent } from 'src/app/componentes/control-entidad/control-entidad.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'bienvenido', component: BienvenidoComponent},
  //{path:'error', component: ErrorComponent},
  {path:'paises/listado', component: ControlEntidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

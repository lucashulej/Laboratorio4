import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from 'src/app/componentes/bienvenido/bienvenido.component';
import { LoginComponent } from 'src/app/componentes/login/login.component';
import { ErrorComponent } from 'src/app/componentes/error/error.component';

const routes: Routes = [
  {path:'', component: BienvenidoComponent},
  {path:'login', component: LoginComponent},
  {path:'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from 'src/app/componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from 'src/app/componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from 'src/app/componentes/pelicula-alta/pelicula-alta.component';
import { AltaActorComponent } from 'src/app/componentes/alta-actor/alta-actor.component';
import { ActorListadoComponent } from 'src/app/componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from 'src/app/componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: '', redirectTo: '/busqueda', pathMatch: 'full'},
  {path:'bienvenido', component: BienvenidoComponent},
  {path:'busqueda', component: BusquedaComponent},
  {path:'peliculas/altas', component: PeliculaAltaComponent},
  {path:'actor/alta', component: AltaActorComponent},
  {path:'actor/listado', component: ActorListadoComponent},
  {path:'peliculas/listado', component: PeliculaListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

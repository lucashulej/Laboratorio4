import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { HttpClientModule } from "@angular/common/http";
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './componentes/detalle-entidad/detalle-entidad.component';
import { BotonEntidadComponent } from './componentes/boton-entidad/boton-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    DetalleEntidadComponent,
    BotonEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

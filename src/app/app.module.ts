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
import { ComponentePrincipalComponent } from './componentes/componente-principal/componente-principal.component';
import { ComponenteRegionesComponent } from './componentes/componente-regiones/componente-regiones.component';
import { ComponentePaisesBanderaComponent } from './componentes/componente-paises-bandera/componente-paises-bandera.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    DetalleEntidadComponent,
    BotonEntidadComponent,
    ComponentePrincipalComponent,
    ComponenteRegionesComponent,
    ComponentePaisesBanderaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

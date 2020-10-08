import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';

var firebaseConfig = {
  apiKey: "AIzaSyC1LrNZxAXsDahHZIPzVMRhvU5A4voCf84",
  authDomain: "parcial-ccb1c.firebaseapp.com",
  databaseURL: "https://parcial-ccb1c.firebaseio.com",
  projectId: "parcial-ccb1c",
  storageBucket: "parcial-ccb1c.appspot.com",
  messagingSenderId: "987362515158",
  appId: "1:987362515158:web:0b9d6b795adf9727145177"
};

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    NavBarComponent,
    TablaActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

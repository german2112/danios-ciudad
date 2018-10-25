import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { FormaRegistroComponent } from './componentes/forma-registro/forma-registro.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistroexitosoComponent } from './componentes/registroexitoso/registroexitoso.component';
import { LoginExitosoComponent } from './componentes/login-exitoso/login-exitoso.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ReporteNuevoComponent } from './componentes/reporte-nuevo/reporte-nuevo.component';
import { ReporteExitosoComponent } from './componentes/reporte-exitoso/reporte-exitoso.component';
import { UserReportsComponent } from './componentes/user-reports/user-reports.component';
import { ContainerComponent } from './componentes/container/container.component';
import { RecientesComponent } from './componentes/recientes/recientes.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormaRegistroComponent,
    IniciarSesionComponent,
    RegistroexitosoComponent,
    LoginExitosoComponent,
    NavBarComponent,
    ReporteNuevoComponent,
    ReporteExitosoComponent,
    UserReportsComponent,
    ContainerComponent,
    RecientesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

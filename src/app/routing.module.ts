import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginExitosoComponent } from './componentes/login-exitoso/login-exitoso.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistroexitosoComponent } from './componentes/registroexitoso/registroexitoso.component';
import { FormaRegistroComponent } from './componentes/forma-registro/forma-registro.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ReporteNuevoComponent } from './componentes/reporte-nuevo/reporte-nuevo.component';
import { ReporteExitosoComponent } from './componentes/reporte-exitoso/reporte-exitoso.component';
import { UserReportsComponent } from './componentes/user-reports/user-reports.component';
import { ContainerComponent } from './componentes/container/container.component';
import { RecientesComponent} from './componentes/recientes/recientes.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login-exitoso', component: LoginExitosoComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'formulario-registro', component: FormaRegistroComponent },
  { path: 'registro-exitoso', component: RegistroexitosoComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'landing-page', component: LandingComponent },
  { path: 'reporte-nuevo', component: ReporteNuevoComponent },
  { path: 'reporte-exitoso', component: ReporteExitosoComponent },
  { path: 'user-reports', component: UserReportsComponent },
  { path: 'container', component: ContainerComponent},
  { path: 'recientes', component: RecientesComponent}
];

export const RoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, { enableTracing: true }  );
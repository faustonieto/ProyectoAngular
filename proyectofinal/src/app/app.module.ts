import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoApComponent } from './COMPONENTES/logo-ap/logo-ap.component';
import { BannerComponent } from './COMPONENTES/banner/banner.component';
import { HeaderComponent } from './COMPONENTES/header/header.component';
import { AcercaDeComponent } from './COMPONENTES/acerca-de/acerca-de.component';
import { EducacionComponent } from './COMPONENTES/educacion/educacion.component';
import { ExperienciaComponent } from './COMPONENTES/experiencia/experiencia.component';
import { PorfolioComponent } from './COMPONENTES/porfolio/porfolio.component';
import { IniciarSesionComponent } from './COMPONENTES/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoApComponent,
    BannerComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    PorfolioComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    DetalleEmpleadoComponent,
    ProyectosComponent,
    CurriculumComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

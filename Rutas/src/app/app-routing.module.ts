import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { InfoComponent } from './components/info/info.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'informacion'
  },
  {
    path: 'informacion',
    component: InfoComponent,
    canActivate: [RandomGuard]
  },
  {
    path: 'about',
    redirectTo: 'sobre'
  },
  {
    path: 'sobre',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'empleados/:empleadoId',
    component: DetalleEmpleadoComponent,
    // Rutas hijas
    children: [
      {
        path: 'proyectos',
        component: ProyectosComponent
      },
      {
        path: 'experiencia',
        component: ExperienciaComponent
      },
      {
        path: 'curriculum',
        component: CurriculumComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'contacto'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

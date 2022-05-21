import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/list'
  },
  {
    path: 'new',
    component: FormularioComponent
  },
  {
    path: 'list',
    component: ListaEmpleadosComponent
  },
  {
    path: '**',
    redirectTo: '/list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

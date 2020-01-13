import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormularioColoboradoresComponent}from './components/formulario-coloboradores/formulario-coloboradores.component'
import{ListaColoboradoresComponent}  from './components/lista-coloboradores/lista-coloboradores.component'
import{PerfilColoboradoresComponent}  from './components/perfil-coloboradores/perfil-coloboradores.component'

import { from } from 'rxjs';




const routes: Routes = [
  {
    path:'',
    redirectTo:'/colaboradores',
    pathMatch:'full'
  },
  {
    path:'colaboradores',
    component:ListaColoboradoresComponent
  },
  {
    path:'colaboradores/perfil',
    component:PerfilColoboradoresComponent
  },
  {
    path:'colaboradores/create',
    component:FormularioColoboradoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './components/navigation/navigation.component';
import { ListaColoboradoresComponent } from './components/lista-coloboradores/lista-coloboradores.component';
import { PerfilColoboradoresComponent } from './components/perfil-coloboradores/perfil-coloboradores.component';
import { MaterialModule } from '../material/material.module'
import { ColaboradoresService } from './services/colaboradores.service';
import { from } from 'rxjs';
import { FormularioColoboradoresComponent } from './components/formulario-coloboradores/formulario-coloboradores.component';
import { DialogEliminarComponent } from './dialog-eliminar/dialog-eliminar.component';
import { DialogNewColaboradorComponent } from './dialog-new-colaborador/dialog-new-colaborador.component';
import { DialogActualizarColoboradorComponent } from './dialog-actualizar-coloborador/dialog-actualizar-coloborador.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListaColoboradoresComponent,
    PerfilColoboradoresComponent,
    FormularioColoboradoresComponent,
    DialogEliminarComponent,
    DialogNewColaboradorComponent,
    DialogActualizarColoboradorComponent
  ],
  entryComponents :[
    DialogEliminarComponent,
    DialogNewColaboradorComponent,
    DialogActualizarColoboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    ColaboradoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

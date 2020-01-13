import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatTreeModule} from '@angular/material/tree'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatListModule} from '@angular/material/list'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSliderModule} from '@angular/material/slider'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListaColoboradoresComponent } from './components/lista-coloboradores/lista-coloboradores.component';
import { PerfilColoboradoresComponent } from './components/perfil-coloboradores/perfil-coloboradores.component'; 
 
import{ColaboradoresService} from './services/colaboradores.service';
import { from } from 'rxjs';
import { FormularioColoboradoresComponent } from './components/formulario-coloboradores/formulario-coloboradores.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListaColoboradoresComponent,
    PerfilColoboradoresComponent,
    FormularioColoboradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatIconModule,
    MatChipsModule,
    MatTreeModule,
    MatStepperModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    ColaboradoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

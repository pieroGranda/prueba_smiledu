import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
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
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatToolbarModule
]


@NgModule({

  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }

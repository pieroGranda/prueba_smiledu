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

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //this to use ngModule





const MaterialComponents = [
  FormsModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatBadgeModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  CdkTreeModule,
  MatButtonModule,
  A11yModule,
  DragDropModule,
  PortalModule,
  ScrollingModule,
  CdkStepperModule
  ,CdkTableModule,
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

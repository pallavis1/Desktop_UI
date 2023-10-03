import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import { MatProgressBarModule, 
  MatIconModule, 
  MatInputModule, 
  MatTableModule, 
  MatTabsModule, 
  MatSlideToggleModule, 
  MatPaginatorModule, 
  MatCheckboxModule, 
  MatRadioModule, 
  MatDialogModule, 
  MatProgressSpinnerModule, 
  MatSelectModule, 
  MatButtonModule, 
  MatMenuModule, 
  MatAutocompleteModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatExpansionModule, 
  MatDividerModule,
  MatTooltipModule, 
  MatFormField,
  MatBadgeModule,
  MatLabel,
  MatSliderModule,
}
 from '@angular/material';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    // MatFormField,
    // MatLabel,
    MatBadgeModule,
    MatSliderModule,
    MatTabsModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,    
    // MatFormField,
    // MatLabel,
    MatPaginatorModule,
    MatBadgeModule,
    MatSliderModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }

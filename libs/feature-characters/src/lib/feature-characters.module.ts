import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { CharacterTableComponent } from './character-table/character-table.component';
import { CharacterDetailDialogComponent } from './character-detail-dialog/character-detail-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CharacterTableComponent },
    ]),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    TooltipModule,
    CardModule,
    DynamicDialogModule,
  ],
  declarations: [CharacterTableComponent, CharacterDetailDialogComponent],
  exports: [CharacterTableComponent],
})
export class FeatureCharactersModule {}

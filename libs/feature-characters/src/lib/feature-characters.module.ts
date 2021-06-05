import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';

import { CharacterTableComponent } from './character-table/character-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CharacterTableComponent },
    ]),
    SharedModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
  ],
  declarations: [CharacterTableComponent],
  exports: [CharacterTableComponent],
})
export class FeatureCharactersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';

import { CharacterTableComponent } from './character-table/character-table.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

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
  ],
  declarations: [CharacterTableComponent],
  exports: [CharacterTableComponent],
})
export class FeatureCharactersModule {}

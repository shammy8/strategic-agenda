import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { CharacterTableComponent } from './character-table/character-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CharacterTableComponent },
    ]),
    TableModule,
  ],
  declarations: [CharacterTableComponent],
  exports: [CharacterTableComponent],
})
export class FeatureCharactersModule {}

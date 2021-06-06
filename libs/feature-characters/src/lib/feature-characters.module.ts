import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { scopeLoader } from '../../../../scoped-translations';
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
    InputNumberModule,
    ButtonModule,
    MultiSelectModule,
    TooltipModule,
    CardModule,
    InputTextareaModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    ToastModule,
    TranslocoModule,
  ],
  declarations: [CharacterTableComponent, CharacterDetailDialogComponent],
  exports: [CharacterTableComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'characters',
        loader: scopeLoader(
          (lang: string, root: string) => import(`./${root}/${lang}.json`)
        ),
      },
    },
  ],
})
export class FeatureCharactersModule {}

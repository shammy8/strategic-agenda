import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Character } from '../character.model';

@Component({
  selector: 'strategic-agenda-character-detail-dialog',
  templateUrl: './character-detail-dialog.component.html',
  styleUrls: ['./character-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CharacterDetailDialogComponent implements OnInit {
  originalCharacterValues!: Character;

  form = this.fb.group({
    id: '',
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: [null, [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    quote: '',
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.originalCharacterValues = { ...this.config.data.character };
    this.form.patchValue(this.config.data.character);
  }

  onReset() {
    this.form.reset();
    this.form.patchValue(this.originalCharacterValues);
  }

  onSubmit() {
    this.ref.close({
      character: this.form.value,
      submitted: true,
    } as CharacterDialogResponse);
  }
}

export interface CharacterDialogResponse {
  character?: Character;
  submitted?: boolean;
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'strategic-agenda-character-detail-dialog',
  templateUrl: './character-detail-dialog.component.html',
  styleUrls: ['./character-detail-dialog.component.scss'],
})
export class CharacterDetailDialogComponent implements OnInit {
  form = this.fb.group({
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
    console.log(this.config.data);
  }

  onClear() {
    this.form.reset();
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

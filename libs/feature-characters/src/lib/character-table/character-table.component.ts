import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { CharacterDetailDialogComponent } from '../character-detail-dialog/character-detail-dialog.component';
import { Character, Column } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'strategic-agenda-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss'],
  providers: [DialogService],
})
export class CharacterTableComponent implements OnInit {
  filter = '';

  characters: Character[] = [];
  selectedCharacters: Character[] = [];

  private _selectedColumns: Column[] = [];
  allColumns = [
    { field: 'firstName', header: 'First Name', width: '10rem' },
    { field: 'lastName', header: 'Last Name', width: '10rem' },
    { field: 'age', header: 'Age', width: '7rem' },
    { field: 'email', header: 'Email', width: '18rem' },
    { field: 'quote', header: 'Quote' },
  ];

  @ViewChild('dt') table!: Table;

  constructor(
    private characterService: CharacterService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.characters = this.characterService.getAllCharacters();
    this.selectedColumns = this.allColumns;
  }

  filterGlobal(value: string) {
    this.table.filterGlobal(value, 'contains');
  }

  get selectedColumns(): Column[] {
    return this._selectedColumns;
  }

  /**
   * Change visible columns based on multiselect
   */
  set selectedColumns(val: Column[]) {
    this._selectedColumns = this.allColumns.filter((col) => val.includes(col));
  }

  /**
   * For better performance
   */
  rowTrackBy(id: number, item: Character) {
    return item.id;
  }

  onAdd() {
    this.dialogService.open(CharacterDetailDialogComponent, {
      header: 'Add new character',
      width: '70%',
      data: { isAdding: true },
    });
  }

  onEdit() {
    this.dialogService.open(CharacterDetailDialogComponent, {
      header: `Edit ${this.selectedCharacters[0].firstName}`,
      width: '70%',
      data: {
        isAdding: false,
        character: this.selectedCharacters[0],
      },
    });
  }

  onDelete() {
    console.log(this.selectedCharacters[0]);
  }
}

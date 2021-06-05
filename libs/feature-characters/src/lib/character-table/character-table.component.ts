import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { CharacterDetailDialogComponent } from '../character-detail-dialog/character-detail-dialog.component';
import { Character, Column } from '../character.model';
import { CharacterService } from '../character.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'strategic-agenda-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss'],
  providers: [DialogService, ConfirmationService],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CharacterTableComponent implements OnInit, OnDestroy {
  filter = '';

  characters$: Observable<Character[]> = this.characterService
    .charactersObservable$;

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

  addCharacterSub: Subscription | undefined;
  editCharacterSub: Subscription | undefined;

  constructor(
    private characterService: CharacterService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService
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
    const ref = this.dialogService.open(CharacterDetailDialogComponent, {
      header: 'Add new character',
      width: '70%',
      data: { isAdding: true },
    });
    this.addCharacterSub = ref.onClose.subscribe((newCharacter) => {
      this.characterService.addCharacter(newCharacter);
    });
  }

  onEdit() {
    const ref = this.dialogService.open(CharacterDetailDialogComponent, {
      header: `Edit ${this.selectedCharacters[0].firstName}`,
      width: '70%',
      data: {
        isAdding: false,
        character: this.selectedCharacters[0],
      },
    });
    this.editCharacterSub = ref.onClose.subscribe((editedCharacter) => {
      this.characterService.updateCharacter(editedCharacter);
    });
  }

  onDelete() {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the selected ${this.selectedCharacters.length} character(s)?`,
      accept: () => {
        this.characterService.deleteCharacter(this.selectedCharacters);
      },
    });
  }

  ngOnDestroy() {
    this.addCharacterSub?.unsubscribe();
    this.editCharacterSub?.unsubscribe();
  }
}

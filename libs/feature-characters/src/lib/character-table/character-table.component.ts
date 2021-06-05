import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'strategic-agenda-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss'],
})
export class CharacterTableComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters();
  }
}

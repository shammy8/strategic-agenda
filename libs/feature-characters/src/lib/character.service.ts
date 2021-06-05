import { Injectable } from '@angular/core';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characters: Character[] = [
    {
      id: 1,
      firstName: 'Jeff',
      lastName: 'Winger',
      email: 'jeff.winger@lawfirm.com',
      quote: 'hi',
      age: 39,
    },
    {
      id: 2,
      firstName: 'Britta',
      lastName: 'Perry',
      email: 'saveTheDolphins@hotmail.com',
      quote: 'britta',
      age: 27,
    },
  ];

  constructor() {}

  getAllCharacters(): Character[] {
    return this.characters;
  }
}

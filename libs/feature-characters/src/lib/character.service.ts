import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from './character.model';
import { characters } from './characters';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characters: Character[] = characters;
  private charactersSubject$ = new BehaviorSubject(characters);
  charactersObservable$ = this.charactersSubject$.asObservable();

  addCharacter(newCharacter: Character) {
    const uid = Math.floor(Math.random() * 1000) + 7;
    this.characters = [...this.characters, { ...newCharacter, id: uid }];
    this.charactersSubject$.next(this.characters);
  }

  updateCharacter(editedCharacter: Character) {
    this.characters = this.characters.map((character) => {
      if (character.id === editedCharacter.id) {
        return editedCharacter;
      }
      return character;
    });
    this.charactersSubject$.next(this.characters);
  }

  deleteCharacter(characters: Character[]) {
    const idsOfCharactersToDelete = characters.map((character) => character.id);
    this.characters = this.characters.filter((character) => {
      if (idsOfCharactersToDelete.includes(character.id)) {
        return false;
      }
      return true;
    });
    this.charactersSubject$.next(this.characters);
  }
}

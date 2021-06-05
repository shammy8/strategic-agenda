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
      quote: 'I see your value now',
      age: 39,
    },
    {
      id: 2,
      firstName: 'Britta',
      lastName: 'Perry',
      email: 'saveTheDolphins@hotmail.com',
      quote:
        "I know what an analogy is. It's like a thought with another thoughts hat on.",
      age: 27,
    },
    {
      id: 3,
      firstName: 'Abed',
      lastName: 'Nadir',
      email: 'cool@hotmail.com',
      quote: 'Cool cool cool',
      age: 23,
    },
    {
      id: 4,
      firstName: 'Troy',
      lastName: 'Barnes',
      email: 'childish@gambino.com',
      quote: 'Donde, está, la biblioteca. Me llamo T-Bone, la araña discoteca',
      age: 22,
    },
    {
      id: 5,
      firstName: 'Annie',
      lastName: 'Edison',
      email: 'annieedison@communitycollege.com',
      quote: 'A passing grade? Like a C?!',
      age: 22,
    },
    {
      id: 6,
      firstName: 'Shirley',
      lastName: 'Bennett',
      email: 'shirshir@shirleysbakery.com',
      quote: "That's nice",
      age: 40,
    },
    {
      id: 7,
      firstName: 'Pierce',
      lastName: 'Hawthorne',
      email: 'pierce@hawthronewipes.com',
      quote: 'How long was I out? Is Napster still a thing?',
      age: 63,
    },
  ];

  constructor() {}

  getAllCharacters(): Character[] {
    return this.characters;
  }
}

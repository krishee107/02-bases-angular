import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 7500 },
    { name: 'Trunks', power: 6000 },

  ];


  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(id: number) {
    this.characters.splice(id, 1);
    console.log(id);
  }

}

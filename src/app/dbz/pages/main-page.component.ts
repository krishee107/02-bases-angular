import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters]; //Se retorna una copia del arreglo de personajes.
  }

  onDeletedCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id); //Se llama al método deleteCharacterById del servicio.
  }


  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character); //Se llama al método addCharacter del servicio.
  }


}

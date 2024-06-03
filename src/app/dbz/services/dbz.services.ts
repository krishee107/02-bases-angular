import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  /*
  Un servicio es un tipo de clase que se encarga de realizar una tarea específica, como por ejemplo, obtener datos de una API, realizar cálculos, etc.
  Para crear un servicio en Angular, se debe ejecutar el siguiente comando: ng generate service services/dbz.services.

  El decorador @Injectable({ providedIn
  : 'root'
  }) indica que el servicio será inyectado en el módulo raíz de la aplicación.

  En el servicio DbzService se crea un arreglo de objetos de tipo Character que contiene los personajes de la serie Dragon Ball Z. Este arreglo se inicializa con tres personajes: Goku, Vegeta y Trunks. Además, se crean dos métodos: onNewCharacter y onDeleteCharacter. El método onNewCharacter recibe un objeto de tipo Character y lo agrega al arreglo de personajes. El método onDeleteCharacter recibe un índice y elimina el personaje del arreglo de personajes. Finalmente, se exporta la clase DbzService.
  */

  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Trunks', power: 6000 },

  ];


  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() }; //Se crea un nuevo objeto con el operador spread y se le asigna un id único.

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id: number) {
  //   this.characters.splice(id, 1);
  //   console.log(id);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character) => character.id !== id); //Se filtran los personajes cuyo id sea diferente al id recibido.
  }

}

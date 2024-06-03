import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

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

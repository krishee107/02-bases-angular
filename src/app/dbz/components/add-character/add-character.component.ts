import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output() //Decorador que permite emitir eventos al componente padre.
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //Evento que emite un nuevo personaje.

  public character: Character = {
    name: '',
    power: 0
  };

  //Información en dos direcciones con ngModel. 
  emitCharacter(): void {
    if (this.character.name.trim().length === 0) { //Valida que el campo de nombre no esté vacío.
      return;
    }

    this.onNewCharacter.emit(this.character); //Emite el evento al componente padre con la información del personaje.

    this.character = { 'name': '', 'power': 0 }; //Limpia los campos del formulario.
  }

  addCharacter(): void {
  }
}

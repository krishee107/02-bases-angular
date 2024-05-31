import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ['Superman', 'Batman', 'Ironman', 'Spiderman', 'Thor', 'Hulk', 'WonderWoman', 'Flash', 'GreenLantern', 'Aquaman'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroeNames.pop();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>Counter: {{counter}}</h3>
  <button (click)="increasetBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increasetBy(-1)"> -1</button>


  `, /* Se crea el template directamente en linea */
  // templateUrl: './counter.component.html', // Se enlaza el template desde un archivo externo
})
export class CounterComponent {
  public counter: number = 10;

  increasetBy(num: number): void {
    this.counter += num;
  }

  reset(): void {
    this.counter = 10;
  }
}


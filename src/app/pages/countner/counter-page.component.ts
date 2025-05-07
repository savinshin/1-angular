import { ChangeDetectionStrategy, Component, signal } from "@angular/core";




@Component({
  templateUrl: "./counter-page.component.html",
  styles: `

  button {
    margin-right: 10px;
  }
    `,

    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.counterSignal.update((v) => v + 1);
      console.log('tick');
    }, 1000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(0);
  }
}

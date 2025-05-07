import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [
    // NgClass
  ]
})

export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    // { id: 2, name: 'Vegeta', power: 9000 },
    // { id: 3, name: 'Gohan', power: 3000 },
    // { id: 4, name: 'Trunks', power: 500 },
    // { id: 5, name: 'Ahmet', power: 700 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     // 'power-weak': character.power < 5000,
  //     // 'power-strong': character.power >= 5000,
  //     'text-danger': true
  //   };
  // });

  addCharacter() {

    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  };

  resetFields() {
    this.name.set('');
    this.power.set(0);
  };

}

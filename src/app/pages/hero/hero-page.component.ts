import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})

export class NameComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} is ${this.age()} years old`;
    return description;
  })

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  })

  getHeroDescription() {
    return `${this.name()} is ${this.age()} years old`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(30);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  constructor() {}

  ngOnInit() {}
}

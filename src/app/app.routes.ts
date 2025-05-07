import { Routes } from '@angular/router';

import { CounterPageComponent } from './pages/countner/counter-page.component';
import { NameComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent,
  },

  {
    path: 'hero',
    component: NameComponent,
  },

  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },

  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },

  {
    path: '**',
    redirectTo: '',
  }

];

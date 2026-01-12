import {Routes} from '@angular/router';
import {Me} from './me/me';

export const routes: Routes = [
  {
    path: '',
    component: Me
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

import {Routes} from '@angular/router';
import {Me} from './me/me';
import {Projects} from './projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Me
  },
  {
    path: 'projects',
    component: Projects
  },
];

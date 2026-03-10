import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/default/default.component').then((m) => m.DefaultComponent),
  },
  {
    path: 'table',
    loadComponent: () => import('./pages/table/table.component').then((m) => m.TableComponent),
  },
];

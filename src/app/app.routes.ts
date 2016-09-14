import { Routes } from '@angular/router';
// import { RouterConfig provideRoutes } from '@angular/router';
import { Home } from './home';
import { About } from './app.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' }
];

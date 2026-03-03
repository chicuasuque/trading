import { Routes } from '@angular/router';
import { Home} from './home/home';
import { Cursos } from './cursos/cursos';
import { Carrito } from './carrito/carrito';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cursos', component: Cursos },
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: '' }
];
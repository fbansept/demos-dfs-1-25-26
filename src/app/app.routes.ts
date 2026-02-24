import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Page404 } from './pages/page404/page404';
import { Dashboard } from './pages/dashboard/dashboard';
import { loggedGuard } from './security/logged-guard';

export const routes: Routes = [
  { path: 'home', component: Home, canActivate: [loggedGuard] },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [loggedGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404 },
];

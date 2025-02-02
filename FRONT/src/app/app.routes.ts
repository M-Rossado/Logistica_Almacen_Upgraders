import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

import { authRoleGuard } from './auth/guards/auth.guard';

import { OrdersComponent } from './components/jefe/orders/orders.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [



    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
   

    {
        path: '',

        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        canActivate: [authRoleGuard],
        loadChildren: () => import('./components/home.routes').then(m => m.HOME_ROUTES)
    },
    { path: '**', component: Error404Component }




];

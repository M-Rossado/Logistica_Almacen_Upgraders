import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

import { authRoleGuard } from './auth/guards/auth.guard';

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
        path: 'home',
   
        loadChildren: () => import('./components/home.routes').then(m => m.HOME_ROUTES)
    }



];

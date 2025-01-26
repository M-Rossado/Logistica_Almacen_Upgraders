import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkersComponent } from './jefe/workers/workers.component';
import { EmpresasComponent } from './jefe/empresas/empresas.component';
import { OrdersComponent } from './jefe/orders/orders.component';




export const HOME_ROUTES: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'warehouse',
        component: EmpresasComponent
    },
    {

        path: 'workers',
        component: WorkersComponent

    }

]

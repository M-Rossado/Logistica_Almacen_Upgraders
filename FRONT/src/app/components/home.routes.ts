import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkersComponent } from './jefe/workers/workers.component';
import { WarehouseComponent } from './jefe/warehouses/warehouses.component';
import { OrdersComponent } from './jefe/orders/orders.component';
import { authGuard } from '../auth/guards/auth.guard';
import { jefeRoleGuard } from '../auth/guards/jefe-role.guard';
import { adminGuard } from '../auth/guards/admin.guard';




export const HOME_ROUTES: Routes = [

    {
        path: 'home',
        canActivate: [jefeRoleGuard],
        component: HomeComponent
    },
    {
        path: 'orders',
        canActivate: [adminGuard],
        component: OrdersComponent
    },
    {
        path: 'warehouse',
        component: WarehouseComponent
    },
    {

        path: 'workers',
        component: WorkersComponent

    }

]

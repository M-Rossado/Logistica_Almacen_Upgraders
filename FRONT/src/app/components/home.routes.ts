import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkersComponent } from './jefe/workers/workers.component';
import { WarehouseComponent } from './jefe/warehouses/warehouses.component';
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
        component: WarehouseComponent
    },
    {

        path: 'workers',
        component: WorkersComponent

    }

]

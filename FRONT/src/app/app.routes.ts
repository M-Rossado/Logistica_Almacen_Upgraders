import { Routes } from '@angular/router';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EventsListComponent } from './events-list/events-list.component';

export const routes: Routes = [
    {
        path: 'product-list',
        component: ProductListComponent
    },
    {
        path: 'product-details/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'add-product',
        component: ClassicFormComponent
    },
    {
        path: 'events',
        component: EventsListComponent
    },
];

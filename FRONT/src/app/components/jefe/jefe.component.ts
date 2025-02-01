import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AddWarehouseComponent } from './modales/warehouse/add-warehouse/add-warehouse.component';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [RouterModule,OrdersComponent,AddWarehouseComponent],
  templateUrl: './jefe.component.html',
  styleUrl: './jefe.component.css'
})
export class JefeComponent {


private homeservice: HomeServiceService = inject(HomeServiceService)
public ordersList: any = []
public ShowOrders:boolean = false;// paso #2
public modalDetails: boolean = false
public modalAdd: boolean = false
public selectedEvent: any;




ngOnInit(){
  this.getOrders()
}


getOrders(){
  this.homeservice.getWarehouse().subscribe({
    next: (data: any) => {
     this.ordersList = data
     console.log(this.ordersList)
    },
    error: (error) => {
      console.log(error);
    }
  });
}


opendetails(warehouse: any) {
  this.modalDetails = true
  this.selectedEvent = warehouse
}

closedetails() {
  this.modalDetails = false
}


openOrders(){//paso#1
this.ShowOrders = true
console.log(this.ShowOrders)
}

closeUser(){
this.ShowOrders = false
}

closeADD(){

}


}


import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { OrderDetailsComponent } from '../modales/orders/order-details/order-details.component';
import { AddWarehouseComponent } from "../modales/warehouse/add-warehouse/add-warehouse.component";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrderDetailsComponent, AddWarehouseComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
getIconClass(arg0: any) {
throw new Error('Method not implemented.');
}
private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public ShowDetails:boolean = false
 public selectEvent: any;
 public modalAdd: boolean = false
 public lugar = localStorage.getItem("lugar")
 public workersList: any[] = [];
 public warehouses:any[] =[]

  ngOnInit(): void {
    this.getEventos()
   this.getWorkers()
this.getWarehouses()
   }


   
   getEventos(): void {
     this.homeservice.getOrders().subscribe({
       next: (data: any) => {
         this.ordersList= data;
         console.log(data)
       },
       error: (error) => {
         console.log(error);
       }
     });

   }


   getWorkers(): void {
    this.homeservice.getWorkers().subscribe({
      next: (data: any) => {
       this.workersList = data 
      
      },

      error: (error) => {
        console.log(error);
      }
    });
   
  }


  getWarehouses(): void {
   this.homeservice.getWarehouse().subscribe({
     next: (data: any) => {
       this.warehouses = data;
       console.log(data)
     },
     error: (error) => {
       console.log(error);
     }
   });

 }

openDetails(event:any){
this.ShowDetails = true
this.selectEvent = event
console.log(this.selectEvent)
}


CloseDEtails(){
  this.ShowDetails =false
}



 openadd() {
  this.modalAdd = true
}

closeADD(){
  this. modalAdd= false
}

}

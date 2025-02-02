import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { OrderDetailsComponent } from '../modales/orders/order-details/order-details.component';
import { AddWarehouseComponent } from "../modales/warehouse/add-warehouse/add-warehouse.component";
import { Router } from '@angular/router';
import { ICON_MAPPER } from '../../../../assets/icon-mapper'; // Importa el mapeo
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrderDetailsComponent, AddWarehouseComponent, DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public ShowDetails:boolean = false
 public selectEvent: any;
 public modalAdd: boolean = false
 public lugar = localStorage.getItem("lugar")
 public workersList: any[] = [];
 public warehouses:any[] =[]
 private router: Router = new Router;

  ngOnInit(): void {
    this.getEventos()
   this.getWorkers()
this.getWarehouses()
   }

  // Función para obtener la clase del ícono dinámicamente
  getIconClass(status: string): string {
    return ICON_MAPPER[status] || 'bi-question-circle-fill text-muted'; // Icono por defecto si no coincide
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

comeback(){
  this.router.navigate(['/home']);
 }

}

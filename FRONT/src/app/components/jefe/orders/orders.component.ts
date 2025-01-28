import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { OrderDetailsComponent } from '../modales/orders/order-details/order-details.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrderDetailsComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
private homeservises: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public ShowDetails:boolean = false
 public selectEvent: any;


  ngOnInit(): void {
    this.getEventos()
   }

   getEventos(): void {
     this.homeservises.getOrders().subscribe({
       next: (data: any) => {
         this.ordersList= data;

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

}

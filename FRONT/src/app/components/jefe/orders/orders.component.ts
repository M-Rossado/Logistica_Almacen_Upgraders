import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
private homeservises: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('name')

  ngOnInit(): void {
    this.getEventos()
   }

   getEventos(): void {
     this.homeservises.getOrders().subscribe({
       next: (data: any) => {
         this.ordersList= data;
         console.log(data)
       },
       error: (error) => {
         console.log(error);
       }
     });

   }
}

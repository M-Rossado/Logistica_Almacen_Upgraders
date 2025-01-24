import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
private homeservises: HomeServiceService = inject(HomeServiceService)
  public pedidosList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')
  
  ngOnInit(): void {
    this.getEventos()
   }
 
   getEventos(): void {
     this.homeservises.getPedidos().subscribe({
       next: (data: any) => {
         this.pedidosList = data;
         console.log(data)
       },
       error: (error) => {
         console.log(error);
       }
     });
     
   }
}

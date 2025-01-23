import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { JefeComponent } from '../jefe/jefe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PedidosComponent,JefeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public pedidosList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')
  




}

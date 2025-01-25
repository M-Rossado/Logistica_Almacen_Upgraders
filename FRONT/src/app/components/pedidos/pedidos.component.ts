import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public pedidosList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')
  
  ngOnInit(){
    this.getPedidos()
  }
  
  
  getPedidos(){
    this.homeservice.getPedidos().subscribe((data) =>
    this.pedidosList = data
  )
    
    console.log(this.getPedidos)
  }

}

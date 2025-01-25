import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { DetalleOperarioComponent } from "./detalle-operario/detalle-operario.component";
import { CommonModule } from '@angular/common';
import { ICON_MAPPER } from '../../../assets/icon-mapper'; // Importa el mapeo
import { NewOrderComponent } from './new-order/new-order.component';


@Component({
  selector: 'app-operario',
  standalone: true,
  imports: [DetalleOperarioComponent, CommonModule, NewOrderComponent],
  templateUrl: './operario.component.html',
  styleUrl: './operario.component.css'
})
export class OperarioComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public orderList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')
  public detalle: boolean = false
  public Showmodal:boolean = false;// paso #2
  public showDetail: boolean = false;
  public selectedOrder: any = null;
  public showCreateOrder: boolean = false; // 

  

  ngOnInit(){
    this.getPedidos()
  }


  getPedidos(){
    this.homeservice.getPedidos().subscribe((data) =>
    this.orderList = data)
  }

// Función para obtener la clase del ícono dinámicamente
getIconClass(status: string): string {
  return ICON_MAPPER[status] || 'bi-question-circle-fill text-muted'; // Icono por defecto si no coincide
}

  // modal 2  
  mostrarDetalle(order: any){
    this.selectedOrder = order; // Asigna el pedido seleccionado
    this. showDetail = true
    console.log(this.showDetail)
  }
    
  closeDetail(){
    this.showDetail = false
  }

  showFormCreateOrder(){
    this.showCreateOrder = true;
    console.log(this.showCreateOrder)
  }

  closeCreateOrder(){
    this.showCreateOrder = false
  }
}

import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { CommonModule } from '@angular/common';
import { ICON_MAPPER } from '../../../assets/icon-mapper'; // Importa el mapeo
import { EditOrderComponent } from './edit-order/edit-order.component';
import { DetalleConductorComponent } from './detalle-conductor/detalle-conductor.component';
import { OrderService } from './services/order.service';


@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [DetalleConductorComponent, CommonModule, EditOrderComponent],
  templateUrl: './conductor.component.html',
  styleUrl: './conductor.component.css'
})
export class ConductorComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  private Orderservice: OrderService = inject(OrderService)
  public ordersList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')
  public detalle: boolean = false
  public Showmodal:boolean = false;// paso #2
  public showDetail: boolean = false;
  public selectedOrder: any = null;
  public showCreateOrder: boolean = false; //
  public showEditOrder: boolean = false;



  ngOnInit(){
    this.getOrders()
  }


  getOrders(){
    this.Orderservice.getAll().subscribe((data) =>
    this.ordersList = data
  )}

// Función para obtener la clase del ícono dinámicamente
getIconClass(status: string): string {
  return ICON_MAPPER[status] || 'bi-question-circle-fill text-muted'; // Icono por defecto si no coincide
}

  // modal 2
  mostrarDetalle(order: any){
    this.selectedOrder = order; // Asigna el pedido seleccionado
    this. showDetail = true
  }

  closeDetail(){
    this.showDetail = false;
  }


  // cambios

  // Abrir modal de edición desde detalles
  openEditModal(order: any) {
    this.closeDetail();
    this.selectedOrder = order; // Asigna el pedido seleccionado
    //this.showDetail = false; // Cierra el modal de detalles
    this.showEditOrder = true; // Abre el modal de edición
  }

  closeEditOrder() {
    this.showEditOrder = false; // Cierra el modal de edición
  }
}

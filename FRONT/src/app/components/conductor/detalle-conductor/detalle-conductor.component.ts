import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { CommonModule } from '@angular/common';
import { EditOrderComponent } from "../edit-order/edit-order.component";

@Component({
  selector: 'app-detalle-conductor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-conductor.component.html',
  styleUrl: './detalle-conductor.component.css'
})
export class DetalleConductorComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public Showmodal:boolean = false;// paso #2
  public showEdit: boolean = false;
  public selectedOrder: any = null;


  @Input() order: any; // Recibe el pedido desde el padre
  //@Input() mostrarDetalle = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>(); // Evento para cerrar el modal
  @Output() openEditModal = new EventEmitter<any>(); // Para abrir el modal de edición

  ngOnInit(){
    this.getPedidos()
    console.log(this.order)
  }


  getPedidos(){
    this.homeservice.getOrders().subscribe((data) =>
    this.ordersList = data
  )

    console.log(this.getPedidos)
  }

  //@Output() closeModal = new EventEmitter<boolean>();// cremaos el evento output paso 6
  Close(){
    this.closeModal.emit();// enviamos un booleano hacia nuestro padre lo podemos dejar abierto y despues lo volveremos falso en nuestro compoennte padre
  }
/*
  closeEdit(){
    this.showEdit = false;
  }
*/
    // modal 2
    editOrder(order: any){
      this.openEditModal.emit(order);
      //this.selectedOrder = order; // Asigna el pedido seleccionado
      //this. showEdit = true;
      //this.closeModal.emit();
      //console.log(this.showEdit)
    }
}

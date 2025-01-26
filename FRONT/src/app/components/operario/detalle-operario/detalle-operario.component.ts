import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { CommonModule } from '@angular/common';
import { EditOrderComponent } from "../edit-order/edit-order.component";

@Component({
  selector: 'app-detalle-operario',
  standalone: true,
  imports: [CommonModule, EditOrderComponent],
  templateUrl: './detalle-operario.component.html',
  styleUrl: './detalle-operario.component.css'
})
export class DetalleOperarioComponent {
    private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public Showmodal:boolean = false;// paso #2
  public showEdit: boolean = false;
  public selectedOrder: any = null;


  @Input() order: any; // Recibe el pedido desde el padre
  @Input() mostrarDetalle = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>(); // Evento para cerrar el modal

  ngOnInit(){
    this.getOrders()
  }


  getOrders(){
    this.homeservice.getOrders().subscribe((data) =>
    this.ordersList = data
  )

    console.log(this.getOrders)
  }

  //@Output() closeModal = new EventEmitter<boolean>();// cremaos el evento output paso 6

    // modal 2
    editOrder(order: any){
      this.selectedOrder = order; // Asigna el pedido seleccionado
      this. showEdit = true;
      console.log(this.showEdit)
    }

    closeEdit(){
      this.showEdit = false;

    }

  Close(){
    this.closeModal.emit();// enviamos un booleano hacia nuestro padre lo podemos dejar abierto y despues lo volveremos falso en nuestro compoennte padre
  }

}

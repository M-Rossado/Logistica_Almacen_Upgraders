import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../operario/services/order.service';

@Component({
  selector: 'app-detalle-operario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle-operario.component.html',
  styleUrl: './detalle-operario.component.css'
})
export class DetalleOperarioComponent {
  private homeService: HomeServiceService = inject(HomeServiceService);
  public ordersList: any = [];
  public Showmodal: boolean = false;
  public showEdit: boolean = false;
  public selectedOrder: any = null;
  private orderService: OrderService = inject(OrderService);

  @Input() order: any; // Recibe el pedido desde el padre
  @Output() closeModal = new EventEmitter<void>(); // Evento para cerrar el modal
  @Output() openEditModal = new EventEmitter<any>(); // Evento para abrir el modal de edición

  ngOnInit() {
    // Recuperar el email del usuario desde el localStorage
    const email = localStorage.getItem('email');
    
    if (email) {
      this.getPedidos(email);  // Llamas al método con el email recuperado
    } else {
      console.error('No se encontró el email del usuario en localStorage');
    }
  }

  getPedidos(email: string) {
    this.orderService.getOrdersByEmail(email).subscribe((data) => {
      this.ordersList = data;
    }, error => {
      console.error('Error al obtener los pedidos:', error);
    });
  }

  Close() {
    this.closeModal.emit();
  }

  openEdit() {
    this.openEditModal.emit(this.order); // Envía el pedido seleccionado al padre
  }
}
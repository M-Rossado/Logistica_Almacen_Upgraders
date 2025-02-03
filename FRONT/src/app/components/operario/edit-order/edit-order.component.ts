import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css',
})
export class EditOrderComponent {
  private orderService: OrderService = inject(OrderService);
  private router: Router = inject(Router);

  @Input() selectedEvent: any;
  @Input() selectedOrder: any;
  @Output() closeEditOrder = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>(); // Evento para cerrar el modal

  public editOrder = {
    item_type: '',
    status: 'Revisión',  // Valor por defecto
    date_of_entry: '',
    date_of_departure: '',
    destination: '',
    warehouse_location: '', // Este campo se rellenará automáticamente
    worker_email: '',
    email_operator: '',
    comment: '',
  };

  ngOnInit() {
    console.log('selectedEvent:', this.selectedEvent); // Verifica si selectedEvent tiene un valor
    this.getEdit();
  }

  Close(){
    this.closeEditOrder.emit(); // Notifica al padre para cerrar el modal
  }

  getEdit() {
    if (this.selectedOrder) {
      this.editOrder.item_type = this.selectedOrder.item_type;
      this.editOrder.status = this.selectedOrder.status = 'Revisión';
      this.editOrder.date_of_entry = this.selectedOrder.date_of_entry.split('T')[0];
      this.editOrder.date_of_departure = this.selectedOrder.date_of_departure.split('T')[0];
      this.editOrder.destination = this.selectedOrder.destination;
      this.editOrder.warehouse_location = this.selectedOrder.warehouse_location;
  
      // Obtener el email del operador desde localStorage
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
        this.editOrder.email_operator = storedEmail;
      } else {
        console.warn('No se encontró email_operator en localStorage');
      }
    } else {
      console.error('No se ha seleccionado ningún pedido para editar.');
    }
  }

  handleEdit() {
    if (!this.selectedOrder || !this.selectedOrder.id_order) {
      console.error('No se ha seleccionado ningún pedido válido para editar.');
      return;
    }
  
    // Verifica los datos que se están enviando
    console.log('Datos enviados al servidor:', this.editOrder);
  
    this.orderService.updateOrder(this.selectedOrder.id_order, this.editOrder).subscribe({
      next: (data: any) => {
        alert('Pedido actualizado correctamente');
        this.closeEditOrder.emit(); // Cierra el modal de edición
        this.router.navigate(['/home']); // Redirige a la página de inicio
      },
      error: (error) => {
        console.error('Error al actualizar el pedido:', error);
      },
    });
  }
}

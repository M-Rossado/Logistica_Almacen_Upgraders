import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service'; // Asegúrate de tener el servicio correcto

@Component({
  selector: 'app-detalle-operario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle-operario.component.html',
  styleUrls: ['./detalle-operario.component.css']
})
export class DetalleOperarioComponent {
  private orderService: OrderService = inject(OrderService); // Asegúrate de usar el servicio adecuado
  @Input() order: any; // Recibe el pedido desde el componente padre
  @Output() closeModal = new EventEmitter<void>(); // Para cerrar el modal
  @Output() orderUpdated = new EventEmitter<any>(); // Para notificar al componente padre que el pedido fue actualizado

  // Método que se ejecuta cuando el formulario se envía
  onSubmit() {
    console.log('Datos del pedido actualizados:', this.order);

    // Actualizar el pedido con el servicio
    this.orderService.updateOrder(this.order).subscribe(
      (response) => {
        console.log('Pedido actualizado correctamente:', response);
        this.orderUpdated.emit(this.order); // Notificar al componente padre que el pedido ha sido actualizado
        alert('Pedido modificado correctamente');
        this.closeModal.emit(); // Cerrar el modal
      },
      (error) => {
        console.error('Error al actualizar el pedido:', error);
        alert('Error al modificar el pedido');
      }
    );
  }

  // Método para cerrar el modal
  Close() {
    this.closeModal.emit();
  }
}
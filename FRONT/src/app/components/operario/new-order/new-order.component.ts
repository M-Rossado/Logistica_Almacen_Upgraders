import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-new-order',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css'
})
export class NewOrderComponent {
  newOrder = {
    id: '',
    item_type: '',
    status: '',
    date_of_entry: '',
    date_of_departure: '',
    origin: '',
    destination: '',
    warehouse_location: '',
    truck_plate: '',
    worker_email: '',
    email_manager: '',
  };
  constructor(private orderService: OrderService) {}

    // Método para enviar el formulario
    onSubmit() {
      this.orderService.addOrder(this.newOrder).subscribe(
        (response) => {
          console.log('Pedido añadido con éxito:', response);
          alert('Pedido creado correctamente');
          this.resetForm();
        },
        (error) => {
          console.error('Error al crear el pedido:', error);
        }
      );
    }
  
    // Reiniciar el formulario después de enviarlo
    resetForm() {
      this.newOrder = {
        id: '',
        item_type: '',
        status: '',
        date_of_entry: '',
        date_of_departure: '',
        origin: '',
        destination: '',
        warehouse_location: '',
        truck_plate: '',
        worker_email: '',
        email_manager: '',
      };
    }

  private homeservice: HomeServiceService = inject(HomeServiceService)

  @Output() closeCreateOrder = new EventEmitter<void>(); // Evento para cerrar el modal

  Close(){
    this.closeCreateOrder.emit();// enviamos un booleano hacia nuestro padre lo podemos dejar abierto y despues lo volveremos falso en nuestro compoennte padre 
  }
}

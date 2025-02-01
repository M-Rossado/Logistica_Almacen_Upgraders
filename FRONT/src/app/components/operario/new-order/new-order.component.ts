import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../operario/services/order.service';
import { AuthService } from '../../../auth/service/auth.service'; // Importa AuthService

@Component({
  selector: 'app-new-order',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.css'
})
export class NewOrderComponent {
  @Output() orderCreated = new EventEmitter<void>();
  @Output() closeCreateOrder = new EventEmitter<void>(); // Evento para cerrar el modal


  newOrder = {
    item_type: '',
    status: 'Revisión',  // Valor por defecto
    date_of_entry: '',
    date_of_departure: '',
    destination: '',
    warehouse_location: '', // Este campo se rellenará automáticamente
    worker_email: '',
    email_operator: '',
  };

  // Inyectamos el servicio de AuthService
  constructor(
    private orderService: OrderService,
    private authService: AuthService,  // Inyectamos AuthService
    private homeservice: HomeServiceService = inject(HomeServiceService)

  ) {}

  ngOnInit() {
    const warehouseLocation = localStorage.getItem('warehouse_location');
    if (warehouseLocation) {
      this.newOrder.warehouse_location = warehouseLocation;
      console.log('Ubicación del almacén recuperada:', this.newOrder.warehouse_location); 
    } else {
      console.log('No se encontró la ubicación del almacén');
    }
  
    const emailOperator = localStorage.getItem('email');
    if (emailOperator) {
      this.newOrder.email_operator = emailOperator;
      console.log('Correo del operario:', this.newOrder.email_operator); 
    } else {
      console.log('No se encontró el correo del operario');
    }
  }

  // Método para enviar el formulario
  onSubmit() {
    console.log('Datos enviados al backend:', this.newOrder);
    this.orderService.addOrder(this.newOrder).subscribe(
      (response) => {
        console.log('Pedido añadido con éxito:', response);
        alert('Pedido creado correctamente');
        this.resetForm();
        
        // Emitir el evento para que el componente padre actualice el listado
        this.orderCreated.emit();
        // Emitir el evento para cerrar el modal después de la creación
      this.closeCreateOrder.emit();
      },
      (error) => {
        console.error('Error al crear el pedido:', error);
      }
    );
  }

  // Reiniciar el formulario después de enviarlo
  resetForm() {
    this.newOrder = {
      item_type: '',
      status: '',
      date_of_entry: '',
      date_of_departure: '',
      destination: '',
      warehouse_location: '', // Reiniciar el campo
      worker_email: '',
      email_operator: '',
    };
  }



  // Método para cerrar el modal sin ejecutar la creación del pedido
  Close(event: Event) {
    event.preventDefault();  // Evitar que el evento dispare la creación del pedido
    this.closeCreateOrder.emit();  // Solo emitir el evento para cerrar el modal
  }
}
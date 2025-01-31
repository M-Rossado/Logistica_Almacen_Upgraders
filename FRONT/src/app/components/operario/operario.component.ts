import { Component, inject } from '@angular/core';
import { DetalleOperarioComponent } from "./detalle-operario/detalle-operario.component";
import { CommonModule } from '@angular/common';
import { ICON_MAPPER } from '../../../assets/icon-mapper'; // Importa el mapeo
import { NewOrderComponent } from './new-order/new-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderService } from './services/order.service';
import { Order } from '../operario/models/order.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-operario',
  standalone: true,
  imports: [DetalleOperarioComponent, CommonModule, NewOrderComponent, EditOrderComponent],
  templateUrl: './operario.component.html',
  styleUrl: './operario.component.css'
})
export class OperarioComponent {
  private orderService: OrderService = inject(OrderService);
  public orderList: any = [];
  public userRole = localStorage.getItem('role');
  public name = localStorage.getItem('name');
  public userEmail = localStorage.getItem('email'); // Obtiene el email del operario logueado
  public detalle: boolean = false;
  public Showmodal: boolean = false; // paso #2
  public showDetail: boolean = false;
  public selectedOrder: any = null;
  public showCreateOrder: boolean = false; //
  public showEditOrder: boolean = false;

  // Este objeto mantendrá los datos del pedido que estamos editando
  public orderToEdit: any = {
    item_type: '',
    status: '',
    date_of_entry: '',
    date_of_departure: '',
    destination: '',
    warehouse_location: '',
    worker_email: '',
    email_operator: ''
  };

  // Método que se llama cuando se hace clic en "Modificar pedido"
  editOrder(order: any) {
    this.orderToEdit = { ...order }; // Copiar los valores del pedido a editar
    this.showEditOrder = true;        // Mostrar el modal de edición
  }

  // Método que se llama al enviar el formulario de edición
  onSubmit() {
    console.log('Datos actualizados:', this.orderToEdit);
    this.orderService.updateOrder(this.orderToEdit).subscribe(
      (response) => {
        console.log('Pedido actualizado con éxito:', response);
        alert('Pedido modificado correctamente');
        this.refreshOrdersList(); // Actualizar la lista de pedidos
        this.closeEditOrder();    // Cerrar el modal de edición
      },
      (error) => {
        console.error('Error al actualizar el pedido:', error);
      }
    );
  }

  ngOnInit() {
    const userEmail = localStorage.getItem('email'); // Recupera el email almacenado
    if (userEmail) {
      this.getOrdersByEmail(userEmail);  // Llama al servicio para obtener los pedidos
    } else {
      console.warn('No hay email en localStorage, el usuario no está autenticado.');
    }
  }

  // Método para obtener las órdenes del operario
  getOrdersByEmail(email: string) {
    console.log(`Obteniendo pedidos para el email: ${email}`);
    this.orderService.getOrdersByEmail(email).subscribe(
      (data) => {
        console.log('Pedidos recibidos:', data);  // Verifica los datos obtenidos
        this.orderList = data;
      },
      (error) => {
        console.error('Error al obtener pedidos:', error);
      }
    );
  }

  // Función para obtener la clase del ícono dinámicamente
  getIconClass(status: string): string {
    return ICON_MAPPER[status] || 'bi-question-circle-fill text-muted'; // Icono por defecto si no coincide
  }

  // Modal 2
  mostrarDetalle(order: any) {
    this.selectedOrder = order; // Asigna el pedido seleccionado
    this.showDetail = true;
  }

  closeDetail() {
    this.showDetail = false;
  }

  showFormCreateOrder() {
    this.showCreateOrder = true;
  }

  closeCreateOrder() {
    this.showCreateOrder = false;
  }

  // Abrir modal de edición desde detalles
  openEditModal(order: any) {
    this.closeDetail();
    this.selectedOrder = order; // Asigna el pedido seleccionado
    this.showEditOrder = true; // Abre el modal de edición
  }

  closeEditOrder() {
    this.showEditOrder = false; // Cierra el modal de edición
  }

  trackOrderById(index: number, order: any): string {
    return order.id; // Devuelve un valor único, en este caso el ID del pedido
  }

  // Método que se llama cuando un nuevo pedido se crea
  refreshOrdersList() {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      this.getOrdersByEmail(userEmail);  // Llama al servicio para obtener los pedidos
    } else {
      console.warn('No hay email en localStorage, el usuario no está autenticado.');
    }
  }
}
// edit-order.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Para obtener parámetros de la URL
import { OrderService } from '../services/order.service';  // Servicio para obtener y actualizar pedidos
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-order',
    standalone: true,
    imports: [FormsModule],
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,  // Para obtener el id del pedido desde la URL
    private orderService: OrderService,  // El servicio para manejar los pedidos
    private router: Router  // Para redirigir después de guardar los cambios
  ) {}

    @Input() order: any; // Recibe el pedido desde el padre
    @Output() closeModal = new EventEmitter<void>(); // Evento para cerrar el modal
  
  ngOnInit(): void {
    // Obtén el id del pedido desde la URL (suponiendo que la URL tiene el formato "/edit-order/:id")
    const orderId = this.route.snapshot.paramMap.get('id');

    if (orderId) {
      // Cargar el pedido desde el servicio usando el id
      this.orderService.getOrderById(orderId).subscribe((data) => {
        this.order = data;  // Rellenar el formulario con los datos del pedido
      });
    }
  }

  onSubmit(): void {
    // Actualizar el pedido con los nuevos datos
    this.orderService.updateOrder(this.order).subscribe(
      (response) => {
        // Redirigir a la lista de pedidos después de guardar los cambios
        alert('Pedido actualizado')
        this.router.navigate(['/home/order']);
      },
      (error) => {
        console.error('Error al actualizar el pedido:', error);
      }
    );
  }
  closeEditOrder(): void {
    this.closeModal.emit(); // Emite el evento para cerrar el componente
  }
}
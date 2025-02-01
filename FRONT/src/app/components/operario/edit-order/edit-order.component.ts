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
  
    public orderToEdit: any = {
      item_type: '',
      status: '',
      date_of_entry: '',
      date_of_departure: '',
      destination: '',
      warehouse_location: '',
      worker_email: '',
      email_operator: '',
      comment: ''
    };
  
    ngOnInit(){
      this.orderToEdit.item_type = this.order.item_type
      this.orderToEdit.status = this.order.status
      this.orderToEdit.date_of_entry = this.order.date_of_entry
      this.orderToEdit.date_of_departure = this.order.date_of_departure
      this.orderToEdit.destination = this.order.destination
      this.orderToEdit.warehouse_location = this.order.warehouse_location
      this.orderToEdit.worker_email = this.order.worker_email
      this.orderToEdit.email_operator = this.order.email_operator
      this.orderToEdit.comment = this.order.comment
    }
  
  
  
    // Método para cerrar el modal
    Close(event: Event) {
      event.preventDefault();
      this.closeModal.emit(); // Emite el evento para cerrar el modal
    }
  
    // Método para enviar los cambios al backend
    // Método para enviar los cambios al backend
    onSubmit() {
     
      console.log(this.orderToEdit); // Verifica que los datos estén correctos
  
      this.orderService.updateOrder(this.order.id_order, this.orderToEdit).subscribe({ 
        next:(data: any) => {
          alert("Pedido cambiado exitosamente")
        }
      })
    }
  }
  

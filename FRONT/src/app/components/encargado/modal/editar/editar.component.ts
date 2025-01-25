import { Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeServiceService } from '../../../service/home-service.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

 private homeservice : HomeServiceService = inject(HomeServiceService)
  @Input() selectedEvent: any;
  @Output() closeEdit = new EventEmitter<boolean>()
  private router: Router = new Router


  public editOrder = {
    id:'',
    item_type: '',
    status: '',
    date_of_entry: '',
    date_of_departure: null,
    origin: '',
    destination: '',
    worker_id_worker: '',
    warehouse_location: '',
    truck_plate: ''
  };



  ngOnInit() {
  this.getEdit()
  }

  getEdit() {
    this.editOrder.id = this.selectedEvent?.id;
    this.editOrder.item_type = this.selectedEvent?.item_type;
    this.editOrder.status = this.selectedEvent?.status;
    this.editOrder.date_of_entry = this.selectedEvent?.date_of_entry;
    this.editOrder.date_of_departure = this.selectedEvent?.date_of_departure;
    this.editOrder.origin = this.selectedEvent?.origin;
    this.editOrder.destination = this.selectedEvent?.destination;
    this.editOrder.warehouse_location = this.selectedEvent?.warehouse_location;
    this.editOrder.worker_id_worker = this.selectedEvent?.worker_id_worker;
    this.editOrder.truck_plate = this.selectedEvent?.truck_plate;


  }

  handleEdit() {
this.homeservice.updateEvent(this.selectedEvent.id, this.editOrder).subscribe({
  next:(data: any) =>{
    alert('pedido actualizado correctamente')
    this.router.navigate(['/home'])
    this.closeEditar()
  }
})
  }

  closeEditar() {
    this.closeEdit.emit();
  }
}

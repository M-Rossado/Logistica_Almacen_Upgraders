import { Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeServiceService } from '../../../service/home-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, DatePipe],
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
    worker_email: '',
    warehouse_location: '',
    truck_plate: '',
    comment:''
  };

  minDate: string;

  constructor() {
    this.minDate = new Date().toISOString().split("T")[0]; //intento que no deje elegir la fecha anterior a hoy
  }


  ngOnInit() {
  this.getEdit()
  }

  getEdit() {
    this.editOrder.id = this.selectedEvent?.id_order;
    this.editOrder.item_type = this.selectedEvent?.item_type;
    this.editOrder.status = this.selectedEvent?.status;
    this.editOrder.date_of_entry = this.selectedEvent?.date_of_entry;
    this.editOrder.date_of_departure = this.selectedEvent?.date_of_departure;
    this.editOrder.origin = this.selectedEvent?.origin;
    this.editOrder.destination = this.selectedEvent?.destination;
    this.editOrder.warehouse_location = this.selectedEvent?.warehouse_location;
    this.editOrder.worker_email = this.selectedEvent?.worker_email;
    this.editOrder.truck_plate = this.selectedEvent?.truck_plate;
    this.editOrder.comment = this.selectedEvent?.comment;


  }

  handleEdit() {
this.homeservice.updateEvent(this.selectedEvent.id_order, this.editOrder).subscribe({
  next:(data: any) =>{
    alert('pedido actualizado correctamente')
    this.router.navigate(['/home'])
    this.closeEditar()
  },error:(error)=>{
    console.log(error)
  }
})
  }

  closeEditar() {
    this.closeEdit.emit();
  }
}

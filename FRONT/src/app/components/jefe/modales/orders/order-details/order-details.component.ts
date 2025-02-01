import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {


  @Output() closeModal = new EventEmitter<boolean>()
  @Input() selectedEvent: any;

  closeEDetails(){
    this.closeModal.emit()
  }

}

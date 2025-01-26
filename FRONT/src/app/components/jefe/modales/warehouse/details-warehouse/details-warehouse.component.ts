import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-details-warehouse',
  standalone: true,
  imports: [],
  templateUrl: './details-warehouse.component.html',
  styleUrl: './details-warehouse.component.css'
})
export class DetailsWarehouseComponent {

  public selectedEvent: any ;
@Output() closeEdit = new EventEmitter<boolean>()




  closeEditar(){
    this.closeEdit.emit();
  }
}

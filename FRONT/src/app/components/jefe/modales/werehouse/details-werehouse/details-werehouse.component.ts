import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-details-werehouse',
  standalone: true,
  imports: [],
  templateUrl: './details-werehouse.component.html',
  styleUrl: './details-werehouse.component.css'
})
export class DetailsWerehouseComponent {

  public selectedEvent: any ;
@Output() closeEdit = new EventEmitter<boolean>()




  closeEditar(){
    this.closeEdit.emit();
  }
}

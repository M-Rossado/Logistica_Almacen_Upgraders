import { Component, EventEmitter, Input, input, Output } from '@angular/core';

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
@Input() seletEvent: any;



ngOnInit(){
console.log(this.selectedEvent)
}


  closeEditar(){
    this.closeEdit.emit();
  }
}

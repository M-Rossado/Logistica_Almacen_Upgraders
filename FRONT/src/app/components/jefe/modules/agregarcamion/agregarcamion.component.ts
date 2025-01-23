import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-agregarcamion',
  standalone: true,
  imports: [],
  templateUrl: './agregarcamion.component.html',
  styleUrl: './agregarcamion.component.css'
})
export class AgregarcamionComponent {


 @Output() closeModalN2 = new EventEmitter<boolean>();


  cerrar(){
this.closeModalN2.emit()
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregar-trabajador',
  standalone: true,
  imports: [],
  templateUrl: './agregar-trabajador.component.html',
  styleUrl: './agregar-trabajador.component.css'
})
export class AgregarTrabajadorComponent {
 
  

  @Output() closeModal = new EventEmitter<boolean>();// cremaos el evento output paso 6

  Close(){
    this.closeModal.emit();// enviamos un booleano hacia nuestro padre lo podemos dejar abierto y despues lo volveremos falso en nuestro compoennte padre 
  }
  
}

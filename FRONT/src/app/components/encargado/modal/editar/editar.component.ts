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


  public editPedido = {
    id:'',
    tipo_articulo: '',
    status: '',
    fecha_entrada: '',
    fecha_salida: null,
    origen: '',
    destino: '',
    almacenes_localizacion: '',
    Trabajadores_almacenes_localizacion: '',
    camiones_matricula: ''
  };



  ngOnInit() {
  this.getEdit()
  }

  getEdit() {
    this.editPedido.id = this.selectedEvent?.id;
    this.editPedido.tipo_articulo = this.selectedEvent?.tipo_articulo;
    this.editPedido.fecha_entrada = this.selectedEvent?.fecha_entrada;
    this.editPedido.fecha_salida = this.selectedEvent?.fecha_salida;
    this.editPedido.origen = this.selectedEvent?.origen;
    this.editPedido.destino = this.selectedEvent?.destino;
    this.editPedido.almacenes_localizacion = this.selectedEvent?.almacenes_localizacion;
    this.editPedido.Trabajadores_almacenes_localizacion = this.selectedEvent?.Trabajadores_almacenes_localizacion;
    this.editPedido.camiones_matricula = this.selectedEvent?.camiones_matricula;


  }

  handleEdit() {
this.homeservice.updateEvent(this.selectedEvent.id, this.editPedido).subscribe({
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

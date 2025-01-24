import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { DetalleOperarioComponent } from "./detalle-operario/detalle-operario.component";
import { CommonModule } from '@angular/common';
import { ICON_MAPPER } from '../../../assets/icon-mapper'; // Importa el mapeo


@Component({
  selector: 'app-operario',
  standalone: true,
  imports: [DetalleOperarioComponent, CommonModule],
  templateUrl: './operario.component.html',
  styleUrl: './operario.component.css'
})
export class OperarioComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public pedidosList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')
  public detalle: boolean = false
  public Showmodal:boolean = false;// paso #2
public showDetail: boolean = false;
public selectedPedido: any = null;

  

  ngOnInit(){
    this.getPedidos()
  }


  getPedidos(){
    this.homeservice.getPedidos().subscribe((data) =>
    this.pedidosList = data)
  }

  // Nueva función para obtener la clase del icono
  getIconClass(status: string): string {
    return ICON_MAPPER[status] || 'bi-question-circle'; // Icono por defecto si no coincide
  }

  // modal 2  
  mostrarDetalle(pedido: any){
    this.selectedPedido = pedido; // Asigna el pedido seleccionado
    this. showDetail = true
    console.log(this.showDetail)
  }
    
  closeDetail(){
    this.showDetail = false
  }
}

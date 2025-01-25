import { Component, OnInit, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { EditarComponent } from './modal/editar/editar.component';

@Component({
  selector: 'app-encargado',
  standalone: true,
  imports: [EditarComponent], // Add necessary Angular modules if needed
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css'] // Fixed typo
})
export class EncargadoComponent implements OnInit {

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public pedidosList: any[] = []; 
  public openEditar: boolean = false;
  public selectedEvent: any ;




  ngOnInit(): void {
   this.getEventos()
  }

  getEventos(): void {
    this.homeservice.getPedidos().subscribe({
      next: (data: any) => {
        this.pedidosList = data;
        console.log(data)
      },
      error: (error) => {
        console.log(error);
      }
    });
    
  }




  openEdiatar(pedido: any ){//paso#1
    this.openEditar = true
    this.selectedEvent = pedido
  
    }
    
    closeEditar(){
    this.openEditar = false
    }

}

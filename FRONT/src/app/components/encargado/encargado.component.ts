import { Component, OnInit, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { EditarComponent } from './modal/editar/editar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encargado',
  standalone: true,
  imports: [EditarComponent,CommonModule], // Add necessary Angular modules if needed
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css'] // Fixed typo
})
export class EncargadoComponent implements OnInit {
getIconClass(arg0: any) {
throw new Error('Method not implemented.');
}

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any[] = [];
  public openEditar: boolean = false;
  public selectedEvent: any ;




  ngOnInit(): void {
   this.getEventos()
  }

  getEventos(): void {
    this.homeservice.getOrdersEncargado().subscribe({
      next: (data: any) => {
       this.ordersList = data
       console.log(this.ordersList)
      },
      error: (error) => {
        console.log(error);
      }
    });
    // console.log(this.ordersList)
  }




  openEdiatar(order: any ){//paso#1
    this.openEditar = true
    this.selectedEvent = order

    }

    closeEditar(){
    this.openEditar = false
    }

}

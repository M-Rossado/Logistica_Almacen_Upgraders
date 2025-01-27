import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { EditStatusComponent } from './modales/edit-status/edit-status.component'; //importación del componente modal de edicion

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [EditStatusComponent], //importación del componente modal de edicion
  templateUrl: './conductor.component.html',
  styleUrl: './conductor.component.css'
})

export class ConductorComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any[] = [];
  public addModal: boolean = false //variable de la apertura del modal


  ngOnInit(): void {
    this.getEventos()
   }

   getEventos(): void {
     this.homeservice.getOrders().subscribe({
       next: (data: any) => {
        this.ordersList= data
       },
       error: (error) => {
         console.log(error);
       }
     });
   }

   openEditStatus(){
      this.addModal = true;
      console.log(this.addModal)
   }

   closeEditStatus(){
    this.addModal = false;
   }




}

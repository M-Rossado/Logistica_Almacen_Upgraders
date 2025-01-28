import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { EditStatusComponent } from './modales/edit-status/edit-status.component'; //importación del componente modal de edicion
import { OrderDetailsComponent } from './modales/order-details/order-details.component';

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [EditStatusComponent, OrderDetailsComponent], //importación del componente modal de edicion
  templateUrl: './conductor.component.html',
  styleUrl: './conductor.component.css'
})

export class ConductorComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any[] = [];
  public ShowDetails:boolean = false
  public addModal: boolean = false //variable de la apertura del modal: copiar a modal de detalle
  public selectEvent: any;



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

   openOrderDetails(event:any){
    this.ShowDetails = true
    this.selectEvent = event
    console.log(this.selectEvent)
  }

  closeOrderDetails(){
    this.ShowDetails =false
  }


  //Esto habrá que moverlo dentro del modal de detalle
   openEditStatus(){
      this.addModal = true;
      console.log(this.addModal)
   }

   closeEditStatus(){
    this.addModal = false;
   }




}

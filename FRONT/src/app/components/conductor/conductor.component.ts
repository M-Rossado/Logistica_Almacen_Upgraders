import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { EditStatusComponent } from './modales/edit-status/edit-status.component';

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [EditStatusComponent],
  templateUrl: './conductor.component.html',
  styleUrl: './conductor.component.css'
})
export class ConductorComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('name')

  public addModal: boolean = false;

  ngOnInit(){
    this.getOrders()
  }


  getOrders(){
    this.homeservice.getOrders().subscribe((data) =>
    this.ordersList= data
  )
    console.log(this.getOrders)
  }


  // Modal de Edición de Estado
  openEditStatus(){
    this.addModal = true;
    console.log(this.addModal)
  }

  closeEditStatus(){
    this.addModal = false;
  }


}

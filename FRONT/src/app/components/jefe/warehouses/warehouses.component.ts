import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { HomeServiceService } from '../../service/home-service.service';

import { AddWarehouseComponent } from '../modales/warehouse/add-warehouse/add-warehouse.component';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [ AddWarehouseComponent,RouterModule],
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css'
})
export class WarehouseComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public warehouses: any = []
  public modalDetails: boolean = false
  public modalAdd: boolean = false
  public selectedEvent: any;
  private router: Router = new Router;




  ngOnInit(): void {
    this.getWarehouses()
    this.getWorkers()
  }

  getWarehouses(): void {
    this.homeservice.getWarehouse().subscribe({
      next: (data: any) => {
        this.warehouses = data;
        console.log(data)
      },
      error: (error) => {
        console.log(error);
      }
    });

  }
  

  getWorkers(){
    this.homeservice.getWorkers().subscribe({
      next(data:any){
        console.log(data)
      }
    })
  }

  opendetails() {
    this.modalAdd = true
   
  }

  

  closeADD(){
    this.modalAdd = false
  }

  comeback(){
    this.router.navigate(['/home']);
   }

}

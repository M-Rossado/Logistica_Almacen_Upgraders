import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { HomeServiceService } from '../../service/home-service.service';
import { DetailsWarehouseComponent } from '../modales/warehouse/details-warehouse/details-warehouse.component';
import { AddWarehouseComponent } from '../modales/warehouse/add-warehouse/add-warehouse.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [DetailsWarehouseComponent, AddWarehouseComponent],
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
  deleteWarehouse(warehouseId:any){
    if(confirm("estas seguro que deseas eliminar esta tienda?")){
      this.homeservice.deleteWarehouse(warehouseId).subscribe({
        next:() => {

          this.warehouses = this.warehouses.filter((warehouse:any )=> warehouse.id !== warehouseId.id)
          alert('evento eliminado correctamente')
        },
        error: (error) => {
          console.log(error)
         }

      })

    }


  }



  opendetails(warehouse: any) {
    this.modalDetails = true
    this.selectedEvent = warehouse
  }

  closedetails() {
    this.modalDetails = false
  }

  openadd() {
    this.modalAdd = true
  }

  closeADD(){
    this. modalAdd= false
  }



}

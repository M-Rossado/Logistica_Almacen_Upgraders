import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { HomeServiceService } from '../../service/home-service.service';
import { DetailsWerehouseComponent } from '../modales/werehouse/details-werehouse/details-werehouse.component';
import { AddWererHouseComponent } from '../modales/werehouse/add-werer-house/add-werer-house.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [DetailsWerehouseComponent, AddWererHouseComponent],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public storages: any = []
  public modalDetails: boolean = false
  public modalAdd: boolean = false
  public selectedEvent: any;
  private router: Router = new Router;




  ngOnInit(): void {
    this.getStorages()
  }

  getStorages(): void {
    this.homeservice.getstorage().subscribe({
      next: (data: any) => {
        this.storages = data;
        console.log(data)
      },
      error: (error) => {
        console.log(error);
      }
    });

  }
  deleteStorage(storeId:any){
    if(confirm("estas seguro que deseas eliminar esta tienda?")){
      this.homeservice.deleteStorage(storeId).subscribe({
        next:(data:any) => {
          alert('evento eliminado correctamente')
          this.storages = this.storages.filter((store:any )=> store.id !== storeId.id)
        },
        error: (error) => {
          console.log(error)
         }

      })
    }
    
    this.router.navigate(['/warehouse']);
  }



  opendetails(store: any) {
    this.modalDetails = true
    this.selectedEvent = store
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

import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { HomeServiceService } from '../../service/home-service.service';
import { DetailsWerehouseComponent } from '../modales/werehouse/details-werehouse/details-werehouse.component';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [DetailsWerehouseComponent],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {
private homeservice: HomeServiceService = inject(HomeServiceService)
 public storages: any = []
 public modalDetails:boolean =false
 public selectedEvent: any ;


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


   opendetails(store: any ){
    this.modalDetails = true
    this.selectedEvent = store
   }

   closedetails(){
    this.modalDetails = false
   }


}

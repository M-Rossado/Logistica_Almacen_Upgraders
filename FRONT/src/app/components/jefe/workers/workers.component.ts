import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { AddWorkerComponent } from '../modales/workers/add-worker/add-worker.component';

import { DetailsWorkerComponent } from '../modales/workers/details-worker/details-worker.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [AddWorkerComponent,DetailsWorkerComponent,RouterModule],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css'
})
export class WorkersComponent {

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public workersList: any[] = [];
  public selectEvent: any ;
  public editModal:boolean = false;
  public addModal: boolean = false;
  public detailsModal:boolean = false;
  private activatedRoute = inject(ActivatedRoute);
  public lugar = localStorage.getItem("lugar")
  event: any ={}
private email: string =""


  ngOnInit(): void {
  
    this.getWorkers()
    
   }
 
   getWorkers(): void {
     this.homeservice.getWorkers().subscribe({
       next: (data: any) => {
        this.workersList = data 
       
       },

       error: (error) => {
         console.log(error);
       }
     });
    
   }

   

    
   




   openaddWorker(){
      this.addModal = true;
   
   }
   closeAddworker(){
    this.addModal = false; 
   }



   openEditWorker(event:any){
    this.selectEvent = event;
    this.editModal = true;
   }
   closeEditWorker(){
    this.editModal = false;
   }



   openDEtails(event:any){
this.detailsModal = true;
this.selectEvent = event;
   }
   closeDEtails(){
    this.detailsModal = false
   }
}

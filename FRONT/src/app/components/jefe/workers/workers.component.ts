import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';
import { AddWorkerComponent } from '../modales/workers/add-worker/add-worker.component';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [AddWorkerComponent],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css'
})
export class WorkersComponent {

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public workersList: any[] = [];
  public addModal: boolean = false




  ngOnInit(): void {
    this.getEventos()
   }
 
   getEventos(): void {
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
      console.log(this.addModal)
   }

   closeAddworker(){
    this.addModal = false; 
   }




}

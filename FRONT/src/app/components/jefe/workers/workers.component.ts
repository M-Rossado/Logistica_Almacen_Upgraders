import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../../service/home-service.service';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css'
})
export class WorkersComponent {

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public workersList: any[] = [];





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









}

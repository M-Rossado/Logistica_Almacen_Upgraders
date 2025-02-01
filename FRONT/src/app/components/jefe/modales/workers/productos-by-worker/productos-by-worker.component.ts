import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute} from '@angular/router';
import { HomeServiceService } from '../../../../service/home-service.service';

@Component({
  selector: 'app-productos-by-worker',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productos-by-worker.component.html',
  styleUrl: './productos-by-worker.component.css'
})
export class ProductosByWorkerComponent {

   private homeservice: HomeServiceService = inject(HomeServiceService)
  private activatedRoute = inject(ActivatedRoute);
events: any ={}
private email: string =""



ngOnInit(){
  this.getByEmail()
}

  getByEmail(): void{
    this.activatedRoute.params.subscribe(params => {
      this.email = params['email'];
    this.homeservice.getOrderByid(this.email).subscribe({
      next:(data:any) => {
  this.events = data; 
  console.log(this.events)
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  })
  }
}

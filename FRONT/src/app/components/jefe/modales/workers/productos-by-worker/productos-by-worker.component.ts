import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute, Router} from '@angular/router';
import { HomeServiceService } from '../../../../service/home-service.service';
import { ICON_MAPPER } from '../../../../../../assets/icon-mapper'; // Importa el mapeo
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-productos-by-worker',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './productos-by-worker.component.html',
  styleUrl: './productos-by-worker.component.css'
})
export class ProductosByWorkerComponent {

   private homeservice: HomeServiceService = inject(HomeServiceService)
  private activatedRoute = inject(ActivatedRoute);
events: any ={}
private email: string =""
private router: Router = new Router;


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

  // Función para obtener la clase del ícono dinámicamente
  getIconClass(status: string): string {
    return ICON_MAPPER[status] || 'bi-question-circle-fill text-muted'; // Icono por defecto si no coincide
  }

  comeback(){
    this.router.navigate(['/home']);
   }
}

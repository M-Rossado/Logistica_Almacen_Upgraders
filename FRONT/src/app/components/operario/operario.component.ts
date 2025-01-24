import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-operario',
  standalone: true,
  imports: [],
  templateUrl: './operario.component.html',
  styleUrl: './operario.component.css'
})
export class OperarioComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public pedidosList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')

  ngOnInit(){
    this.getPedidos()
  }


  getPedidos(){
    this.homeservice.getPedidos().subscribe((data) =>
    this.pedidosList = data
  )

    console.log(this.getPedidos)
  }


}

import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [],
  templateUrl: './conductor.component.html',
  styleUrl: './conductor.component.css'
})
export class ConductorComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService)
  public ordersList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('name')

  ngOnInit(){
    this.getOrders()
  }


  getOrders(){
    this.homeservice.getOrders().subscribe((data) =>
    this.ordersList= data
  )

    console.log(this.getOrders)
  }


}

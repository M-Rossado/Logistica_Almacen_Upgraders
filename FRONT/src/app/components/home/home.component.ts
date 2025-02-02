import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';

import { JefeComponent } from '../jefe/jefe.component';
import { OperarioComponent } from '../operario/operario.component';
import { ConductorComponent } from '../conductor/conductor.component';
import { EncargadoComponent } from '../encargado/encargado.component';
import { OrdersComponent } from '../jefe/orders/orders.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ JefeComponent, OperarioComponent, ConductorComponent,EncargadoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 
  public ordersList: any = []
 
  public  userRole = localStorage.getItem('role');
  public name = localStorage.getItem('name')

  constructor(private router: Router) {}// use el constructor por que no me dejo usar el inject...

  ngOnInit(){
    if (typeof window !== 'undefined') {
      this.userRole
      this.name
    }
  }

 
  logout() {
    
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");

    
    this.router.navigate(['/login']);
  }

}

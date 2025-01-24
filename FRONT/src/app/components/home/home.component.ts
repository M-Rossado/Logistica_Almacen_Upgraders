import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';

import { JefeComponent } from '../jefe/jefe.component';
import { OperarioComponent } from '../operario/operario.component';
import { EncargadoComponent } from "../encargado/encargado.component";
import { ConductorComponent } from "../conductor/conductor.component";
import { PedidosComponent } from '../pedidos/pedidos.component';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [JefeComponent, OperarioComponent, EncargadoComponent, ConductorComponent,PedidosComponen],


  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private homeservice: HomeServiceService = inject(HomeServiceService)
  public pedidosList: any = []
  public userRole = localStorage.getItem('role')
  public name =  localStorage.getItem('nombre')





}

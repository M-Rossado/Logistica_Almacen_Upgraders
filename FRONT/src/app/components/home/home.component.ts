import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { ConductorComponent } from '../conductor/conductor.component';
import { OperarioComponent } from '../operario/operario.component';
import { JefeComponent } from '../jefe/jefe.component';
import { OperarioComponent } from '../operario/operario.component';
import { EncargadoComponent } from "../encargado/encargado.component";

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [PedidosComponent, JefeComponent, OperarioComponent, EncargadoComponent],
=======
  imports: [PedidosComponent, ConductorComponent, OperarioComponent, JefeComponent],
>>>>>>> main
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corregido: "styleUrls" (en plural)
})

export class HomeComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService);
  public pedidosList: any = [];
  public userRole = localStorage.getItem('role');
  public name = localStorage.getItem('nombre');
}


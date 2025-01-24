import { Component, inject } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import { JefeComponent } from '../jefe/jefe.component';
import { OperarioComponent } from '../operario/operario.component';
import { EncargadoComponent } from "../encargado/encargado.component";
import { ConductorComponent } from "../conductor/conductor.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JefeComponent, OperarioComponent, EncargadoComponent, ConductorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corregido: "styleUrls" (en plural)
})

export class HomeComponent {
  private homeservice: HomeServiceService = inject(HomeServiceService);
  public pedidosList: any = [];
  public userRole = localStorage.getItem('role');
  public name = localStorage.getItem('nombre');
}


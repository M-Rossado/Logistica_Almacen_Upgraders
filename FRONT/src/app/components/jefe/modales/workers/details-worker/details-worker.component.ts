import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeServiceService } from '../../../../service/home-service.service';
import { Router } from '@angular/router';
import { ICON_MAPPER } from '../../../../../../assets/icon-mapper'; // Importa el mapeo


@Component({
  selector: 'app-details-worker',
  standalone: true,
  imports: [],
  templateUrl: './details-worker.component.html',
  styleUrl: './details-worker.component.css'
})
export class DetailsWorkerComponent {


 @Input() selecEvent: any;
  @Output() closedetails = new EventEmitter<boolean>();
    private homeservice: HomeServiceService = inject(HomeServiceService);
    private router:Router = new Router


ngOnInit(){
  console.log(this.selecEvent)
}

  // Función para obtener la clase del ícono dinámicamente
  getIconClass(status: string): string {
    return ICON_MAPPER[status] || 'bi-question-circle-fill text-muted'; // Icono por defecto si no coincide
  }



    CloseDEtails(){
      this.closedetails.emit()
      }
}

import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeServiceService } from '../../../../service/home-service.service';
import { Router } from '@angular/router';

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








    CloseDEtails(){
      this.closedetails.emit()
      }
}

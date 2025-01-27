import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeServiceService } from '../../../service/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-status',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-status.component.html',
  styleUrl: './edit-status.component.css'
})
export class EditStatusComponent {

  @Output() closeadd = new EventEmitter<boolean>();
  private homeservice: HomeServiceService = inject(HomeServiceService);
  private router:Router = new Router

    public editStatus = {
      name:"",
      surname:"",
      addres:"",
      dni:"",
       email:"",
      role:"",
      warehouse_location:"",
      truck_plate:"",


    }


 handleEditStatus(){
  if(!this.editStatus.name ||this.editStatus.name.trim() === "" ){
    alert('el nombre es obligarotio ')
    return
}

this.homeservice.addworkers(this.editStatus).subscribe({
  next: (data)=>{
    alert('empleado registrado con exito')
    this.router.navigate(['workers'])
  }
})


  }

Close(){
this.closeadd.emit()
}
}

import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeServiceService } from '../../../../service/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-worker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-worker.component.html',
  styleUrl: './add-worker.component.css'
})
export class AddWorkerComponent {

  @Output() closeadd = new EventEmitter<boolean>();
  private homeservice: HomeServiceService = inject(HomeServiceService);
  private router:Router = new Router
  
    public newWorker = {
      name:"",
      surname:"",
      address:"",
      dni:"",
       email:"",
      role:"",
      warehouse_location:"",
      truck_plate:"",
     
      
    }
  

  handleRegister(){
if(!this.newWorker.name ||this.newWorker.name.trim() === "" ){
  alert('el nombre es obligarotio ')
  return
}
if(!this.newWorker.surname ||this.newWorker.surname.trim() === "" ){
  alert('el nombre es obligarotio ')
  return
}
if(!this.newWorker.address ||this.newWorker.address.trim() === "" ){
  alert('el nombre es obligarotio ')
  return
}
if(!this.newWorker.dni ||this.newWorker.dni.trim() === "" ){
  alert('el nombre es obligarotio ')
  return
}

if(!this.newWorker.email ||this.newWorker.email.trim() === "" ){
  alert('el nombre es obligarotio ')
  return
}
if(!this.newWorker.role ||this.newWorker.role.trim() === "" ){
  alert('el nombre es obligarotio ')
  return
}

this.homeservice.addworkers(this.newWorker).subscribe({
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

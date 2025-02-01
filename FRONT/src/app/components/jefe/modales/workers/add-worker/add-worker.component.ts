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
  public warehouses:any[] =[]
  
    public newWorker = {
      name:"",
      surname:"",
      address:"",
      dni:"",
      email:"",
      password:"",
      role:"",
      warehouse_location:"",
      truck_plate:"",
     
      
    }

    ngOnInit(){
      this.getWarehouses()
    }
  

  handleRegister(){
if(!this.newWorker.name ||this.newWorker.name.trim() === "" ){
  alert('el nombre es obligarotio ')
  return
}
if(!this.newWorker.surname ||this.newWorker.surname.trim() === "" ){
  alert('el apellido es obligarotio ')
  return
}
if(!this.newWorker.address ||this.newWorker.address.trim() === "" ){
  alert('la direccion es obligarotio ')
  return
}
if(!this.newWorker.dni ||this.newWorker.dni.trim() === "" ){
  alert('el DNI es obligarotio ')
  return
}

if(!this.newWorker.email ||this.newWorker.email.trim() === "" ){
  alert('el email es obligarotio ')
  return
}
if(!this.newWorker.role ||this.newWorker.role.trim() === "" ){
  alert('el role es obligarotio ')
  return
}
if(!this.newWorker.password ||this.newWorker.password.trim() === "" ){
  alert('la contraseña es obligatoria ')
  return
}

this.homeservice.addworkers(this.newWorker).subscribe({
  next: (data)=>{
    alert('empleado registrado con exito')
    this.router.navigate(['/workers'])
  }
})


  }

Close(){
this.closeadd.emit()
}


getWarehouses(): void {
  this.homeservice.getWarehouse().subscribe({
    next: (data: any) => {
      this.warehouses = data;
      console.log(data)
    },
    error: (error) => {
      console.log(error);
    }
  });
}
}

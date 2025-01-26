import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeServiceService } from '../../../../service/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-warehouse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-warehouse.component.html',
  styleUrl: './add-warehouse.component.css'
})
export class AddWarehouseComponent {

private homeservice: HomeServiceService = inject(HomeServiceService);
private router: Router = new Router;
@Output() closeadd = new EventEmitter<boolean>();




  public newOne = {
    location:""
  }



  handleRegister(){

    if (!this.newOne.location|| this.newOne.location.trim() === "") {
      alert("El Nombre es obligatorio.");
      return;
    }

this.homeservice.addNewWarehouse(this.newOne).subscribe({
  next: (data:any) =>{
    alert('alacen creado con exito')
    this.router.navigate(['/warehouse']);
  }
})
  }

  Close(){
this.closeadd.emit()
  }
}

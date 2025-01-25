import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeServiceService } from '../../../../service/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-werer-house',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-werer-house.component.html',
  styleUrl: './add-werer-house.component.css'
})
export class AddWererHouseComponent {

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

this.homeservice.addNewStorage(this.newOne).subscribe({
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

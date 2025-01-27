import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HomeServiceService } from '../../../../service/home-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-worker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-worker.component.html',
  styleUrl: './edit-worker.component.css'
})
export class EditWorkerComponent {


  @Input() selecEvent: any
  @Output() editModal = new EventEmitter<boolean>();
  private homeservice: HomeServiceService = inject(HomeServiceService);
  private router: Router = new Router

  public editWorker = {
    name:"",
    surname: "",
    address: "",
    dni: "",
    email: "",
    role: "",
    warehouse_location: "",
    truck_plate: "",


  }

ngOnInit(){
this.getWorker()
}

  getWorker() {
    this.editWorker = {
      name: this.selecEvent?.name || "",
      surname: this.selecEvent?.surname || "",
      address: this.selecEvent?.address || "",
      dni: this.selecEvent?.dni || "",
      email: this.selecEvent?.email || "",
      role: this.selecEvent?.role || "",
      warehouse_location: this.selecEvent?.warehouse_location || "",
      truck_plate: this.selecEvent?.truck_plate || ""
    };
  }


  handleEditWorker(){
    this.homeservice.updateWorker(this.selecEvent.id, this.editWorker).subscribe({
      next:(data:any)=>{
        alert('datos actualizado correctamente')
        this.router.navigate(['/workers'])
        this.editModal.emit()
      },error:(error)=>{
        console.log(error)
      }
    })
      }
   

  closeEdit() {
    this.editModal.emit()
  }
}

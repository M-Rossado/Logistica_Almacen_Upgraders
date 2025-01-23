import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [],
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {

  private dialogRef = inject(MatDialogRef<DialogContentComponent>);

  closeDialog() {
    this.dialogRef.close('Datos opcionales al cerrar'); 
  }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion-eliminar',
  templateUrl: './confirmacion-eliminar.component.html',
  styleUrl: './confirmacion-eliminar.component.css'
})
export class ConfirmacionEliminarComponent {
  
  constructor (private dialogRef: MatDialogRef<ConfirmacionEliminarComponent>){}


  cancelar(){
    this.dialogRef.close(false);
  }

  confirmar(){
    this.dialogRef.close(true);
  }

}

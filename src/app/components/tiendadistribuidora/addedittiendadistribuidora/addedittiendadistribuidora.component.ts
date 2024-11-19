import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiendaDistribuidora } from '../../../models/tienda-distribuidora';
import { TiendaDistribuidoraService } from '../../../services/tienda-distribuidora.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addedittiendadistribuidora',
  templateUrl: './addedittiendadistribuidora.component.html',
  styleUrl: './addedittiendadistribuidora.component.css'
})
export class AddedittiendadistribuidoraComponent {
    form: FormGroup;
    isEditMode = false;
    tienda: TiendaDistribuidora | null = null;
  
    constructor(
      private fb: FormBuilder,
      private tiendaService: TiendaDistribuidoraService,
      private dialogRef: MatDialogRef<AddedittiendadistribuidoraComponent>
    ) {
      this.form = this.fb.group({
        idTienda: [0],
        nombreTienda: ['', Validators.required],
        prendaIdPrenda: [null, Validators.required],
      });
    }
  
    ngOnInit(): void {
      if (this.tienda) {
        this.isEditMode = true;
        this.form.patchValue(this.tienda);
      }
    }
  
    save() {
      if (this.form.valid) {
        const tiendaData: TiendaDistribuidora = this.form.value;
  
        if (this.isEditMode) {
          this.tiendaService.updateTienda(tiendaData).subscribe({
            next: () => this.dialogRef.close(true),
            error: (err) => console.error('Error al actualizar la tienda:', err),
          });
        } else {
          this.tiendaService.addTienda(tiendaData).subscribe({
            next: () => this.dialogRef.close(true),
            error: (err) => console.error('Error al agregar la tienda:', err),
          });
        }
      }
    }
  
    cancel() {
      this.dialogRef.close(false);
    }
  }
  


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TiendaDistribuidoraService } from '../../../services/tienda-distribuidora.service';
import { TiendaDistribuidora } from '../../../models/tienda-distribuidora';

@Component({
  selector: 'app-add-edit-tiendradistribuidora',
  templateUrl: './add-edit-tiendradistribuidora.component.html',
  styleUrl: './add-edit-tiendradistribuidora.component.css',
})
export class AddEditTiendradistribuidoraComponent {
  addEditForm!: FormGroup;
  tiendas: TiendaDistribuidora[] = [];
  tiendaDistribuidoraId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private tiendaDistribuidoraService: TiendaDistribuidoraService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.inicializarFormulario();
    this.cargarDatos();
  }

  inicializarFormulario() {
    this.addEditForm = this.formBuilder.group({
      idTienda: [null],
      nombreTienda: ['', [Validators.required]],
      descuentos: ['', [Validators.required, Validators.min(0)]],
      prendaTiendas: ['', [Validators.required]],
    });
  }

  cargarDatos() {
    this.tiendaDistribuidoraId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    if (this.tiendaDistribuidoraId && this.tiendaDistribuidoraId > 0) {
      this.tiendaDistribuidoraService.getTiendaById(this.tiendaDistribuidoraId).subscribe({
        next: (data: TiendaDistribuidora) => {
          this.addEditForm.patchValue(data);
        },
        error: (err) => {
          console.error('Error al cargar la tienda distribuidora:', err);
        },
      });
    }
  }

  guardarTiendaDistribuidora() {
    const tienda: TiendaDistribuidora = this.addEditForm.value;

    if (!this.tiendaDistribuidoraId || this.tiendaDistribuidoraId === 0) {
      // Crear nueva tienda
      this.tiendaDistribuidoraService.addTienda(tienda).subscribe({
        next: () => {
          this.mostrarMensaje('La tienda distribuidora fue registrada correctamente.');
          this.router.navigate(['/tienda-distribuidora']);
        },
        error: (err) => {
          console.error('Error al registrar la tienda distribuidora:', err);
          this.mostrarMensaje('Hubo un error al registrar la tienda distribuidora.');
        },
      });
    } else {
      // Actualizar tienda existente
      tienda.idTienda = this.tiendaDistribuidoraId;
      this.tiendaDistribuidoraService.editTienda(tienda).subscribe({
        next: () => {
          this.mostrarMensaje('La tienda distribuidora fue actualizada correctamente.');
          this.router.navigate(['/tienda-distribuidora']);
        },
        error: (err) => {
          console.error('Error al actualizar la tienda distribuidora:', err);
          this.mostrarMensaje('Hubo un error al actualizar la tienda distribuidora.');
        },
      });
    }
  }

  mostrarMensaje(mensaje: string) {
    this.snackbar.open(mensaje, 'OK', { duration: 3000 });
  }
}

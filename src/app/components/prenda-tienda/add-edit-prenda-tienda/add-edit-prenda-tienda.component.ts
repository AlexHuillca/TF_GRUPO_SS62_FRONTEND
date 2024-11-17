import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiendaDistribuidora } from '../../../models/tienda-distribuidora';
import { Prenda } from '../../../models/prenda';
import { PrendaTiendaService } from '../../../services/prenda-tienda.service';
import { TiendaDistribuidoraService } from '../../../services/tienda-distribuidora.service';
import { PrendaService } from '../../../services/prenda.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PrendaTienda } from '../../../models/prenda-tienda';

@Component({
  selector: 'app-add-edit-prenda-tienda',
  templateUrl: './add-edit-prenda-tienda.component.html',
  styleUrl: './add-edit-prenda-tienda.component.css',

})
export class AddEditPrendaTiendaComponent {
  addEditForm!: FormGroup;
  prendaTiendaId: number = 0;
  tiendas: TiendaDistribuidora[] = [];
  prendas: Prenda[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private prendaTiendaService: PrendaTiendaService,
    private tiendaDistribuidoraService: TiendaDistribuidoraService,
    private prendaService: PrendaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cargaFormulario();
    this.cargarTiendas();
    this.cargarPrendas();
  }

  cargaFormulario() {
    this.addEditForm = this.formBuilder.group({
      idPrendaTienda: [""],
      fechaIngreso: ["", [Validators.required]],
      stockDisponible: ["", [Validators.required, Validators.min(0)]],
      disponible: ["", [Validators.required]],
      idTienda: ["", [Validators.required]],
      prendaIdPrenda: ["", [Validators.required]]
    });

    this.prendaTiendaId = parseInt(this.activatedRoute.snapshot.params["id"]);
    if (this.prendaTiendaId > 0 && this.prendaTiendaId != undefined) {
      this.prendaTiendaService.getPrendaTiendaById(this.prendaTiendaId).subscribe({
        next: (data: PrendaTienda) => {
          this.addEditForm.get("idPrendaTienda")?.setValue(data.idPrendaTienda);
          this.addEditForm.get("fechaIngreso")?.setValue(data.fechaIngreso);
          this.addEditForm.get("stockDisponible")?.setValue(data.stockDisponible);
          this.addEditForm.get("disponible")?.setValue(data.disponible);
          this.addEditForm.get("idTienda")?.setValue(data.idTienda.idTienda);
          this.addEditForm.get("prendaIdPrenda")?.setValue(data.prendaIdPrenda.id);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.prendaTiendaId = 0;
    }
  }

  cargarTiendas() {
    this.tiendaDistribuidoraService.getTiendas().subscribe({
      next: (data: TiendaDistribuidora[]) => {
        this.tiendas = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  cargarPrendas() {
    this.prendaService.getPrendas().subscribe({
      next: (data: Prenda[]) => {
        this.prendas = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  grabarPrendaTienda() {
    const prendaTienda: PrendaTienda = {
      idPrendaTienda: this.addEditForm.get("idPrendaTienda")?.value,
      fechaIngreso: this.addEditForm.get("fechaIngreso")?.value,
      stockDisponible: parseInt(this.addEditForm.get("stockDisponible")?.value),
      disponible: this.addEditForm.get("disponible")?.value,
      idTienda: { idTienda: this.addEditForm.get("idTienda")?.value, nombreTienda: '' },
      prendaIdPrenda: this.addEditForm.get("prendaIdPrenda")?.value as Prenda
    };

    if (this.prendaTiendaId == 0) {
      this.prendaTiendaService.addPrendaTienda(prendaTienda).subscribe({
        next: () => {
          this.router.navigate(["/prendas-tienda"]);
          this.snackbar.open("La prenda en tienda fue registrada correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.log(err);
          this.snackbar.open("Hubo un error en el registro de la prenda en tienda", "OK", { duration: 2000 });
        }
      });
    } else {
      this.prendaTiendaService.editPrendaTienda(prendaTienda).subscribe({
        next: () => {
          this.router.navigate(["/prendas-tienda"]);
          this.snackbar.open("La prenda en tienda fue actualizada correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.log(err);
          this.snackbar.open("Hubo un error en la actualización de la prenda en tienda", "OK", { duration: 2000 });
        }
      });
    }
  }
}

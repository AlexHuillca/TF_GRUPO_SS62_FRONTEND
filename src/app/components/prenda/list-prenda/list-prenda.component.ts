import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Prenda } from '../../../models/prenda';
import { PrendaService } from '../../../services/prenda.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionEliminarComponent } from '../../confirmaciones/confirmacion-eliminar/confirmacion-eliminar.component';

@Component({
  selector: 'app-list-prenda',
  templateUrl: './list-prenda.component.html',
  styleUrl: './list-prenda.component.css'
})
export class ListPrendaComponent {

  dsPrendas = new MatTableDataSource<Prenda>();
  displayedColumns: string[] = ['id', 'nombrePrenda', 'tipoPrenda', 'colorPrenda', 'talla', 'precioOriginal', 'precioFinal', 'nombreMarca', 'nombreCategoria', 'acciones'];

  constructor(private prendaService: PrendaService, private dialog: MatDialog) {}

  ngOnInit() {
    this.cargarPrendas();
  }

  cargarPrendas() {
    this.prendaService.getPrendas().subscribe({
      next: (data: Prenda[]) => {
        this.dsPrendas = new MatTableDataSource(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  borrarPrenda(id: number) {
    let dialogRef = this.dialog.open(ConfirmacionEliminarComponent);
    dialogRef.afterClosed().subscribe(opcionSeleccionada => {
      if (opcionSeleccionada === true) {
        this.prendaService.deletePrenda(id).subscribe({
          next: () => {
            this.cargarPrendas();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dsPrendas.filter = filterValue.trim().toLowerCase();
  }

}

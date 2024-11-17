import { Component } from '@angular/core';
import { PrendaTienda } from '../../../models/prenda-tienda';
import { PrendaTiendaService } from '../../../services/prenda-tienda.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmacionEliminarComponent } from '../../confirmaciones/confirmacion-eliminar/confirmacion-eliminar.component';

@Component({
  selector: 'app-list-prenda-tienda',
  templateUrl: './list-prenda-tienda.component.html',
  styleUrl: './list-prenda-tienda.component.css'
})
export class ListPrendaTiendaComponent {

  dsPrendasTienda = new MatTableDataSource<PrendaTienda>();
  displayedColumns: string[] = ['idPrendaTienda', 'nombrePrenda', 'nombreTienda', 'fechaIngreso', 'stockDisponible', 'disponible', 'acciones'];

  constructor(private prendaTiendaService: PrendaTiendaService, private dialog: MatDialog) {}

  ngOnInit() {
    this.cargarPrendasTienda();
  }

  cargarPrendasTienda() {
    this.prendaTiendaService.getPrendaTiendas().subscribe({
      next: (data: PrendaTienda[]) => {
        this.dsPrendasTienda = new MatTableDataSource(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  borrarPrendaTienda(id: number) {
    let dialogRef = this.dialog.open(ConfirmacionEliminarComponent);
    dialogRef.afterClosed().subscribe(opcionSeleccionada => {
      if (opcionSeleccionada === true) {
        this.prendaTiendaService.deletePrendaTienda(id).subscribe({
          next: () => {
            this.cargarPrendasTienda();
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
    this.dsPrendasTienda.filter = filterValue.trim().toLowerCase();
  }

}

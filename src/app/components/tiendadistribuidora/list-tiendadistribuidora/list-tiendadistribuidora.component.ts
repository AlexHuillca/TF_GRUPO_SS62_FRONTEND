import { Component } from '@angular/core';
import { TiendaDistribuidoraService } from '../../../services/tienda-distribuidora.service';
import { TiendaDistribuidora } from '../../../models/tienda-distribuidora';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmacionEliminarComponent } from '../../confirmaciones/confirmacion-eliminar/confirmacion-eliminar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-tiendadistribuidora',
  templateUrl: './list-tiendadistribuidora.component.html',
  styleUrl: './list-tiendadistribuidora.component.css'
})
export class ListTiendadistribuidoraComponent {
  dsTiendaDistribuidora = new MatTableDataSource<TiendaDistribuidora>();

  displayedColumns: string[] = ['idTienda', 'nombreTienda', 'nombreTienda', 'descuentos?', 'prendaTiendas?'];

  constructor(private tiendaDistribuidoraService: TiendaDistribuidoraService, private dialog: MatDialog) {}
  ngOnInit() {
    this.cargarTiendasDistribuidora();
  }
  cargarTiendasDistribuidora() {
    this.tiendaDistribuidoraService.getTiendas().subscribe({
      next: (data: TiendaDistribuidora[]) => {
        this.dsTiendaDistribuidora = new MatTableDataSource(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  borrarTiendaDistribuidora(id: number) {
    let dialogRef = this.dialog.open(ConfirmacionEliminarComponent);
    dialogRef.afterClosed().subscribe(opcionSeleccionada => {
      if (opcionSeleccionada === true) {
        this.tiendaDistribuidoraService.deleteTienda(id).subscribe({
          next: () => {
            this.cargarTiendasDistribuidora();
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
    this.dsTiendaDistribuidora.filter = filterValue.trim().toLowerCase();
  }

}

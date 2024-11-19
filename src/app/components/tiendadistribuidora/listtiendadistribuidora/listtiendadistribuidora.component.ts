import { Component } from '@angular/core';
import { TiendaDistribuidora } from '../../../models/tienda-distribuidora';
import { TiendaDistribuidoraService } from '../../../services/tienda-distribuidora.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddedittiendadistribuidoraComponent } from '../addedittiendadistribuidora/addedittiendadistribuidora.component';
import { ConfirmacionEliminarComponent } from '../../confirmaciones/confirmacion-eliminar/confirmacion-eliminar.component';

@Component({
  selector: 'app-listtiendadistribuidora',
  templateUrl: './listtiendadistribuidora.component.html',
  styleUrl: './listtiendadistribuidora.component.css'
})
  export class ListTiendaDistribuidoraComponent {
  
    dsTiendas = new MatTableDataSource<TiendaDistribuidora>();
    displayedColumns: string[] = ['idTienda', 'nombreTienda', 'prendaIdPrenda', 'acciones'];
  
    constructor(private tiendaService: TiendaDistribuidoraService, private dialog: MatDialog) {}
  
    ngOnInit() {
      this.cargarTiendas();
    }
  
    cargarTiendas() {
      this.tiendaService.getTiendas().subscribe({
        next: (data: TiendaDistribuidora[]) => {
          this.dsTiendas = new MatTableDataSource(data);
        },
        error: (err) => console.error('Error al cargar las tiendas:', err),
      });
    }
  
    agregarEditarTienda(tienda?: TiendaDistribuidora) {
      const dialogRef = this.dialog.open(AddedittiendadistribuidoraComponent, {
        data: tienda || null,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.cargarTiendas();
        }
      });
    }
  
    borrarTienda(idTienda: number) {
      const dialogRef = this.dialog.open(ConfirmacionEliminarComponent);
      dialogRef.afterClosed().subscribe((opcionSeleccionada) => {
        if (opcionSeleccionada) {
          this.tiendaService.deleteTienda(idTienda).subscribe({
            next: () => this.cargarTiendas(),
            error: (err) => console.error('Error al eliminar la tienda:', err),
          });
        }
      });
    }
  }
  


import { CategoriaPrendaService } from './../../../services/categoria-prenda.service';
import { Component } from "@angular/core";
import { CategoriaPrenda } from "../../../models/categoria-prenda";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionEliminarComponent } from '../../confirmaciones/confirmacion-eliminar/confirmacion-eliminar.component';


@Component({
  selector: 'app-list-categoriaprenda',
  templateUrl: './list-categoriaprenda.component.html',
  styleUrl: './list-categoriaprenda.component.css'
})
export class ListCategoriaprendaComponent {

  dsCategoria = new MatTableDataSource<CategoriaPrenda>();
  displayedColumns: string[] = ['idCategoria', 'nombreCategoria', 'descripcionCategoria', 'prendas'];
  
  constructor(private CategoriaPrendaService:CategoriaPrendaService,private dialog:MatDialog){}
  ngOnInit() {
    this.cargarCategorias();
  }
  cargarCategorias(){
    this.CategoriaPrendaService.getCategorias().subscribe({
      next:(data: CategoriaPrenda[])=>{
        this.dsCategoria= new MatTableDataSource(data);
      },
      error:(err) =>{
        console.log(err);
      }
    });
  }

  borrarCategoria(id: number){
    let dialogRef = this.dialog.open(ConfirmacionEliminarComponent);
    dialogRef.afterClosed().subscribe(opcionSeleccionada => {
      if (opcionSeleccionada === true) {
        this.CategoriaPrendaService.deleteCategoria(id).subscribe({
          next: () =>{
            this.cargarCategorias();
          },
          error:(err)=>{
            console.log(err);
          }
        });
      }
    });
  }
  
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dsCategoria.filter=filterValue.trim().toLowerCase();
    
  }
}



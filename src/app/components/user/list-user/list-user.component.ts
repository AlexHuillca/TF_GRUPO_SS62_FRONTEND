import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionEliminarComponent } from '../../confirmaciones/confirmacion-eliminar/confirmacion-eliminar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  dsUsers = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'nombreUsuario', 'correo', 'direccion', 'edad', 'dni', 'enabled', 'fechaRegistro', 'authorities', 'acciones'];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.dsUsers = new MatTableDataSource(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  borrarUsuario(id: number) {
    let dialogRef = this.dialog.open(ConfirmacionEliminarComponent);
    dialogRef.afterClosed().subscribe(opcionSeleccionada => {
      if (opcionSeleccionada === true) {
        this.userService.deleteUser(id).subscribe({
          next: () => {
            this.cargarUsuarios();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });
  }

  editarUsuario(id: number) {
    this.router.navigate([`/users/edit/${id}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dsUsers.filter = filterValue.trim().toLowerCase();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../../models/register';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: RegisterModel = {
    id: 0,
    Nombre_Usuario: '',
    password: '',
    type: 'ROLE_CLIENTE',
    edad: null,
    fecha_registro: new Date().toISOString().split('T')[0],
    genero: null,
    correo: '',
    direccion: null,
    dni: null
  };

  constructor(
    private userService: UserService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onRegister() {
    this.userService.register(this.registerData).subscribe(
      (response) => {
        this.router.navigate(['/login']);
        this.snackBar.open('Registro exitoso', 'Cerrar', {
          duration: 2000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/login']);
      },
      (error) => {        
        this.snackBar.open('Error en el registro', 'Cerrar', {
          duration: 2000,
          panelClass: ['success-snackbar']
        }); 
      }
    );
  }
}

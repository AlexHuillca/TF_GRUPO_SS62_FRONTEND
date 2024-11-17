import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginModel } from '../../../models/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  
  onSubmit() {
    const loginData: LoginModel = {
      nombre_Usuario: this.username,
      password: this.password
    };

    this.userService.login(loginData).subscribe(
      (data: any) => {
        sessionStorage.setItem('token', data.jwtToken);
        this.router.navigate(['cliente']);

        this.snackBar.open('Login successful!', 'Cerrar', {
          duration: 2000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        this.snackBar.open('Credenciales no validas', 'Cerrar', {
          duration: 2000,
          panelClass: ['success-snackbar']
        });      
      }
    );
  }
}

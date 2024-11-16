import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LOGINComponent {

  loginForm!: FormGroup;
  ocultarPass: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.creaFormulario();
  }

  creaFormulario() {
    this.loginForm = this.formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  login() {
    const user: User = {
      id: 0,
      nombreUsuario: this.loginForm.get('nombreUsuario')?.value,
      password: this.loginForm.get('password')?.value,
      authorities: "",
      correo: "",
      direccion: "",
      fechaRegistro: "",
      enabled: true,
      genero: "",
      edad: 0,
      dni: "",
      preferencia:"",
    };
    
    console.log(user);

    this.userService.login(user).subscribe({
      next: (data) => {
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        console.log(err);
        this.snack.open("Hubo un error en la identificación del usuario", "OK", { duration: 2000 });
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  addEditForm!: FormGroup;
  userId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.addEditForm = this.formBuilder.group({
      id: [""],
      nombreUsuario: ["", [Validators.required, Validators.minLength(2)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      correo: ["", [Validators.required, Validators.email]],
      direccion: ["", [Validators.required]],
      fechaRegistro: [""],
      enabled: [true],
      genero: ["", [Validators.required]],
      edad: ["", [Validators.required, Validators.min(18)]],
      dni: ["", [Validators.required, Validators.minLength(8)]],
      authorities: ["", [Validators.required]],
      preferencia: ["", [Validators.required]]
    });

    this.userId = parseInt(this.activatedRoute.snapshot.params["id"]);

    if (this.userId > 0 && this.userId != undefined) {
      this.userService.getUser(this.userId).subscribe({
        next: (data: User) => {
          this.addEditForm.patchValue(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.userId = 0;
    }
  }

  grabarUsuario() {
    const user: User = {
      id: this.addEditForm.get("id")?.value,
      nombreUsuario: this.addEditForm.get("nombreUsuario")?.value,
      password: this.addEditForm.get("password")?.value,
      correo: this.addEditForm.get("correo")?.value,
      direccion: this.addEditForm.get("direccion")?.value,
      fechaRegistro: this.addEditForm.get("fechaRegistro")?.value,
      enabled: this.addEditForm.get("enabled")?.value,
      genero: this.addEditForm.get("genero")?.value,
      edad: this.addEditForm.get("edad")?.value,
      dni: this.addEditForm.get("dni")?.value,
      authorities: this.addEditForm.get("authorities")?.value,
      preferencia: this.addEditForm.get("preferencia")?.value
    };

    if (this.userId === 0) {
      this.userService.newUser(user).subscribe({
        next: () => {
          this.router.navigate(["/users"]);
          this.snackbar.open("El usuario fue registrado correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.log(err);
          this.snackbar.open("Hubo un error en el registro del usuario", "OK", { duration: 2000 });
        }
      });
    } else {
      this.userService.updateUser(user).subscribe({
        next: () => {
          this.router.navigate(["/users"]);
          this.snackbar.open("El usuario fue actualizado correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.log(err);
          this.snackbar.open("Hubo un error en la actualización del usuario", "OK", { duration: 2000 });
        }
      });
    }
  }
}

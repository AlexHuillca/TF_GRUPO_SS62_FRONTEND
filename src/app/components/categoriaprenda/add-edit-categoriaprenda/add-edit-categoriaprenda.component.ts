import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaPrendaService } from '../../../services/categoria-prenda.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaPrenda } from '../../../models/categoria-prenda';

@Component({
  selector: 'app-add-edit-categoriaprenda',
  templateUrl: './add-edit-categoriaprenda.component.html',
  styleUrl: './add-edit-categoriaprenda.component.css',
  standalone: false
})
export class AddEditCategoriaprendaComponent implements OnInit {
  addEditForm!: FormGroup;
  categoriaId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaPrendaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cargaFormulario();
  }

  cargaFormulario() {
    this.addEditForm = this.formBuilder.group({
      idCategoria: [""],
      nombreCategoria: ["", [Validators.required, Validators.minLength(2)]],
      descripcionCategoria: ["", [Validators.required, Validators.maxLength(100)]]
    });

    this.categoriaId = parseInt(this.activatedRoute.snapshot.params["id"]);
    if (this.categoriaId > 0) {
      this.categoriaService.getCategoriaById(this.categoriaId).subscribe({
        next: (data: CategoriaPrenda) => {
          this.addEditForm.patchValue(data);
        },
        error: (err) => {
          console.error(err);
          this.snackbar.open("Error al cargar la categoría", "OK", { duration: 2000 });
        }
      });
    }
  }

  grabarCategoria() {
    const categoria: CategoriaPrenda = {
      idCategoria: this.addEditForm.get("idCategoria")?.value,
      nombreCategoria: this.addEditForm.get("nombreCategoria")?.value,
      descripcionCategoria: this.addEditForm.get("descripcionCategoria")?.value
    };

    if (!this.categoriaId) {
      this.categoriaService.addCategoria(categoria).subscribe({
        next: () => {
          this.router.navigate(["/categorias"]);
          this.snackbar.open("Categoría registrada correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.error(err);
          this.snackbar.open("Error al registrar la categoría", "OK", { duration: 2000 });
        }
      });
    } else {
      this.categoriaService.editCategoria(categoria).subscribe({
        next: () => {
          this.router.navigate(["/categorias"]);
          this.snackbar.open("Categoría actualizada correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.error(err);
          this.snackbar.open("Error al actualizar la categoría", "OK", { duration: 2000 });
        }
      });
    }
  }
}

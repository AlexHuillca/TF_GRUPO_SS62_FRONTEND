import { Component } from '@angular/core';

@Component({
  selector: 'app-creaeditauser',
  standalone: true,
  imports: [],
  templateUrl: './creaeditauser.component.html',
  styleUrl: './creaeditauser.component.css'
})
export class CreaeditauserComponent {

  addEditForm!: FormGroup;
  prendaId: number = 0;
  marcas: Marca[] = [];
  categorias: CategoriaPrenda[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private prendaService: PrendaService,
    private marcaService: MarcaService,
    private categoriaService: CategoriaPrendaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cargaFormulario();
    this.cargarMarcas();
    this.cargarCategorias();
  }

  cargaFormulario() {
    this.addEditForm = this.formBuilder.group({
      id: [""],
      nombrePrenda: ["", [Validators.required, Validators.minLength(2)]],
      tipoPrenda: ["", [Validators.required]],
      colorPrenda: ["", [Validators.required]],
      talla: ["", [Validators.required]],
      precioOriginal: ["", [Validators.required, Validators.min(0)]],
      precioFinal: ["", [Validators.required, Validators.min(0)]],
      idMarca: ["", [Validators.required]],
      idCategoria: ["", [Validators.required]]
    });

    this.prendaId = parseInt(this.activatedRoute.snapshot.params["id"]);
    if (this.prendaId > 0 && this.prendaId != undefined) {
      // Cuando queremos actualizar
      this.prendaService.getPrendaById(this.prendaId).subscribe({
        next: (data: Prenda) => {
          this.addEditForm.get("id")?.setValue(data.id);
          this.addEditForm.get("nombrePrenda")?.setValue(data.nombrePrenda);
          this.addEditForm.get("tipoPrenda")?.setValue(data.tipoPrenda);
          this.addEditForm.get("colorPrenda")?.setValue(data.colorPrenda);
          this.addEditForm.get("talla")?.setValue(data.talla);
          this.addEditForm.get("precioOriginal")?.setValue(data.precioOriginal);
          this.addEditForm.get("precioFinal")?.setValue(data.precioFinal);
          this.addEditForm.get("idMarca")?.setValue(data.idMarca.idMarca);
          this.addEditForm.get("idCategoria")?.setValue(data.idCategoria.idCategoria);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.prendaId = 0;
    }
  }

  cargarMarcas() {
    this.marcaService.getMarcas().subscribe({
      next: (data: Marca[]) => {
        this.marcas = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  cargarCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (data: CategoriaPrenda[]) => {
        this.categorias = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  grabarPrenda() {
    const prenda: Prenda = {
      id: this.addEditForm.get("id")?.value,
      nombrePrenda: this.addEditForm.get("nombrePrenda")?.value,
      tipoPrenda: this.addEditForm.get("tipoPrenda")?.value,
      colorPrenda: this.addEditForm.get("colorPrenda")?.value,
      talla: this.addEditForm.get("talla")?.value,
      precioOriginal: parseFloat(this.addEditForm.get("precioOriginal")?.value),
      precioFinal: parseFloat(this.addEditForm.get("precioFinal")?.value),
      idMarca: { idMarca: this.addEditForm.get("idMarca")?.value, nombreMarca: '' },
      idCategoria: { idCategoria: this.addEditForm.get("idCategoria")?.value, nombreCategoria: '', descripcionCategoria: '' }
    };

    if (this.prendaId == 0) {
      this.prendaService.addPrenda(prenda).subscribe({
        next: (data) => {
          this.router.navigate(["/prendas"]);
          this.snackbar.open("La prenda fue registrada correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.log(err);
          this.snackbar.open("Hubo un error en el registro de la prenda", "OK", { duration: 2000 });
        }
      });
    } else {
      this.prendaService.editPrenda(prenda).subscribe({
        next: (data) => {
          this.router.navigate(["/prendas"]);
          this.snackbar.open("La prenda fue actualizada correctamente", "OK", { duration: 2000 });
        },
        error: (err) => {
          console.log(err);
          this.snackbar.open("Hubo un error en la actualización de la prenda", "OK", { duration: 2000 });
        }
      });
    }
  }
}

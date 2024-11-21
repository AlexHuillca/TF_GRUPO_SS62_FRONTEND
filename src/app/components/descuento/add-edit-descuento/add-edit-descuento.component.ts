import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-descuento',
  templateUrl: './add-edit-descuento.component.html',
  styleUrl: './add-edit-descuento.component.css',
  standalone: false
})
export class AddEditDescuentoComponent {
  addEditForm!: FormGroup;

}


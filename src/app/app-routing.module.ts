import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPrendaComponent } from './components/prenda/add-edit-prenda/add-edit-prenda.component';
import { ListPrendaComponent } from './components/prenda/list-prenda/list-prenda.component';

const routes: Routes = [
  {path:"prendas",component: ListPrendaComponent},
  {path:"agregar_prenda", component: AddEditPrendaComponent},
  {path:"editar_prenda", component: AddEditPrendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

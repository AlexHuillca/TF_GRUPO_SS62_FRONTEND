import { ListPrendaTiendaComponent } from './components/prenda-tienda/list-prenda-tienda/list-prenda-tienda.component';
import { AddEditPrendaTiendaComponent } from './components/prenda-tienda/add-edit-prenda-tienda/add-edit-prenda-tienda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPrendaComponent } from './components/prenda/add-edit-prenda/add-edit-prenda.component';
import { ListPrendaComponent } from './components/prenda/list-prenda/list-prenda.component';
import { LOGINComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AutorizarLogeadoGuard } from './guards/autorizar-logeado.guard';
import { AutorizarConsultaGuard } from './guards/autorizar-consulta.guard';
import { AutorizarRegistroGuard } from './guards/autorizar-registro.guard';

const routes: Routes = [
  {path:"",component: LOGINComponent},
  {path:"home",component: HomeComponent, canActivate:[AutorizarLogeadoGuard]},
  {path:"prendas",component: ListPrendaComponent, canActivate:[AutorizarConsultaGuard]},
  {path:"agregar_prenda", component: AddEditPrendaComponent, canActivate:[AutorizarRegistroGuard]},
  {path:"editar_prenda", component: AddEditPrendaComponent, canActivate:[AutorizarRegistroGuard]},
  {path:"asignar_tienda_prenda", component: AddEditPrendaTiendaComponent, canActivate:[AutorizarRegistroGuard]},
  {path:"editar_tienda_prenda", component: AddEditPrendaTiendaComponent, canActivate:[AutorizarRegistroGuard]},
  {path:"prendas-tienda", component: ListPrendaTiendaComponent,canActivate:[AutorizarConsultaGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

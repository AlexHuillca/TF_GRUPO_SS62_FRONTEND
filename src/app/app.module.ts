import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddEditPrendaComponent } from './components/prenda/add-edit-prenda/add-edit-prenda.component';
import { ListPrendaComponent } from './components/prenda/list-prenda/list-prenda.component';
import { MaterialModule } from './modules/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmacionEliminarComponent } from './components/confirmaciones/confirmacion-eliminar/confirmacion-eliminar.component';
import { AddEditPrendaTiendaComponent } from './components/prenda-tienda/add-edit-prenda-tienda/add-edit-prenda-tienda.component';
import { ListPrendaTiendaComponent } from './components/prenda-tienda/list-prenda-tienda/list-prenda-tienda.component';
import { HomeComponent } from './components/home/home.component';
import { LOGINComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { AddEditUserComponent } from './components/user/add-edit-user/add-edit-user.component';
import { TiendadistribuidoraComponent } from './components/tiendadistribuidora/tiendadistribuidora.component';
import { ListTiendadistribuidoraComponent } from './components/tiendadistribuidora/list-tiendadistribuidora/list-tiendadistribuidora.component';
import { AddEditTiendadistribuidoraComponent } from './components/tiendadistribuidora/add-edit-tiendadistribuidora/add-edit-tiendadistribuidora.component';
import { AddEditTiendradistribuidoraComponent } from './components/tiendadistribuidora/add-edit-tiendradistribuidora/add-edit-tiendradistribuidora.component';
import { ListEditTiendradistribuidoraComponent } from './components/tiendadistribuidora/list-edit-tiendradistribuidora/list-edit-tiendradistribuidora.component';
import { ListEditUserComponent } from './components/user/list-edit-user/list-edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditPrendaComponent,
    ListPrendaComponent,
    ConfirmacionEliminarComponent,
    ListPrendaTiendaComponent,
    AddEditPrendaTiendaComponent,
    HomeComponent,
    LOGINComponent,
    UserComponent,
    ListUserComponent,
    AddEditUserComponent,
    TiendadistribuidoraComponent,
    ListTiendadistribuidoraComponent,
    AddEditTiendadistribuidoraComponent,
    AddEditTiendradistribuidoraComponent,
    ListEditTiendradistribuidoraComponent,
    ListEditUserComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

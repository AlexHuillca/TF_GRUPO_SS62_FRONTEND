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

@NgModule({
  declarations: [
    AppComponent,
    AddEditPrendaComponent,
    ListPrendaComponent,
    ConfirmacionEliminarComponent,
    ListPrendaTiendaComponent,
    AddEditPrendaTiendaComponent,
   
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

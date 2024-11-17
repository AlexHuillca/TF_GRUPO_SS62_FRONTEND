import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descuento } from '../models/descuento';

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {
  private ruta_servidor: string = 'http://localhost:8080/api';
  recurso: string = 'descuentos';

  constructor(private http: HttpClient) {}

  getDescuentos() {
    return this.http.get<Descuento[]>(this.ruta_servidor + "/" + this.recurso);
  }

  getDescuentoById(id: number) {
    return this.http.get<Descuento>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }

  addDescuento(descuento: Descuento) {
    return this.http.post<Descuento>(this.ruta_servidor + "/" + this.recurso, descuento);
  }

  editDescuento(descuento: Descuento) {
    return this.http.put<Descuento>(this.ruta_servidor + "/" + this.recurso + "/" + descuento.idDescuento.toString(), descuento);
  }

  deleteDescuento(id: number) {
    return this.http.delete<void>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }
}

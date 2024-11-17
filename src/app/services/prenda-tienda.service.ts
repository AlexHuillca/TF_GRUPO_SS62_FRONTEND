import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrendaTienda } from '../models/prenda-tienda';

@Injectable({
  providedIn: 'root'
})
export class PrendaTiendaService {

  private ruta_servidor: string = 'http://localhost:8080/api';
  recurso: string = 'prenda-tiendas';

  constructor(private http: HttpClient) {}

  getPrendaTiendas() {
    return this.http.get<PrendaTienda[]>(this.ruta_servidor + "/" + this.recurso);
  }

  getPrendaTiendaById(id: number) {
    return this.http.get<PrendaTienda>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }

  addPrendaTienda(prendaTienda: PrendaTienda) {
    return this.http.post<PrendaTienda>(this.ruta_servidor + "/" + this.recurso, prendaTienda);
  }

  editPrendaTienda(prendaTienda: PrendaTienda) {
    return this.http.put<PrendaTienda>(this.ruta_servidor + "/" + this.recurso + "/" + prendaTienda.idPrendaTienda.toString(), prendaTienda);
  }

  deletePrendaTienda(id: number) {
    return this.http.delete<void>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }
}

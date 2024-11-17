import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TiendaDistribuidora } from '../models/tienda-distribuidora';

@Injectable({
  providedIn: 'root'
})
export class TiendaDistribuidoraService {
  private ruta_servidor: string = 'http://localhost:8080/api';
  recurso: string = 'tiendas';

  constructor(private http: HttpClient) {}

  getTiendas() {
    return this.http.get<TiendaDistribuidora[]>(this.ruta_servidor + "/" + this.recurso);
  }

  getTiendaById(id: number) {
    return this.http.get<TiendaDistribuidora>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }

  addTienda(tienda: TiendaDistribuidora) {
    return this.http.post<TiendaDistribuidora>(this.ruta_servidor + "/" + this.recurso, tienda);
  }

  editTienda(tienda: TiendaDistribuidora) {
    return this.http.put<TiendaDistribuidora>(this.ruta_servidor + "/" + this.recurso + "/" + tienda.idTienda.toString(), tienda);
  }

  deleteTienda(id: number) {
    return this.http.delete<void>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }
}

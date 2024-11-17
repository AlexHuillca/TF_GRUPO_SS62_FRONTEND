import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private ruta_servidor: string = 'http://localhost:8080/api';
  recurso: string = 'marcas';

  constructor(private http: HttpClient) {}

  getMarcas() {
    return this.http.get<Marca[]>(this.ruta_servidor + "/" + this.recurso);
  }

  getMarcaById(id: number) {
    return this.http.get<Marca>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }

  addMarca(marca: Marca) {
    return this.http.post<Marca>(this.ruta_servidor + "/" + this.recurso, marca);
  }

  editMarca(marca: Marca) {
    return this.http.put<Marca>(this.ruta_servidor + "/" + this.recurso + "/" + marca.idMarca.toString(), marca);
  }

  deleteMarca(id: number) {
    return this.http.delete<void>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }
}

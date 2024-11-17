import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaPrenda } from '../models/categoria-prenda';

@Injectable({
  providedIn: 'root'
})
export class CategoriaPrendaService {
  private ruta_servidor: string = 'http://localhost:8080/api';
  recurso: string = 'categorias';

  constructor(private http: HttpClient) {}

  getCategorias() {
    return this.http.get<CategoriaPrenda[]>(this.ruta_servidor + "/" + this.recurso);
  }

  getCategoriaById(id: number) {
    return this.http.get<CategoriaPrenda>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }

  addCategoria(categoria: CategoriaPrenda) {
    return this.http.post<CategoriaPrenda>(this.ruta_servidor + "/" + this.recurso, categoria);
  }

  editCategoria(categoria: CategoriaPrenda) {
    return this.http.put<CategoriaPrenda>(this.ruta_servidor + "/" + this.recurso + "/" + categoria.idCategoria.toString(), categoria);
  }

  deleteCategoria(id: number) {
    return this.http.delete<void>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }
}

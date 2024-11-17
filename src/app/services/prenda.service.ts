import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prenda } from '../models/prenda';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  private ruta_servidor: string = 'http://localhost:8080/api/prendas';
  recurso:string="prendas";

  constructor(private http: HttpClient) {}

  getPrendas(){
    return this.http.get<Prenda[]>(this.ruta_servidor+"/"+this.recurso);
  }

  getPrendaById(id: number){
    return this.http.get<Prenda>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }

  addPrenda(prenda: Prenda){
    return this.http.post<Prenda>(this.ruta_servidor+"/"+this.recurso, prenda);
  }

  editPrenda(prenda: Prenda){
    return this.http.put<Prenda>(this.ruta_servidor+"/"+this.recurso+"/"+prenda.id.toString(), prenda);
  }

  deletePrenda(id: number){
    return this.http.delete<void>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }
}

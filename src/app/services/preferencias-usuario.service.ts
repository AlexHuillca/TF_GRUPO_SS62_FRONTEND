import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreferenciasUsuario } from '../models/preferencias-usuario';


@Injectable({
  providedIn: 'root'
})
export class PreferenciasUsuarioService {

  ruta_servidor: string = "http://localhost:8080/api";
  recurso: string = "preferencias-usuario";

  constructor(private http: HttpClient) {}

  getPreferencias() {
    return this.http.get<PreferenciasUsuario[]>(this.ruta_servidor + "/" + this.recurso);
  }

  getPreferenciaById(id: number) {
    return this.http.get<PreferenciasUsuario>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }

  addPreferencia(preferencia: PreferenciasUsuario) {
    return this.http.post<PreferenciasUsuario>(this.ruta_servidor + "/" + this.recurso, preferencia);
  }

  editPreferencia(preferencia: PreferenciasUsuario) {
    return this.http.put<PreferenciasUsuario>(this.ruta_servidor + "/" + this.recurso + "/" + preferencia.id.toString(), preferencia);
  }

  deletePreferencia(id: number) {
    return this.http.delete<void>(this.ruta_servidor + "/" + this.recurso + "/" + id.toString());
  }
}

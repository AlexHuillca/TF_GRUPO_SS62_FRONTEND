import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Token } from '../models/token';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ruta_servidor: string = "http://localhost:8080/api";
  recurso: string = "users";

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get<User>(`${this.ruta_servidor}/${this.recurso}/${id}`);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.ruta_servidor}/${this.recurso}`);
  }

  newUser(user: User) {
    return this.http.post<User>(`${this.ruta_servidor}/${this.recurso}/register`, user);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.ruta_servidor}/${this.recurso}/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete<void>(`${this.ruta_servidor}/${this.recurso}/${id}`);
  }

  login(user: User) {
    this.logout();
    return this.http.post<Token>(`${this.ruta_servidor}/${this.recurso}/login`, user).pipe(
      tap((resultado: Token) => {
        localStorage.setItem('jwtToken', resultado.jwtToken);
        localStorage.setItem('user_id', resultado.user_id.toString());
        localStorage.setItem('authorities', resultado.authorities);
      })
    );
  }

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }

  hayUsuarioLogeado() {
    return this.getUserIdActual() != null && this.getUserIdActual() !== "";
  }

  getTokenActual() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }

  getUserIdActual() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('user_id');
    }
    return null;
  }

  getAuthoritiesActual() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('authorities');
    }
    return null;
  }
}

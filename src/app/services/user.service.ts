import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ruta_servidor: string = 'http://localhost:8080/api/user';
  recurso:string="user";

  constructor(private http: HttpClient) {}

  getUser(){
    return this.http.get<User[]>(this.ruta_servidor+"/"+this.recurso);
  }

  getUserById(id: number){
    return this.http.get<User>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }

  addUser(User: User){
    return this.http.post<User>(this.ruta_servidor+"/"+this.recurso, user);
  }

  editUser(User: User){
    return this.http.put<User>(this.ruta_servidor+"/"+this.recurso+"/"+user.id.toString(), user);
  }

  deleteUser(id: number){
    return this.http.delete<void>(this.ruta_servidor+"/"+this.recurso+"/"+id.toString());
  }
}
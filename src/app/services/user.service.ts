import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login';
import { RegisterModel } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.base}/api/users`;

  constructor(private http: HttpClient) { }

  login(request: LoginModel) {
    return this.http.post(`${this.url}/login`, request, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  register(request: RegisterModel): Observable<any> {
    return this.http.post(`${this.url}/register`, request, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
}

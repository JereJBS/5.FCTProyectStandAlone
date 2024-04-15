import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterInterface } from '../interfaces/Register.interface';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse.interface';
import { LoginInterface } from '../interfaces/Login.interface';
import { Token } from '@angular/compiler';
// import * as jwt from 'jsonwebtoken';


@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  private registerEndpoint = "http://localhost:8081/auth/register";
  private loginEndpoint = "http://localhost:8081/auth/login";

  private token: any = null;

  constructor(private http: HttpClient) { }

  Register(form: RegisterInterface): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.registerEndpoint, form)
  }

  Login(form: LoginInterface): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.loginEndpoint, form)
  }

  setToken(token: any){
    this.token = token;
  }

  getToken():string{
    return sessionStorage.getItem('jwtToken')!
  }

  // getDecodedToken(): any{
  //   const token = this.getToken();
  //   return token ? jwt_decode(token) : null
  // }


}

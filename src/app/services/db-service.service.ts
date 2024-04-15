import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterInterface } from '../interfaces/Register.interface';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { ApiResponse } from '../interfaces/Token.interface';
import { LoginInterface } from '../interfaces/Login.interface';
import { Token } from '@angular/compiler';
// import { User } from '../interfaces/User.interface';
// import * as jwt from 'jsonwebtoken';


@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  // currentUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");

  private registerEndpoint = "http://localhost:8081/auth/register";
  private loginEndpoint = "http://localhost:8081/auth/login";
  private mainWindowEndpoint = "http://localhost:8081/mainwindow";

  constructor(private http: HttpClient) { 
    // this.currentUser = new BehaviorSubject<boolean>(sessionStorage.getItem("token")!= null)
    // this.currentUserData = new BehaviorSubject<String>(sessionStorage.getItem("token") || "")
  }

  Register(form: RegisterInterface): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.registerEndpoint, form)
  }

  Login(form: LoginInterface): Observable<any>{
    return this.http.post<any>(this.loginEndpoint, form)
  } 

}

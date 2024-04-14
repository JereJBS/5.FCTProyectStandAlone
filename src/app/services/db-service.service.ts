import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterInterface } from '../interfaces/Register.interface';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  private registerEndpoint = "http://localhost:8081/auth/register";

  constructor(private http: HttpClient) { }

  Register(form: RegisterInterface): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.registerEndpoint, form)
  }
}

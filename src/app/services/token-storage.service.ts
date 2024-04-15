import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user'


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private token: string= ""

  constructor() { }

  logOut(): void{
    localStorage.removeItem(this.token)
  }

  public setToken(token: string){
    localStorage.setItem(this.token, token)
  }

  public getToken(): string | null | any{
    return localStorage.getItem(this.token);
  }

  public saveUser(): void{
    localStorage.removeItem(USER_KEY)
    localStorage.setItem(USER_KEY, this.token)
  }

}

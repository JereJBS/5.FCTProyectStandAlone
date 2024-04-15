import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private token= ""

  constructor() { }

  logOut(): void{
    window.localStorage.clear()
  }

  public setToken(token: string){
    localStorage.setItem(this.token, token)
  }

  public getToken(){
    return localStorage.getItem(this.token);
  }
}

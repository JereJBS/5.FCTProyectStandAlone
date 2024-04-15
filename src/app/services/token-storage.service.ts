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
    this.token = token
  }

  public getToken(){
    return this.token
  }

  public saveToken(token: string): void{

  }

}

import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-service.service';
import { Router } from '@angular/router';
import { RegisterInterface } from '../../interfaces/Register.interface';
import { jwtDecode } from 'jwt-decode';
import { TokenStorageService } from '../../services/token-storage.service';
// import { enviroment } from '../../../enviroments/enviroment'

@Component({
  selector: 'app-mainwindow',
  standalone: true,
  imports: [],
  templateUrl: './mainwindow.component.html',
  styleUrl: './mainwindow.component.css'
})
export class MainwindowComponent implements OnInit{

  
  
  public user = {
    username: "",
    email: "",
    firstname:"",
    lastname:"",
    country:""
  };

  public userData(){
    const showInfoToken: RegisterInterface = jwtDecode(this.tokenStorageService.getToken()?.toString())
    console.log(showInfoToken);
    
    this.user.username = showInfoToken.username
    this.user.email = showInfoToken.email
    this.user.firstname = showInfoToken.firstname
    this.user.lastname = showInfoToken.lastname
    this.user.country = showInfoToken.country
  }

  constructor(private api: DbServiceService, private router: Router, private tokenStorageService: TokenStorageService){
    // this.api.getUser(enviroment.userId)
  }

  ngOnInit(): void {
    this.userData()
  }


  registerNavigate(){
    // this.api.setToken(null)
    // window.sessionStorage.clear()
    this.tokenStorageService.logOut()
    this.router.navigate(["register"])
  }

}

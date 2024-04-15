import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-service.service';
import { Router } from '@angular/router';
import { RegisterInterface } from '../../interfaces/Register.interface';
// import { enviroment } from '../../../enviroments/enviroment'

@Component({
  selector: 'app-mainwindow',
  standalone: true,
  imports: [],
  templateUrl: './mainwindow.component.html',
  styleUrl: './mainwindow.component.css'
})
export class MainwindowComponent implements OnInit{

  
  
  user: RegisterInterface= {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    country: "",
    email: ""
  };

  constructor(private api: DbServiceService, private router: Router){
    // this.api.getUser(enviroment.userId)
  }

  ngOnInit(): void {}


  registerNavigate(){
    // this.api.setToken(null)
    // window.sessionStorage.clear()
    this.router.navigate(["register"])
  }

}

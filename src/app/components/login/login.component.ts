import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-service.service';
import { Router } from '@angular/router';
import { LoginInterface } from '../../interfaces/Login.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  
  FormLogin = {
    username: "",
    password: ""
  }
  
  ngOnInit(): void {}
  constructor(private api: DbServiceService, private router: Router){}

  userLogin(form: LoginInterface){
    this.api.Login(form).subscribe(showToken => {
      this.router.navigate(["mainwindow"])
      console.log(showToken);
    })
    
  }

  registerNavigate(){
    this.router.navigate(["register"])
  }

}

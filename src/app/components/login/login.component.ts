import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-service.service';
import { Router } from '@angular/router';
import { LoginInterface } from '../../interfaces/Login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {}

  formLogin = {
    username: "",
    password: ""
  }
  
  constructor(private api: DbServiceService, private router: Router){}

  

}

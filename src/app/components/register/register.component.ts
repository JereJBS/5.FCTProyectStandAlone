import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbServiceService } from '../../services/db-service.service';
import { Router } from '@angular/router';
import { RegisterInterface } from '../../interfaces/Register.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  ngOnInit(): void {}

  FormRegister = {
    username : "",
    email: "",
    password :"",
    firstname: "",
    lastname: "",
    country: "",
  }

  //Importamos router para poder navegar entre ventanas
  constructor(private api: DbServiceService, private router: Router){}

  userRegister(form: RegisterInterface){
    this.api.Register(form).subscribe(showToken => {
      this.router.navigate(['mainwindow'])
    })
  }

}

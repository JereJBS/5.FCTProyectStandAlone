import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainwindow',
  standalone: true,
  imports: [],
  templateUrl: './mainwindow.component.html',
  styleUrl: './mainwindow.component.css'
})
export class MainwindowComponent implements OnInit{

  constructor(private api: DbServiceService, private router: Router){}

  ngOnInit(): void {}


  registerNavigate(){
    this.api.setToken(null)
    this.router.navigate(["register"])
  }

}

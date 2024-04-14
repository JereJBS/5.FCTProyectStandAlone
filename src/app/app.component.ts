import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DbServiceService } from './services/db-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [DbServiceService],
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '5.FCTProyectFronted';
}

import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MainwindowComponent } from './components/mainwindow/mainwindow.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: "", redirectTo: "register", pathMatch: "full"},
    {path:"register", component: RegisterComponent},
    {path:"mainwindow", component: MainwindowComponent},
    {path:"login", component: LoginComponent}
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignInComponent } from './Modules/sign-in/sign-in.component';
import { FirstLoginComponent } from './Modules/first-login/first-login.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,SignInComponent,FirstLoginComponent, DashboardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    constructor() {
  }

  title = 'dhuroof_product';
 isLoggedIn = false;
isFirstLogin = false;
userEmail = '';
isDarkMode = false;



handleLoginSuccess(data: { isFirstLogin: boolean; email: string }) {
  this.isLoggedIn = true;
  this.isFirstLogin = data.isFirstLogin;
  this.userEmail = data.email;
}

handleOnboardingCompleted() {
  this.isFirstLogin = false; // Now user is past onboarding
}



}

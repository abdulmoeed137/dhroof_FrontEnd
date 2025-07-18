import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignInComponent } from './Modules/sign-in/sign-in.component';
import { FirstLoginComponent } from './Modules/first-login/first-login.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SignInComponent, FirstLoginComponent, DashboardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dhuroof_product';

  isLoggedIn = false;
  isFirstLogin = false;
  userEmail = '';
  isDarkMode = false;

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    const firstLogin = localStorage.getItem('firstLogin');
    const userEmail = localStorage.getItem('userEmail');

    if (token) {
      this.isLoggedIn = true;
      this.isFirstLogin = firstLogin === '1';
      this.userEmail = userEmail || '';
    }
  }

  handleLoginSuccess(data: { isFirstLogin: boolean; email: string }) {
    this.isLoggedIn = true;
    this.isFirstLogin = data.isFirstLogin;
    this.userEmail = data.email;

    // Save to localStorage for auto-login on reload
    localStorage.setItem('firstLogin', data.isFirstLogin ? '1' : '0');
    localStorage.setItem('userEmail', data.email);
  }

  handleOnboardingCompleted() {
    this.isFirstLogin = false;
    localStorage.setItem('firstLogin', '0'); // Update flag
  }

  handleLogout() {
  this.isLoggedIn = false;
  this.isFirstLogin = false;
  this.userEmail = '';
  localStorage.clear(); // or selectively remove items if needed
}

}

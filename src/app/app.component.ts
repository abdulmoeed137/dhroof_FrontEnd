import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignInComponent } from './Modules/sign-in/sign-in.component';
import { FirstLoginComponent } from './Modules/first-login/first-login.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,SignInComponent,FirstLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dhuroof_product';
}

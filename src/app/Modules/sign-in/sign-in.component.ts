import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { LoginFormComponent } from '../../Components/login-form/login-form.component';
import { WaitlistFormComponent } from '../../Components/waitlist-form/waitlist-form.component';
import { ForgotPasswordComponent } from '../../Components/forgot-password/forgot-password.component';


@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent, LoginFormComponent, WaitlistFormComponent,ForgotPasswordComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor() { }

currentForm: 'login' | 'waitlist' | 'forgotpassword' = 'login';

  onSectionChanged(value: string) {
  if (value === 'waitlist') {
    this.currentForm = 'waitlist';
  } else if (value === 'forgotpassword') {
    this.currentForm = 'forgotpassword';
  } else {
    this.currentForm = 'login';
  }
}

}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { LoginFormComponent } from '../../Components/login-form/login-form.component';
import { WaitlistFormComponent } from '../../Components/waitlist-form/waitlist-form.component';
import { ForgotPasswordComponent } from '../../Components/forgot-password/forgot-password.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent, LoginFormComponent, WaitlistFormComponent,ForgotPasswordComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {


@Output() loginCompleted = new EventEmitter<{ isFirstLogin: boolean; email: string }>();

 constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  const params = new URLSearchParams(window.location.search);
  const formType = params.get('form');
  if (formType === 'waitlist' || formType === 'forgotpassword' || formType === 'login') {
    this.onSectionChanged(formType);
    // Remove the query param from the URL
    window.history.replaceState({}, document.title, '/');
  }
}


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

onLoginSuccess(data: { isFirstLogin: boolean; email: string }) {
  this.loginCompleted.emit(data);
}


}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  showPassword = false;
  emailFocused = false;
  passwordFocused = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  @Input() activeLink: string = ''; // ✅ REQUIRED TO ALLOW BINDING
  @Output() sectionChange = new EventEmitter<string>();
  @Output() loginSuccess = new EventEmitter<{ isFirstLogin: boolean; email: string }>();


  onJoinWaitlistClick() {
    this.sectionChange.emit('waitlist');
  }
  onForgotPasswordClick() {
    this.sectionChange.emit('forgotpassword');
  }

  onSignInClick() {
    if (this.loginForm.valid) {
      const isFirstLogin = true; // simulate for now
      const email = this.loginForm.value.email;
      this.loginSuccess.emit({ isFirstLogin, email });
    } else {
      this.loginForm.markAllAsTouched();
    }

  }

  removeReadonly(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    input.removeAttribute('readonly');
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../Services/login-service';
import { LoginResponseDao } from '../../DAOs/login/LoginResponseDao';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginService], // ✅ Add this line
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  showPassword = false;
  emailFocused = false;
  passwordFocused = false;
  apiResponseMessage: string | null = null;
  responseSuccess: boolean = true;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
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

async onSignInClick() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { email, password } = this.loginForm.value;
  this.loading = true;
  this.apiResponseMessage = null;

  try {
    const response: LoginResponseDao = await this.loginService.login(email, password);

    this.responseSuccess = response.status;
    this.apiResponseMessage = response.message;

    if (response.status) {
       localStorage.setItem('authToken', response.token);
      const isFirstLogin = response.first_login === '1';
      this.loginSuccess.emit({ isFirstLogin, email });
      this.loginForm.reset(); // Optional: clear form on success
    }

  } catch (error) {
    console.error('Login error:', error);
    this.responseSuccess = false;
    this.apiResponseMessage = 'Something went wrong during login.';
  } finally {
    this.loading = false;

    setTimeout(() => {
      this.apiResponseMessage = null;
    }, 5000);
  }
}

  removeReadonly(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    input.removeAttribute('readonly');
  }

}

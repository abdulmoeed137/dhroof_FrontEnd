import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      email: [''],
      password: ['']
    });
  }

  @Input() activeLink: string = ''; // ✅ REQUIRED TO ALLOW BINDING
  @Output() sectionChange = new EventEmitter<string>();

  onJoinWaitlistClick() {
    this.sectionChange.emit('waitlist');
  }
  onForgotPasswordClick() {
    this.sectionChange.emit('forgotpassword');
  }

  removeReadonly(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    input.removeAttribute('readonly');
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  ForgotPasswordForm: FormGroup;
  newPasswordForm: FormGroup;
  newPasswordFocused = false;
  confirmPasswordFocused = false;
  showPassword = false;
  emailFocused = false;
  showNewPassword = false;

  constructor(private fb: FormBuilder) {
    this.ForgotPasswordForm = this.fb.group({
      email: ['']
    });

    this.newPasswordForm = this.fb.group({
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  @Input() activeLink: string = ''; // ✅ REQUIRED TO ALLOW BINDING
  @Output() sectionChange = new EventEmitter<string>();

  onJoinWaitlistClick() {
    this.sectionChange.emit('waitlist');
  }

  onSignInClick() {
    this.sectionChange.emit('login');
  }

  onSendRecoveryEmail() {
    // Simulate email sending
    this.showNewPassword = true;
  }

  removeReadonly(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    input.removeAttribute('readonly');
  }
}

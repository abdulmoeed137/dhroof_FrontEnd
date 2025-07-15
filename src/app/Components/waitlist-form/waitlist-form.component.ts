import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-waitlist-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './waitlist-form.component.html',
  styleUrl: './waitlist-form.component.css'
})
export class WaitlistFormComponent {
waitlistForm!: FormGroup;

  apiResponseMessage: string | null = null;
  responseSuccess: boolean = true;
    loading: boolean = false;


  constructor(private fb: FormBuilder) { }
  
   ngOnInit(): void {
    this.waitlistForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^[\d+\-\s]+$/)]],
      company_name: ['', Validators.required],
      job_title: ['', Validators.required],
      number_of_employees: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      additional_messages: ['', Validators.required],
      privacy_policy: [false, Validators.requiredTrue]
    });

  }

  get f() {
    return this.waitlistForm.controls;
  }

  onSubmit(): void {
  
}
}

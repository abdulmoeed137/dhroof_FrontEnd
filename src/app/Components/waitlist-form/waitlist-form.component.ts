import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, WaitlistService } from "../../global-imports";

@Component({
  selector: 'app-waitlist-form',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './waitlist-form.component.html',
  styleUrl: './waitlist-form.component.css'
})
export class WaitlistFormComponent {
  waitlistForm!: FormGroup;

  apiResponseMessage: string | null = null;
  responseSuccess: boolean = true;
  loading: boolean = false;


  constructor(private fb: FormBuilder, private waitlistService: WaitlistService) { }

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

  async onSubmit(): Promise<void> {
    if (this.waitlistForm.invalid) return;

    this.loading = true;
    this.apiResponseMessage = null;

    try {
      const response = await this.waitlistService.AddToWaitlist(this.waitlistForm.value);

      this.responseSuccess = response.status;
      this.apiResponseMessage = response.message;

      if (response.status) {
        this.waitlistForm.reset();
      }

      // ✅ Auto-clear message after 5 seconds
      setTimeout(() => {
        this.apiResponseMessage = null;
      }, 5000);

    } catch (error) {
      this.responseSuccess = false;
      this.apiResponseMessage = 'An unexpected error occurred. Please try again later.';

      setTimeout(() => {
        this.apiResponseMessage = null;
      }, 5000);
    } finally {
      this.loading = false;
    }
  }


}

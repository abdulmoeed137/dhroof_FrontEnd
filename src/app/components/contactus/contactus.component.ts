import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactUs } from '../../DAOs/ContactUs'; // ✅ Adjust this path if needed
import { ApiService } from '../../service';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit {
  contactForm!: FormGroup; // ✅ Fixed strict initialization
apiResponseMessage: string | null = null;
responseSuccess: boolean = true;

  constructor(
  private fb: FormBuilder,
  private apiService: ApiService
) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^[\d+\-\s]+$/)]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

onSubmit(): void {
  if (this.contactForm.valid) {
    const contactData: ContactUs = this.contactForm.value;

    this.apiService.sendContactUs(contactData).subscribe({
      next: (response) => {
        this.apiResponseMessage = response?.message || 'Submitted successfully!';
        this.responseSuccess = true;
        this.contactForm.reset();
      },
      error: () => {
        this.apiResponseMessage = 'Something went wrong. Please try again.';
        this.responseSuccess = false;
      }
    });
  } else {
    this.contactForm.markAllAsTouched();
  }
}

}

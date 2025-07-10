import { Component, EventEmitter, Output } from '@angular/core';
import { Waitlist } from '../../DAOs/Waitlist'; // ✅ Update the path to match your folder structure
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ import this
import { ApiService } from '../../service';

@Component({
  selector: 'app-waitlist',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './waitlist.component.html',
  styleUrl: './waitlist.component.css'
})
export class WaitlistComponent {
waitlistForm!: FormGroup;

 apiResponseMessage: string | null = null;
  responseSuccess: boolean = true;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  @Output() sectionChange = new EventEmitter<string>();
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
  debugger;
  if (this.waitlistForm.valid) {
const WaitlistData: Waitlist = this.waitlistForm.value;
    
    this.apiService.sendWaitlist(WaitlistData).subscribe({
      next: (res) => {
        this.apiResponseMessage = res?.message || 'You have joined the waitlist successfully!';
        this.responseSuccess = true;
        this.waitlistForm.reset();
      },
      error: () => {
        this.apiResponseMessage = 'Something went wrong. Please try again.';
        this.responseSuccess = false;
      }
    });
  } else {
    this.waitlistForm.markAllAsTouched();
  }
}


  goToHome() {
    this.sectionChange.emit('home');
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './first-login.component.html',
  styleUrl: './first-login.component.css'
})

export class FirstLoginComponent {
    @Output() onboardingCompleted = new EventEmitter<void>();
    
  currentStep = 1; // 1 = location, 2 = interests, 3 = welcome
  locationInput: string = '';
@Input() userEmail: string = '';

  selectedTagIds: string[] = [];
 categories: Category[] = [
  {
    name: 'Business',
    tags: [
      { name: 'Manufacturing', id: 'c60bb9c7-b8e7-4d6c-b36d-4b2b95ebdd6a' },
      { name: 'Finance', id: 'd7d1a9e2-d7d2-4c2b-80f0-458b70c3ff94' },
      { name: 'Real Estate', id: '1b3e3cfa-4b56-4d18-9621-d369f2bb3a60' },
      { name: 'Others', id: '95b76ff6-2c45-45a3-b9b8-69f8e48d62c9' }
    ]
  },
  {
    name: 'Sport',
    tags: [
      { name: 'Football', id: 'a058ae01-4b1d-4647-a697-473f6bc2f083' },
      { name: 'BasketBall', id: '2e91bc6d-659f-4b88-8c88-0d0bbdffcaeb' },
      { name: 'Volleyball', id: '715946d7-53fc-4db1-a930-ff5c448ad0aa' },
      { name: 'Others', id: 'de8b91f5-04a2-4f03-8698-487a1dbe3580' }
    ]
  },
  {
    name: 'Health',
    tags: [
      { name: 'Nutrition', id: 'f4df0c85-b3ff-4a00-8263-c7c2b123ce43' },
      { name: 'Fitness', id: '1f893289-4c0e-4be4-9e8b-3a6f8b3cddf7' },
      { name: 'Mental Health', id: 'c5be87a2-8859-42a9-b246-80ecf7b44c5e' },
      { name: 'Others', id: '8be77a62-cc12-4712-a867-6fc64fe9e46c' }
    ]
  }
];

toggleSelection(id: string) {
  const index = this.selectedTagIds.indexOf(id);
  if (index === -1) {
    this.selectedTagIds.push(id);
  } else {
    this.selectedTagIds.splice(index, 1);
  }

  console.log(this.selectedTagIds);
}

isSelected(id: string): boolean {
  return this.selectedTagIds.includes(id);
}

goToNextStep() {
  if (this.currentStep < 3) {
    this.currentStep++;
  }
}

skip() {
  this.goToNextStep();
}

finishOnboarding() {
    this.onboardingCompleted.emit();
  }
  
}

interface SubCategory {
  id:string;
  name: string;
}

interface Category {
  name: string;
  tags: SubCategory[];
}

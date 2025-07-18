import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
@Output() sectionChange = new EventEmitter<string>();

onJoinWaitlistClick() {
  this.sectionChange.emit('waitlist');
}

  redirectToWaitlist() {
    window.location.href = 'https://taupe-toffee-e13a98.netlify.app/?form=waitlist';
  }
  
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
@Output() sectionChange = new EventEmitter<string>();

onJoinWaitlistClick() {
  this.sectionChange.emit('waitlist');
}

  redirectToWaitlist() {
    window.location.href = 'https://taupe-toffee-e13a98.netlify.app/?form=waitlist';
  }
  
}

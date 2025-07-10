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
}

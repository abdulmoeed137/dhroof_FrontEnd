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
}

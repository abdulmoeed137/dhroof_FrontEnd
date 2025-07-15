import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() activeLink: string = ''; // ✅ REQUIRED TO ALLOW BINDING
  @Output() sectionChange = new EventEmitter<string>();

  onJoinWaitlistClick() {
    this.sectionChange.emit('waitlist');
  }

  onSignInClick() {
    this.sectionChange.emit('login');
  }

}

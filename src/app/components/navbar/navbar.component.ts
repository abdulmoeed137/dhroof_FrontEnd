import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ import this

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // ✅ include it here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Input() activeLink: string = '';
@Output() sectionChange = new EventEmitter<string>();

  ngOnInit() {

}

onJoinWaitlistClick() {
  this.sectionChange.emit('waitlist');
}

  isMobileMenuOpen = false;

  ToggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateTo(section: string) {
  this.sectionChange.emit(section);
  this.isMobileMenuOpen = false; // close mobile menu on navigation
}

}

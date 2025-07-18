import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Output() logoutClicked = new EventEmitter<void>();

  isDarkMode = false;

  constructor() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  applyTheme(): void {
    const body = document.body;
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(this.isDarkMode ? 'dark-mode' : 'light-mode');
  }

  onLogout() {
    this.logoutClicked.emit(); // Emit logout event to parent
  }
}

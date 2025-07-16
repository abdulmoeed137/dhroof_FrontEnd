import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }
  
  isDarkMode = false;

  toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  document.body.classList.toggle('dark-theme', this.isDarkMode);
}
  applyTheme(): void {
    const body = document.body;
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(this.isDarkMode ? 'dark-mode' : 'light-mode');
  }

}

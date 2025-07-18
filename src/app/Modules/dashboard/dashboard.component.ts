import { Component, EventEmitter, Output } from '@angular/core';
import { SideBarComponent } from '../../Components/side-bar/side-bar.component';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideBarComponent, EventsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output() logoutRequested = new EventEmitter<void>();

  onLogout() {
    this.logoutRequested.emit();
  }
}

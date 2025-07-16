import { Component } from '@angular/core';
import { SideBarComponent } from '../../Components/side-bar/side-bar.component';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-dashboard',
  imports: [SideBarComponent,EventsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

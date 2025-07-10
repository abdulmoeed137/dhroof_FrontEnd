import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Output() sectionChange = new EventEmitter<string>();

  navigateTo(section: string): void {
  this.sectionChange.emit(section);
}

}

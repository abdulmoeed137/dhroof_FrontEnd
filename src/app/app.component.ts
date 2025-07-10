import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CommonModule } from '@angular/common'; // ✅ import this
import { WaitlistComponent } from './components/waitlist/waitlist.component'; // ✅ import this



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    CompaniesComponent,
    FooterComponent,
    InfoComponent,
    AboutComponent,
    FeaturesComponent,
    ContactusComponent,
    CommonModule,
    WaitlistComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dhuroof_landing_page';

  currentSection = 'home';

onSectionChange(section: string): void {
  this.currentSection = section;

  if (section !== 'contact') {
    // Scroll to specific section like about/features/home
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  } else {
    // Scroll to top of Contact Us after it's rendered
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }
}

  navigateTo(section: string) {
  if (this.currentSection === 'contact' && (section === 'about' || section === 'features')) {
    this.currentSection = 'home'; // Switch to home sections

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to allow DOM to render home components
  } else {
    this.currentSection = section;

    // Scroll immediately if already on home page
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
}

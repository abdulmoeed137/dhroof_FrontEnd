import { Component } from '@angular/core';
import { NgIf,NgForOf,NgClass } from '@angular/common'; // <-- Import this
@Component({
  selector: 'app-features',
  imports: [NgIf,NgForOf,NgClass],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  hoveredIndex: number | null = null;

  ngOnInit(): void {
  this.options[0].expanded = true;
  this.selectedImage = this.options[0].image;
}

  //selectedImage = 'assets/images/apple.jpg';

options = [
    {
      title: 'All-in-One Event Details',
      desc1: 'Access essential event information directly within your',
      desc2: 'calendar, no need to switch tabs or hunt for details.',
      image: 'assets/images/apple.jpg',
      expanded: false // <-- add this
    },
    {
      title: 'Fast, Smart event Discovery',
      desc1: 'Events are grouped and tagged intelligently, making it',
      desc2: "easy to find what's relevant to you.",
      image: 'assets/images/colorful-bird-illustration-gradient.png',
      expanded: false
    },
    {
      title: 'Prioritize With Confidence',
      desc1: 'Our smart tracking system highlights the most impactful',
      desc2: 'events, so you can focus your attention where it counts.',
      image: 'assets/images/bird_2.jpg',
      expanded: false
    },
    {
      title: 'Advanced Search Filters',
      desc1: 'Quickly find what your looking for with detailed filters',
      desc2: 'for date, location, event type, and keywords.',
      image: 'assets/images/apple.jpg',
      expanded: false // <-- add this
    },
    {
      title: 'Personalized event Recommendations',
      desc1: 'Recieve suggestions tailored to your industry, goals, and',
      desc2: 'interests.',
      image: 'assets/images/colorful-bird-illustration-gradient.png',
      expanded: false
    },
    {
      title: 'Declutter Your View',
      desc1: 'Filter out irrelevant events and focus only on what',
      desc2: 'matters to you.',
      image: 'assets/images/bird_2.jpg',
      expanded: false
    },
    {
      title: 'Team Collaboration',
      desc1: 'Share important events with your collegues or network',
      desc2: 'to stay aligned and informed.',
      image: 'assets/images/bird_2.jpg',
      expanded: false
    }
  ];

  selectedImage = this.options[0].image;

  onOptionSelect(index: number): void {
  // Collapse all options
  this.options.forEach((opt, i) => opt.expanded = i === index);

  // Update the image
  this.selectedImage = this.options[index].image;
}


}

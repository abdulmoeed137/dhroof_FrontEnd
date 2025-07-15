import { Component } from '@angular/core';

@Component({
  selector: 'app-first-login',
  imports: [],
  templateUrl: './first-login.component.html',
  styleUrl: './first-login.component.css'
})

export class FirstLoginComponent {
  
  categories: Category[] = [
    {
      name: 'Business',
      tags: [
        'Manufacturing','Finance', 'Realestate','Others'
      ]
    },
    {
      name: 'Sport',
      tags: [
        { name: 'Football', selected: true },
        { name: 'BasketBall', selected: true },
        { name: 'Volleyball', selected: false },
        { name: 'Others', selected: false }
      ]
    },
    {
      name: 'Health',
      tags: [
        // Add your health subcategories here, e.g.:
        // { name: 'Nutrition', selected: false },
        // { name: 'Fitness', selected: false },
        // { name: 'Mental Health', selected: false },
        // { name: 'Others', selected: false }
      ]
    }
  ];

  // You might also want a way to track selected categories if you need to enforce
  // "Choose at least three categories" logic easily.
  // For example:
  getSelectedCategoriesCount(): number {
    let count = 0;
    this.categories.forEach(category => {
      category.tags.forEach(sub => {
        if (sub.selected) {
          count++;
        }
      });
    });
    return count;
  }
}

interface SubCategory {
  name: string;
}

interface Category {
  name: string;
  tags: string;
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-books-catalog',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.css'
})
export class BooksCatalogComponent {
  booksList = [
    {
      "title": "O silencio dos inocentes",
      "author": "Thomas Harris",
      "description": "Um best-seller excelente",
      "published": "1988-08-29",
      "price": 59.99,
    },
    {
      "title": "Harry Potter e a ordem da fênix",
      "author": "J. K. Rowling",
      "description": "Um best-seller excelente",
      "published": "1988-08-29",
      "price": 59.99,
    },
    {
      "title": "O senhor dos anéis",
      "author": "J. R. R. Tolkien",
      "description": "Um best-seller excelente",
      "published": "1988-08-29",
      "price": 59.99,
    }
  ]
}

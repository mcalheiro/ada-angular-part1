import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IBook } from '../../models/book.interface';
import { BookCardComponent } from '../../components/book-card/book-card.component';

@Component({
  selector: 'app-books-catalog',
  standalone: true,
  imports: [NgFor, NgIf, BookCardComponent],
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.css'
})
export class BooksCatalogComponent {
  booksList: Array<IBook> = [
    {
      "id": 1,
      "title": "O silencio dos inocentes",
      "author": "Thomas Harris",
      "description": "Um best-seller excelente",
      "published": new Date(1988, 8, 29),
      "price": 59.99,
    },
    {
      "id": 2,
      "title": "Harry Potter e a ordem da fênix",
      "author": "J. K. Rowling",
      "description": "Um best-seller excelente",
      "published": new Date(1988, 8, 29),
      "price": 59.99,
    },
    {
      "id": 3,
      "title": "O senhor dos anéis",
      "author": "J. R. R. Tolkien",
      "description": "Um best-seller excelente",
      "published": new Date(1988, 8, 29),
      "price": 59.99,
    }
  ]
}

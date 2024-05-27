import { Component, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IBook } from '../../models/book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book: IBook = {
    "id": 1,
      "title": "O silencio dos inocentes",
      "author": "Thomas Harris",
      "description": "Um best-seller excelente",
      "published": new Date(1988, 8, 29),
      "price": 59.99,
  };
}

import { Component, Input } from '@angular/core';

import { Book } from './book';

@Component({
  selector: 'my-book-detail',
  template: `
      <div *ngIf="book">
        <h2>{{book.title}}</h2>
      </div>
  `
})

export class BookDetailComponent {
  @Input()
  book: Book;
}

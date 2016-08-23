import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
    selector: 'my-app',

    template: `
      <h1>{{title}}</h1>
      TODO: <h2>Books</h2>
          <ul class="books">
        <li *ngFor="let book of books"
          {{book.book_details.title}}
        </li>
      </ul>
    `
    providers: [BookService]
})


export class AppComponent implements OnInit{
    title = "NYT Bestseller list";
    books: Book[];

    constructor(private bookService: BookService) { }

    getBooks(): void {
      this.bookService.getBooks().then(books => this.books = books)
    }

    ngOnInit(): void {
    this.getBooks();
  }
 }




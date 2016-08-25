import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Book } from './book';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
  private booksUrl = 'http://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=362f4508e923486dbd28ee49cf4693b9';

  constructor(private http: Http) { }

  getBooks(): Promise<Book[]> {
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => response.json().results as Book[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}








import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { BookDetailComponent } from './book-detail.component';

import { BookService } from './book.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BookDetailComponent,
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

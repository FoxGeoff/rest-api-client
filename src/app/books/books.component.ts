import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { IBook } from '../core/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title = 'rest-api-client';

  constructor(private dataService: DataService) { }

  books: IBook[] = [];
  sub!: Subscription;

  /**
   * Code ref.
   * Project: APM-START-3-1-23
   * File: products.component.ts
   */
  ngOnInit(): void {
    this.sub = this.dataService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data;
        // this.filteredProducts = this.products;
      },
      error: (error) => console.log(`Error getting data ${error}`),
      complete: () => console.log(`GET books completed`)
    });
  }

}

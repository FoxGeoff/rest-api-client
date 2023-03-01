import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from './core/data.service';
import { IBook } from './core/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rest-api-client';

  constructor(private dataService: DataService) { }

  books: IBook[] = [];

  ngOnInit() {
    console.log("Ran OnInit");
    this.GetAllBooks();

  }

  GetAllBooks() {
    this.dataService.getAllBooks().subscribe({
      next: data => {
        // this.books = data;
        console.log('All', JSON.stringify(data))
      },
      error: err => console.log(`error has occured: ${err}`)
    })
  }
}

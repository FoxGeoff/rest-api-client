import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IBook } from './models/book'
import { HttpClient } from '@angular/common/http';

/**
 * Ref: https://angular.io/guide/http
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // GET: all books...
  /* http://localhost:4200/api/books */
  /* http://localhost:4200/api/books?genre=Fantasy */
  /* http://localhost:4200/api/books?genre=Historical%20Fiction */
  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('localhost:4200/api/books').pipe(
      tap((data) => console.log(`All`, JSON.stringify(data)))
      //TODO: Add error logging
    );
  }
}

import { Injectable } from '@angular/core';
import { Book } from './models/book'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllBooks(): Book[] {
    let books = {};

    return books as Book[]
  }
}

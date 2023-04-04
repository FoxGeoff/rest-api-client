# RestApiClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Project Introduction

1. Video ref: <https://app.pluralsight.com/course-player?clipId=d2208e94-435d-4d37-af7c-b3426f046c57>
2. Online ref: Angular 12 HTTP Communication

### NOTE

1. <https://stackoverflow.com/questions/43492354/how-to-allow-access-outside-localhost>

```typescript
 export class DataService {

  constructor(private http: HttpClient) { }

  // GET: all books...
  /* http://localhost:4200/api/books */
  /* http://localhost:4200/api/books?genre=Fantasy */
  /* http://localhost:4200/api/books?genre=Historical%20Fiction */

  /**
   * Code Ref:
   * Project: APM-START-3-1-2023
   * File: product.service.ts (src\api\books\books.json)
   *
   * NOTE Must be in a public folder eg assets
   *
   * ref https://www.techiediaries.com/angular-local-json-files/
   *
   */
  bookUrlLocal = "assets/books/books.json";
  bookUrlRemote = "localhost:4200/api/books";

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.bookUrlLocal).pipe(
      tap((data) => console.log(`All`, JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in real world app, we may send the server to some remote logging inferstructure
    // instead of just logging to the command console
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      //The backend returned an unsuccessful responce code.
      // The responce body may contain clues as to what went wrong,
      errorMsg = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMsg);
    return throwError(() => errorMsg);
  }
}
```

### Task: Build Table for list of books

1. Schematics for the Angular CLI
2. Ref: <https://v7.material.angular.io/guide/schematics>
3. Run `ng add @angular/material`
4. Run `ng add @angular/cdk`
5. Run `ng generate @angular/material:table <component-name>`

### Task: Refactor the table data to use books

### Task: Add Table Filter

1. Ref.: <https://www.freakyjolly.com/angular-material-table-custom-filter-using-select-box/>
2. Ref.: <https://www.freecodecamp.org/news/a-definitive-guide-to-conditional-logic-in-javascript-23fa234d2ca3/>

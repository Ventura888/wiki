import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Value } from './value';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private valuesUrl = 'api/values';  // URL to web api

  constructor(private http: HttpClient) { }

  getValues(): Observable<Value[]> {
    return this.http.get<Value[]>(this.valuesUrl);
  }

  getValue(id: number): Observable<Value> {
    const url = `${this.valuesUrl}/${id}`;
    return this.http.get<Value>(url);
  }

  /** GET values whose title contains search term **/
  searchValues(term: string): Observable<Value[]> {
    if (!term.trim()) {
      // if not search term, return empty value array.
      return of([]);
    }
    return this.http.get<Value[]>(`${this.valuesUrl}/?title=${term}`);
  }

  /** PUT: update the value on the server */
  updateValue (value: Value): Observable<any> {
    return this.http.put(this.valuesUrl, value, httpOptions);
  }

  /** POST: add a new value to the server */
  addValue (value: Value): Observable<Value> {
    return this.http.post<Value>(this.valuesUrl, value, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteValue (value: Value | number): Observable<Value> {
    const id = typeof value === 'number' ? value : value.id;
    const url = `${this.valuesUrl}/${id}`;

    return this.http.delete<Value>(url, httpOptions);
  }
}

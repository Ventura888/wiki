import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Value } from '../../value';
import { ValueService } from '../../value.service';

@Component({
  selector: 'app-value-search',
  templateUrl: './value-search.component.html',
  styleUrls: [ './value-search.component.css' ]
})
export class ValueSearchComponent implements OnInit {
  values$: Observable<Value[]>;
  private searchTerms = new Subject<string>();

  constructor(private valueService: ValueService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.values$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.valueService.searchValues(term)),
    );
  }
}

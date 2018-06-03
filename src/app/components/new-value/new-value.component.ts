import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Value} from '../../value';
import {ValueService} from '../../value.service';

@Component({
  selector: 'app-new-value',
  templateUrl: './new-value.component.html',
  styleUrls: ['./new-value.component.css']
})
export class NewValueComponent implements OnInit {

  values: Value[];

  constructor(private valueService: ValueService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(): void {
    this.valueService.getValues()
      .subscribe(values => this.values = values);
  }

  add(title: string, author: string, date: string, image: string, content: string, category: string): void {
    title = title.trim();
    author = author.trim();
    date = date.trim();
    image = image.trim();
    content = content.trim();
    category = category.trim();
    if (!title || !author || !date || !image || !content || !category) { return; }
    this.valueService.addValue({ title, author, date, image, content, category } as Value)
      .subscribe(value => {
        this.values.push(value);
      });
  }
}

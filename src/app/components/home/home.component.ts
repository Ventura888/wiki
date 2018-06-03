import { Component, OnInit } from '@angular/core';
import { Value } from '../../value';
import { ValueService } from '../../value.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: Value[] = [];
  constructor(private valueService: ValueService) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(): void {
    this.valueService.getValues()
      .subscribe(values => this.values = values);
  }
}

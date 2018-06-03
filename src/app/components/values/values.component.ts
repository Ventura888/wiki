import {Component, OnInit} from '@angular/core';
import {Value} from '../../value';
import {ValueService} from '../../value.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  /*categories: string;*/
  values: Value[];

  constructor(private valueService: ValueService) {
  }

  ngOnInit() {
    //this.categories = 'All';
    this.getValues();
  }

  getValues(): void {
    this.valueService.getValues()
      .subscribe(values => this.values = values);
  }

  /*getValues(): void {
    this.valueService.getValues()
      .subscribe(allValues => {
        if (this.categories === 'All') {
          this.values = allValues;
        } else {
          // this.values = allValues.filter();
        }
      });
  }*/

  getScienceValues(): void {
    this.valueService.getValues()
      .subscribe(values => this.values = values.filter(t => t.category === 'Science'));
  }

  getComputersValues(): void {
    this.valueService.getValues()
      .subscribe(values => this.values = values.filter(t => t.category === 'Computers'));
  }

  getTVValues(): void {
    this.valueService.getValues()
      .subscribe(values => this.values = values.filter(t => t.category === 'TV Shows'));
  }

  delete(value: Value): void {
    this.values = this.values.filter(v => v !== value);
    this.valueService.deleteValue(value).subscribe();
  }
}

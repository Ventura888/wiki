import { Component, OnInit } from '@angular/core';
import { Value } from '../../value';
import { ValueService } from '../../value.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  values: Value[];

  constructor(private valueService: ValueService) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(): void {
    this.valueService.getValues()
      .subscribe(values => this.values = values);
  }
}

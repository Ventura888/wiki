import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Value } from '../../value';
import { ValueService } from '../../value.service';

@Component({
  selector: 'app-value-detail',
  templateUrl: './value-detail.component.html',
  styleUrls: ['./value-detail.component.css']
})
export class ValueDetailComponent implements OnInit {
  @Input() value: Value;
  constructor(
    private route: ActivatedRoute,
    private valueService: ValueService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getValue();
  }

  getValue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.valueService.getValue(id)
      .subscribe(value => this.value = value);
  }

  goBack(): void {
    //this.location.back();
    this.router.navigate(['/values']);
    //this.location.go(['/values']);
    //this.location.replaceState(['/values']);
  }

  save(): void {
    this.valueService.updateValue(this.value)
      .subscribe(() => this.goBack());
  }

}

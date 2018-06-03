import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSearchComponent } from './value-search.component';

describe('ValueSearchComponent', () => {
  let component: ValueSearchComponent;
  let fixture: ComponentFixture<ValueSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueDetailComponent } from './value-detail.component';

describe('ValueDetailComponent', () => {
  let component: ValueDetailComponent;
  let fixture: ComponentFixture<ValueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

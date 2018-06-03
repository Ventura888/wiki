import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewValueComponent } from './new-value.component';

describe('NewValueComponent', () => {
  let component: NewValueComponent;
  let fixture: ComponentFixture<NewValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

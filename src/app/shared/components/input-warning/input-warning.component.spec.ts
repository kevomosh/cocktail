import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWarningComponent } from './input-warning.component';

describe('InputWarningComponent', () => {
  let component: InputWarningComponent;
  let fixture: ComponentFixture<InputWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

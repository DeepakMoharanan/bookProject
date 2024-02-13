import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleBookComponent } from './multiple-book.component';

describe('MultipleBookComponent', () => {
  let component: MultipleBookComponent;
  let fixture: ComponentFixture<MultipleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

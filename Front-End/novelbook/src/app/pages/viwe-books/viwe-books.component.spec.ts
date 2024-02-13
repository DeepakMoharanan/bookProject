import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweBooksComponent } from './viwe-books.component';

describe('ViweBooksComponent', () => {
  let component: ViweBooksComponent;
  let fixture: ComponentFixture<ViweBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViweBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViweBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

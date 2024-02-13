import { TestBed } from '@angular/core/testing';

import { MultipleBookService } from './multiple-book.service';

describe('MultipleBookService', () => {
  let service: MultipleBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

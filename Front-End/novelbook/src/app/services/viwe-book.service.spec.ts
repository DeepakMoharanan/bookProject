import { TestBed } from '@angular/core/testing';

import { ViweBookService } from './viwe-book.service';

describe('ViweBookService', () => {
  let service: ViweBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViweBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

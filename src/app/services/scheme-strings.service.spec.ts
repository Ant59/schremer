import { TestBed, inject } from '@angular/core/testing';

import { SchemeStringsService } from './scheme-strings.service';

describe('SchemeStringsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemeStringsService]
    });
  });

  it('should ...', inject([SchemeStringsService], (service: SchemeStringsService) => {
    expect(service).toBeTruthy();
  }));
});

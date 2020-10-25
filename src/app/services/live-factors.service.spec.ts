import { TestBed } from '@angular/core/testing';

import { LiveFactorsService } from './live-factors.service';

describe('LiveFactorsService', () => {
  let service: LiveFactorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveFactorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

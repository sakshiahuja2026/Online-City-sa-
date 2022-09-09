import { TestBed } from '@angular/core/testing';

import { SessionService } from './service.service';

describe('ServiceService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

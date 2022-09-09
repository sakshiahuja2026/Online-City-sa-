import { TestBed } from '@angular/core/testing';

import { SearchproviderService } from './searchprovider.service';

describe('SearchproviderService', () => {
  let service: SearchproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

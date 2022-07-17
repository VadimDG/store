import { TestBed } from '@angular/core/testing';

import { LoadItemsListingService } from './load-items-listing.service';

describe('LoadListingItemsService', () => {
  let service: LoadItemsListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadItemsListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected set of headers', () => {

  });
});

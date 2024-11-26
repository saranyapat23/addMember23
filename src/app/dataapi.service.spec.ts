import { TestBed } from '@angular/core/testing';

import { DataapiService } from './dataapi.service';

describe('DataapiService', () => {
  let service: DataapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

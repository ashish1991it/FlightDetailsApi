import { TestBed } from '@angular/core/testing';

import { FlydelService } from './flydel.service';

describe('FlydelService', () => {
  let service: FlydelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlydelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

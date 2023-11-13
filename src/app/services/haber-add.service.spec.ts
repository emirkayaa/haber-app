import { TestBed } from '@angular/core/testing';

import { HaberAddService } from './haber-add.service';

describe('HaberAddService', () => {
  let service: HaberAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaberAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

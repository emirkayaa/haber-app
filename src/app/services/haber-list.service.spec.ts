import { TestBed } from '@angular/core/testing';

import { HaberListService } from './haber-list.service';

describe('HaberListService', () => {
  let service: HaberListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaberListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

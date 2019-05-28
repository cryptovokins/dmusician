import { TestBed } from '@angular/core/testing';

import { UportService } from './uport.service';

describe('UportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UportService = TestBed.get(UportService);
    expect(service).toBeTruthy();
  });
});

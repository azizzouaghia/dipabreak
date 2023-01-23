import { TestBed } from '@angular/core/testing';

import { ServicesServiceService } from './services-service.service';

describe('ServicesServiceService', () => {
  let service: ServicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

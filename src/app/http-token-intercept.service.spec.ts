import { TestBed } from '@angular/core/testing';

import { HttpTokenInterceptService } from './http-token-intercept.service';

describe('HttpTokenInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpTokenInterceptService = TestBed.get(HttpTokenInterceptService);
    expect(service).toBeTruthy();
  });
});

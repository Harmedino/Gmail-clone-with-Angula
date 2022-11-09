import { TestBed } from '@angular/core/testing';

import { AhmedGuard } from './ahmed.guard';

describe('AhmedGuard', () => {
  let guard: AhmedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AhmedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

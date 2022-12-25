import { TestBed } from '@angular/core/testing';

import { UserNameValidService } from './user-name-valid.service';

describe('UserNameValidService', () => {
  let service: UserNameValidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNameValidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

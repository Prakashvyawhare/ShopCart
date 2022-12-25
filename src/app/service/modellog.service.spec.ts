import { TestBed } from '@angular/core/testing';

import { ModellogService } from './modellog.service';

describe('ModellogService', () => {
  let service: ModellogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModellogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

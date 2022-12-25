import { TestBed } from '@angular/core/testing';

import { CaptchaService } from './service/captcha.service';

describe('CaptchaService', () => {
  let service: CaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoginCaptchaService } from './login-captcha.service';

describe('LoginCaptchaService', () => {
  let service: LoginCaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

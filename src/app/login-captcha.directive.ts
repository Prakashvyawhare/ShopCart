import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { LoginCaptchaService } from './service/login-captcha.service';

@Directive({
  selector: '[appLoginCaptcha]',
  providers: [{
    provide: NG_VALIDATORS,useExisting:LoginCaptchaDirective,multi:true
  }]
})
export class LoginCaptchaDirective implements Validator {

  constructor( private getCaptcha : LoginCaptchaService) { }
  validate(control: AbstractControl): ValidationErrors | null {
    let enteredNum = control.value;
    let result = this.getCaptcha.getValidValue();
  if(enteredNum !=result)
  return ({'captch':true})
  else
  return null
  }
  

}

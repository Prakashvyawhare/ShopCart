import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CaptchaService } from './service/captcha.service';

@Directive({
  selector: '[appCaptcha]',
  providers:[{
    provide: NG_VALIDATORS, useExisting:CaptchaDirective,multi:true
  }]
})
export class CaptchaDirective implements Validator{

  constructor(private CaptchaService: CaptchaService) { }
  validate(control: AbstractControl): ValidationErrors | null {
    let  UserEnterValue = control.value;
 let result = this.CaptchaService.getValidValue();
 if(UserEnterValue != result)
 return  ({'captcha': true});
 else 
 return null
  }
  
 
   
    
   
  
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }



import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';

@Directive({
  selector: '[appDoubliPassword]',
  providers: [{
    provide: NG_VALIDATORS, useExisting:DoubliPasswordDirective,multi:true

  }]
})
export class DoubliPasswordDirective implements Validator{

  constructor(private password : NewUserComponent) { }
  validate(control: AbstractControl): ValidationErrors | null {
    let confirmPassword = control.value;
    let Passw = this.password.Password
    if(confirmPassword!=Passw)
    return ({'confirm':true})
    else 
    return null
  }
  

}

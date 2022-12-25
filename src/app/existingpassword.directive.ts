import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserlistService } from './service/userlist.service';


@Directive({
  selector: '[appExistingpassword]',
  providers:[{
    provide: NG_VALIDATORS, useExisting:ExistingpasswordDirective,multi:true
  }]
})
export class ExistingpasswordDirective implements Validator {

  constructor(public user:UserlistService, public na:LoginComponent) { }
  validate(control: AbstractControl): ValidationErrors | null {
   let us = this.user.getExistingPassword(this.na.username)

   if(control.value !== us)
   return ({"ps":true})
   else
   return null
  }
  
  

}

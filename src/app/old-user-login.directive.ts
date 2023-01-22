import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { UserlistService } from './service/userlist.service';

@Directive({
  selector: '[appOldUserLogin]',
  providers: [{
    provide: NG_VALIDATORS,useExisting:OldUserLoginDirective,multi:true
  }]
})
export class OldUserLoginDirective implements Validator {

  constructor( public userlistService: UserlistService) { }
  validate(control: AbstractControl): ValidationErrors | null {
   let UserEnteredName = control.value;
   let usernameresult = this.userlistService.IsUserExist(control.value )
   if(!usernameresult)
   return ({"olduser":true})
   else
   return null
  }


  ///////where to use this method 
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

  
}

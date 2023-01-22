import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomerServiceService } from './service/customer-service.service';
import { UserlistService } from './service/userlist.service';

@Directive({
  selector: '[appUserValidation]',
  providers:[
    {
      provide: NG_VALIDATORS, useExisting:UserValidationDirective, multi:true
    }
  ]
}) 
export class UserValidationDirective implements Validator {

  constructor(private UserlistService:UserlistService) { }
  validate(control: AbstractControl): ValidationErrors | null {
let UserEnteredName = control.value;
let UserNResult = this.UserlistService.IsUserExist(UserEnteredName);

if(UserNResult)

/////  get username for existing  username varification///

return ({'exit':true})
else
return null


  }
  

}

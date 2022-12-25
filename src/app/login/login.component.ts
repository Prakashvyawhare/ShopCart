import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CaptchaDirective } from '../captcha.directive';
import { User } from '../new-user/uselist';
import { CaptchaService } from '../service/captcha.service';
import { LoginCaptchaService } from '../service/login-captcha.service';
import { UserDetailsService } from '../service/user-details.service';
import { UserlistService } from '../service/userlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
oncancel() {
throw new Error('Method not implemented.');
}




  constructor( private captcha :LoginCaptchaService,public userlist:  UserlistService, public CurrentUsername: UserDetailsService, public activeModal: NgbActiveModal) { }

  username="";
  Password="";
  enterVal= "";
  num1 = this.captcha.getNumber()[0]
  num2 = this.captcha.getNumber()[1]

  

  ngOnInit() :void{
 
  

 
    
       
}
CurrentUser(){
  
  this.CurrentUsername.ThisUser.splice(0,1,this.username)
  console.log(this.CurrentUsername.ThisUser);
  
  
  

}
} 
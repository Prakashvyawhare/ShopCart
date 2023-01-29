import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../service/captcha.service';
import { UserDetailsService } from '../service/user-details.service';
import { UserlistService } from '../service/userlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private captcha :CaptchaService,public userlist:  UserlistService, public UserDetailsService: UserDetailsService) { }
  username="";
  Password="";
  enterVal= "";
  num1 :number
  num2:number;  
  ngOnInit() :void{
    this.captcha.refresh();
    this.num1 = this.captcha.getNumber()[0];
    this.num2 = this.captcha.getNumber()[1];
}
onlogin(){
  this.UserDetailsService.login(this.username)
}
} 
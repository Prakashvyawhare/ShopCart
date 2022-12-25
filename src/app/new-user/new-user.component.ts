import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { CaptchaService } from '../service/captcha.service';
import { CustomerDetails } from '../service/Customer';
import { CustomerServiceService } from '../service/customer-service.service';
import { UserlistService } from '../service/userlist.service';
import { User } from './uselist';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  Name:string="";
  surname:string="";
  Address="";
  DOB:Date;
  username = '';
  Password: any ="";
  confPassword:any = ""
  enterVal:number;
 num1:number;
 num2:number;
// userList=[{}]

  constructor( private captcha:CaptchaService,public saveUser:UserlistService) { }
  // Customer: CustomerDetails

  ngOnInit(): void {

    // this.Customer= this.getdetails.getUaerbyName(this.username)
   this.num1= this.captcha.getNumber()[0];

   this.num2 = this.captcha.getNumber()[1];
  //  console.log(this.Customer);
  //  console.log(this.userList);   
  }




  onsubmit():void{ 
   
 this.saveUser.UserNameList.push( new User (this.username,this.Password,this.Name,this.surname,this.Address,this.DOB))

User.id ++
console.log(this.saveUser.UserNameList);
  }

}

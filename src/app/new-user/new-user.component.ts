import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  Name: string = "";
  surname: string = "";
  Address = "";
  DOB: Date;
  username = '';
  Password: any = "";
  confPassword: any = ""
  seller:boolean;
  enterVal: number;
  num1: number;
  num2: number;
  userId: number;
  
  signInDone=false;
  constructor(private captcha: CaptchaService, public UserlistService: UserlistService,private toast:ToastrService, private router:Router) { }
  ngOnInit(): void {
    // this.Customer= this.getdetails.getUaerbyName(this.username)
    this.captcha.refresh();         ////   refresh captcha values  ///
    this.num1 = this.captcha.getNumber()[0];
    this.num2 = this.captcha.getNumber()[1];
    this.seller=false;
  }
  updateuserid() {    ////  Retrieve last (max) 'userId' from database and increament by 1 for next 'userId'  ////
    let array = this.UserlistService.UserNameList.map((x: User) => x.userId);
    this.userId = Math.max(...array) + 1;
    // this.userId=this.UserlistService.UserNameList.length+1       //// another way to increament 'userId' ////
  }
  onsubmit(): void {
    this.updateuserid()  ////  'userId' invocation ///    
    this.UserlistService.addNewUser(new User(this.userId, this.username, this.Password, this.Name, this.surname, this.Address, this.DOB,this.seller));
    //  this.UserlistService.UserNameList
    this.checkSighin()
    // console.log(this.UserlistService.UserNameList);
    this.router.navigate(["login"])
  }
  checkSighin(){
    this.toast.success("Successfully Done","SignUp")
    return this.signInDone=true;

  }
  selectSeller(){
    this.seller =true;
  }
}

import { Component, OnInit } from '@angular/core';

import { User } from '../new-user/uselist';
import { UserDetailsService } from '../service/user-details.service';
import { UserlistService } from '../service/userlist.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(public UserData : UserlistService,public currentUser:UserDetailsService) { }
 customer: User;  

  
 username=this.currentUser.ThisUser[0]
  ngOnInit(): void {
   
   this.customer= this.UserData.getDetailsbyusername(this.username);
   console.log(this.customer);
   
    
  }
  

}

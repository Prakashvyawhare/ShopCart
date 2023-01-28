import { Injectable } from '@angular/core';
import { User } from '../new-user/uselist';
import { UserlistService } from './userlist.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  ThisUser= Array<string>();
 currentUserName:string

  constructor( private userlistService:UserlistService) { this.currentUserName=this.ThisUser[0];}
  LoggedinbyUser(){           
   return this.ThisUser.length>0
    
  }
  currentUserDetails(){
   return this.userlistService.UserNameList.find((x)=>x.username==this.ThisUser[0])
  }
}

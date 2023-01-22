import { Injectable } from '@angular/core';
import { User } from '../new-user/uselist';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  ThisUser= Array<string>();
 

  constructor() { }
  // isLogin(){           
  //   if(this.ThisUser.length==0)
  //   return false;
  //   else
  //   return true;
  // }
}

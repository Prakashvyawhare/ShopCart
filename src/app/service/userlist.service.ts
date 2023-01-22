import { Injectable } from '@angular/core';
import { User } from '../new-user/uselist';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  // UserNameList=["abc@gmail.com","xyz@gmail.com", "prakash@gmail.com"]

// ///Array in json format///
  // UserList = [{
  //   username:"abc@gmail.com",
  //   password : 123
  // },
  // {
  //   username:"xyz@gmail.com",
  //   password : 456

  // },
  // {
  //   username:"zxc@gmail.com",
  //   password : 789
  // }
//]
UserNameList =new Array<User>();

// use = "abc@gmail.com"
  constructor() {
 let  c = new User("john@gmail.com","Abc@1234", "john","snow","india",new Date(2000,6,5))
//  c.username;
//  c.password;
 
  this.UserNameList.push(c)
    
    

   }

   
   IsUserExist(username:string){
    let i= this.UserNameList.findIndex((x:User)=>{
     return x.username==username;
      
    })
      if(i == -1)
      return false
      else 
      return true;
   }


   getExistingPassword(username:string){
   let I= this.UserNameList.findIndex((x:User)=>{ 
    return x.username==username;
   })
   return this.UserNameList[I].password
       
       
     
       
    }
    

    getDetailsbyusername(user:string):any{
      let details = this.UserNameList.find((x)=>(x.username==user));
      return details;

    }
  

 

}

  
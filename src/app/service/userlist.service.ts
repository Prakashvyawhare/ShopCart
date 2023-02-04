import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../new-user/uselist';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
UserNameList =new Array<any>();
userid:number;
  constructor( private AngularFirestore:AngularFirestore) {
    this.getUserListFromDatabase() 
//  let  c = new User("john@gmail.com","Abc@1234", "john","snow","india",new Date(2000,6,5)) 
//   this.UserNameList.push(c) 
   }
   getUserListFromDatabase(){               ////  retrive userList from Angularfirestore database  ////
    this.AngularFirestore.collection('users').valueChanges().subscribe((data)=>
    {this.UserNameList=data})
  }
  addNewUser(userdetails:User)    ////  upload or set new userList on database  ////
  {
    this.AngularFirestore.collection('users').doc(userdetails.userId.toString()).set(
    {
      userId:userdetails.userId,
      username:userdetails.username,
      name:userdetails.name,
      surname:userdetails.surname,
      password:userdetails.password,
      Address:userdetails.Address,
      DOB:userdetails.DOB,
      seller:userdetails.seller
    })
  }
   IsUserExist(username:string){    ////  check validation for existance user  ////
    let i= this.UserNameList.findIndex((x:User)=>{
     return x.username==username;  
    })
      if(i == -1)
      return false
      else 
      return true;
   }
   getExistingPassword(username:string){    ////  password validation ////
   let I= this.UserNameList.findIndex((x:User)=>{ 
    return x.username==username;
   })
   return this.UserNameList[I].password  
    }
    // getDetailsbyusername(user:string):any{      
    //   let details = this.UserNameList.find((x)=>(x.username==user));
    //   return details;
    // }
}

  
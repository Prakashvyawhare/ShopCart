import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { cartItem } from './cartItem';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'  
})
export class OrderListService {
   myOrderList=new Array<any>()

  constructor(private AngularFirestore: AngularFirestore, private UserDetailsService: UserDetailsService) {this.RetrieveOrderList() }
  RetrieveOrderList(){
    this.AngularFirestore.collection('myOrders').valueChanges().subscribe((data)=> 
    {this.myOrderList=data})

  }
  currentUserOrderList(){
   return this.myOrderList.filter((orderItem:cartItem)=>orderItem.userName==this.UserDetailsService.ThisUser[0])
  }

}

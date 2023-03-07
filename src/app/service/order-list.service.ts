import { DatePipe } from '@angular/common';
import { Injectable, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { orderItem } from '../Orders';
import { cartItem } from './cartItem';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'  
})
export class OrderListService {
   myOrderList=new Array<any>()
   orderItemID:number;
   date=new Date()

  constructor(private AngularFirestore: AngularFirestore, private UserDetailsService: UserDetailsService) {this.RetrieveOrderList();
    this.RetrieveOrder() }
  RetrieveOrderList(){
   return this.AngularFirestore.collection('myOrders')
    // .valueChanges().subscribe((data)=> 
    // {this.myOrderList=data})
  }
  RetrieveOrder(){
    return this.AngularFirestore.collection('myOrders')
     .valueChanges().subscribe((data)=> 
     {this.myOrderList=data})
   }
 
  updateMyOrderList(myCartItem:cartItem){     //// add item in My orderList ////
    this.updateOrderID();
    this.AngularFirestore.collection('myOrders').doc(this.orderItemID.toString()).set(
      {
        cartItemid:myCartItem.cartItemid,
        userName:myCartItem.userName,
        productID:myCartItem.productID,
        title:myCartItem.title,
        images:myCartItem.images,
        price:myCartItem.price,
        Qnty:myCartItem.Qnty,
        description:myCartItem.description,
        descount:myCartItem.descount,
        orderItemID:this.orderItemID,
        orderDate:this.date.valueOf()
        
      }
    )
    console.log(this.date);
    
  }
  deleteItemFromOrder(orderItemID){
    this.AngularFirestore.doc('myOrders/'+orderItemID).delete();
  }
  updateOrderID(){
    let orderIdArr=this.myOrderList.map((x)=>x.orderItemID)
    if(orderIdArr.length!==0)
    this.orderItemID=Math.max(...orderIdArr)+1;
    else
    this.orderItemID=1
  }
}

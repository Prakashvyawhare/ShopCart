import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { count } from 'console';
import { cartItem } from './cartItem';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'
})
export class  CartService {
MyCart=new Array<any>();
constructor(public getusername : UserDetailsService, private AngularFirestore:AngularFirestore) 
{
  this.getCartItemsFromDatabase();
 }
getCartItembyUserName(username:string){    ////   get cart item added by specific user  ////
  let currentUserCart=this.MyCart.filter((x)=>{
    return x.userName==username})
  return currentUserCart; 
}
getCartItemsFromDatabase()  ////  Retrieve CartItems from database  ////
{
  this.AngularFirestore.collection('cartItems').valueChanges().subscribe((data)=>{this.MyCart=data});
  
}

// addProducttoCart(product: cartItem ) {  ////  if this product not exist in cart then add to cart else add quantity of same product  ///
//     {
//    this.MyCart.push(product)
//    alert("successfully added to the Cart")}
//   }

  addProducttoCart(product: cartItem )   //// Uploads cartItem on database ///
  {
    this.AngularFirestore.collection('cartItems').doc(product.cartItemid.toString()).set(
      {
        cartItemid:product.cartItemid,
        productID:product.productID,
        userName: product.userName,
        title: product.title,
        images: product.images,
        price:product.price,
        Qnty:product.Qnty,
        description:product.description,
        descount:product.descount

      }
    )
    console.log(this.MyCart);
    
  }


  removeProductFromCart(indexof:number){
    // this.MyCart.splice(indexof,1);
    this.AngularFirestore.doc('cartItems/' + indexof).delete()
  }
  // addQuantity(indexof:number){      
  //   if(this.MyCart[indexof].Qnty>=5)
  //   alert("You can buy only upto 5 units of this product");
  //   else
  //   this.MyCart[indexof].Qnty++;
  // }
  updateQuantity(cartItemId:number,quantity:number){
    this.AngularFirestore.doc('cartItems/' + cartItemId).update(
     
      {
        Qnty:quantity
      }
    )

  }
  removeQuantity(indexof:number){
    if(this.MyCart[indexof].Qnty>1)
    this.MyCart[indexof].Qnty--;
  }
}

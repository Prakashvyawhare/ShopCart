
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { cartItem } from './cartItem';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'
})
export class  CartService {
MyCart=new Array<any>();
constructor(public getusername : UserDetailsService, private AngularFirestore:AngularFirestore,private UserDetailsService:UserDetailsService) 
{
  this.getCartItemsFromDatabase();
 }
currentUserCarts(){         ////   get cart item added by current user  ////
  let currentUserCart=this.MyCart.filter((x)=>{
    return x.userName==this.UserDetailsService.ThisUser[0]})
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
        descount:product.descount,
        stock:product.stock
      }
    )
  }
  removeProductFromCart(cartItemId:number){
    // this.MyCart.splice(indexof,1);
    this.AngularFirestore.doc('cartItems/' + cartItemId).delete()
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

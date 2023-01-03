import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { cartItem } from './cartItem';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'
})
export class  CartService {
  // currentUserCart:Array<cartItem>;
MyCart=new Array<cartItem>();
// currentUserCart= Array<cartItem>();

constructor(public getusername : UserDetailsService) { }
getCartItembyUserName(username:string){
  let currentUserCart=this.MyCart.filter((x)=>{
    return x.userName==username})
  return currentUserCart;
}

addProducttoCart(product: cartItem ) {  ////  if this product not exist in cart then add to cart else add quantity of same product  ///
   
    let presentItem:any = this.getCartItembyUserName(this.getusername.ThisUser[0]).find(item=>item.productID==product.productID)   ///this item is already exist  ////
    if(!presentItem)           
    {
    
   this.MyCart.push(product)
   alert("successfully added to the Cart")}
   
   else
   alert("successfully added Quantity of this item")
   presentItem.Qnty+=product.Qnty
   
  }


  removeProductFromCart(indexof:number){
    this.MyCart.splice(indexof,1);
  }
  addQuantity(indexof:number){      
    if(this.MyCart[indexof].Qnty>=5)
    alert("You can buy only upto 5 units of this product");
    else
    this.MyCart[indexof].Qnty++;
  }
  removeQuantity(indexof:number){
    if(this.MyCart[indexof].Qnty>1)
    this.MyCart[indexof].Qnty--;
  }
  


  

  



}

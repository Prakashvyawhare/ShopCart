import { Injectable } from '@angular/core';
import { count } from 'console';
import { cartItem } from './cartItem';

@Injectable({
  providedIn: 'root'
})
export class  CartService {
  // currentUserCart:Array<cartItem>;
MyCart=new Array<cartItem>();
// currentUserCart= Array<cartItem>();

constructor() { }
getProductbyUserName(username:string){
  let currentUserCart=this.MyCart.filter((x)=>{
    return x.userName==username})
  return currentUserCart;
}

  addProduct(product: cartItem ) {
   this.MyCart.push(product);
   
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

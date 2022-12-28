import { Injectable } from '@angular/core';
import { count } from 'console';
import { cartItem } from './cartItem';

@Injectable({
  providedIn: 'root'
})
export class  CartService {
  currentUserCart:Array<cartItem>;
MyCart= Array<cartItem>();
// currentUserCart= Array<cartItem>();

  addProduct(product: cartItem ) {
   this.MyCart.push(product);
   
  }
  removeProductFromCart(indexof:number){
    this.MyCart.splice(indexof,1);
  }
  addQuantity(indexof:number){
    this.MyCart[indexof].Qnty++;
  }
  removeQuantity(indexof:number){
    if(this.MyCart[indexof].Qnty>1)
    this.MyCart[indexof].Qnty--;
  }
  getProductbyUserName(username:string){
    this.currentUserCart=this.MyCart.filter((x)=>{
      return x.userName==username;
    })
    return this.currentUserCart;
  }


  

  


  constructor() { }
}

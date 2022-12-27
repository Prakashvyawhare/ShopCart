import { Injectable } from '@angular/core';
import { count } from 'console';
import { cartItem } from './cartItem';

@Injectable({
  providedIn: 'root'
})
export class  CartService {
  
MyCart= Array<cartItem>();
currentUserCart= Array<cartItem>();

  addProduct(product: cartItem ) {
   this.MyCart.push(product);
   
  }

  


  constructor() { }
}

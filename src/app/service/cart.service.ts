import { Injectable } from '@angular/core';
import { count } from 'console';
import { cartItem } from './cartItem';

@Injectable({
  providedIn: 'root'
})
export class  CartService {
  
MyCart= Array<cartItem>();
  addProduct(product: any ) {
   this.MyCart.push(product)
   
  }

  


  constructor() { }
}

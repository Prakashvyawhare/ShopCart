import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, fromEvent } from 'rxjs';
import { BankOfferService } from '../service/bank-offer.service';
import { CartService } from '../service/cart.service';
import { cartItem } from '../service/cartItem';
import { ProductDetailsService } from '../service/product-details.service';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit { 
  RemoveProduct(i: number) {
    let getCartItemIdbyIndex = this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[i].cartItemid;     ///// get "cartitemId" by index of 'currentuser'Array  ////
    this.cartService.removeProductFromCart(getCartItemIdbyIndex);
    this.updateprice();       
  }
  addQuantity(i)        ///  add  Product Quantity in the cart  ////
  {
    let getCartItemIdbyIndex = this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[i].cartItemid;     ///// get "cartitemId" by index of 'currentuser'Array  ////
    this.cartService.addQuantity(getCartItemIdbyIndex)
    this.updateprice();     ////// update price details whenever qny added  ////
  }
  RemoveQuantity(i)          ////      remove or decrease Product Quantity in the cart  ////
  {
    let getCartItemIdbyIndex = this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[i].cartItemid;     ///// get "cartitemId" by index of 'currentuser'Array  ////
    this.cartService.removeQuantity(getCartItemIdbyIndex)                                                           //// decrease qnty by 'cartitemId'  ////
    this.updateprice();                ////// update price details whenever qny decrease  ////
  }
  selectBankid=0 ;
  selectBank(i:number){
   return  this.selectBankid=i;
  }
  constructor(
    // private route : ActivatedRoute,
    //  public cartApiser : ProductDetailsService, 
    public getbankoffer: BankOfferService,
    public cartService: CartService,
    public getusername: UserDetailsService
  ) { }
  ngOnInit(): void {
    this.cartService.getCartItembyUserName(this.getusername.ThisUser[0]);      /////////      showing cart items of only current user //    /////////    
    this.updateprice();      //// update price initially  //
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////   total price details updated from here  /////
  updateprice() {
    let eachTotal = 0;
    let discount = 0;
    let totalAmount = 0;
    let deliveryCharge=0;
    let currentbankoffer=0;
    const MINPrice=1000;
    for (let index = 0; index < this.cartService.getCartItembyUserName(this.getusername.ThisUser[0]).length; index++) {
      eachTotal += this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[index].price * this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[index].Qnty;
      discount += this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[index].price * this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[index].Qnty * this.cartService.getCartItembyUserName(this.getusername.ThisUser[0])[index].descount * 0.01;
      totalAmount = eachTotal - discount;
    }
    if(totalAmount>0 && totalAmount<MINPrice){        ////  condition for delivery charges ////
    deliveryCharge =0.99;}
    if(eachTotal>MINPrice){                           ////   bank offer is applicable if ---minimum purchaes of 1000-////
      currentbankoffer=this.getbankoffer.offers[this.selectBankid].discountValue ;}
    totalAmount =eachTotal - discount-currentbankoffer + deliveryCharge;
    return [eachTotal, discount, totalAmount, deliveryCharge,currentbankoffer];
  }
}
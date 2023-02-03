import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, fromEvent } from 'rxjs';
import { OrdersService } from '../orders.service';
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
    let getCartItemIdbyIndex = this.cartService.currentUserCarts()[i].cartItemid;     ///// get "cartitemId" by index of 'currentuser'Array  ////
    this.cartService.removeProductFromCart(getCartItemIdbyIndex);
    this.updateprice();
  }
  addQuantity(i)        ///  add  Product Quantity in the cart  ////
  {
    let getCartItemIdbyIndex = this.cartService.currentUserCarts()[i].cartItemid;   ///// get "cartitemId" by index of 'currentuser'Array  ////
    let quantity = this.cartService.currentUserCarts()[i].Qnty + 1;    ////  get 'Quanty'of 'currentuser' by index[i] and increse by 1 ////
    this.cartService.updateQuantity(getCartItemIdbyIndex, quantity)
    this.updateprice();     ////// update price details whenever qny added  ////
  }
  RemoveQuantity(i)          ////      remove or decrease Product Quantity in the cart  ////
  {
    let getCartItemIdbyIndex = this.cartService.currentUserCarts()[i].cartItemid;     ///// get "cartitemId" by index[i] of 'currentuser'Array  ////
    if (this.cartService.currentUserCarts()[i].Qnty > 1) {
      let quantity = this.cartService.currentUserCarts()[i].Qnty - 1;                    ////  get 'Quanty'of 'currentuser' by index[i] and decrese by 1 ////
      this.cartService.updateQuantity(getCartItemIdbyIndex, quantity);
      this.updateprice();
    }                ////// update price details whenever qny decrease  ////
  }
  selectBankid = 0;
  emptyCart = "/assets/empty_cart.png"
  selectBank(i: number) {
    return this.selectBankid = i;
  }
  constructor(
    // private route : ActivatedRoute,
    //  public cartApiser : ProductDetailsService, 
    public getbankoffer: BankOfferService,
    public cartService: CartService,
    public getusername: UserDetailsService,

    public OrdersService: OrdersService
  ) { }
  ngOnInit(): void {
    this.cartService.currentUserCarts();      /////////      showing cart items of only current user //    /////////    
    this.updateprice();      //// update price initially  //
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////   total price details updated from here  /////
  updateprice() {
    let eachTotal = 0;
    let discount = 0;
    let totalAmount = 0;
    let deliveryCharge = 0;
    let currentbankoffer = 0;
    const MINPrice = 1000;
    for (let index = 0; index < this.cartService.currentUserCarts().length; index++) {
      eachTotal += this.cartService.currentUserCarts()[index].price * this.cartService.currentUserCarts()[index].Qnty;
      discount += this.cartService.currentUserCarts()[index].price * this.cartService.currentUserCarts()[index].Qnty * this.cartService.currentUserCarts()[index].descount * 0.01;
      totalAmount = eachTotal - discount;
    }
    if (totalAmount > 0 && totalAmount < MINPrice) {        ////  condition for delivery charges ////
      deliveryCharge = 0.99;
    }
    if (eachTotal > MINPrice) {                           ////   bank offer is applicable if ---minimum purchaes of 1000-////
      currentbankoffer = this.getbankoffer.offers[this.selectBankid].discountValue;
    }
    totalAmount = eachTotal - discount - currentbankoffer + deliveryCharge;
    return [eachTotal, discount, totalAmount, deliveryCharge, currentbankoffer];
  }
  placedOrder() 
  {
    for (let index = 0; index < this.cartService.currentUserCarts().length; index++) {       //// forloop for to check item one by one ///
      const currentUserCartItem = this.cartService.currentUserCarts()[index];   
      this.OrdersService.buyNow(currentUserCartItem);                      
      // let productInStockList = this.OrdersService.stockItemList.find((x) => x.productID == currentUserCartItem.productID);   //// check item added in stockList //
      // if (productInStockList) {
      //   this.OrdersService.updateStock(productInStockList, currentUserCartItem)   //// if already in stockList then update stock ///
      // }
      // else {
      //   this.OrdersService.setStock(currentUserCartItem);  //// else add in stocklist and then update stock ////
      // }
    }
  }
}
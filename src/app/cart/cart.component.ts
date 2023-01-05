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
    let I = this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[i].cartItemid;     ///// get "cartitemId" by index of 'currentuser'Array  ////
    this.cart.removeProductFromCart(I);
    this.updateprice();       
  }
  add(i)        ///  add  Product Quantity in the cart  ////
  {
    let I = this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[i].cartItemid;     ///// get "cartitemId" by index of 'currentuser'Array  ////
    this.cart.addQuantity(I)
    this.updateprice();     ////// update price details whenever qny added  ////

  }


  RemoveQuantity(i)          ////      remove or decrease Product Quantity in the cart  ////
  {

    let I = this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[i].cartItemid;     ///// get "cartitemId" by index of 'currentuser'Array  ////
    this.cart.removeQuantity(I)                                                           //// decrease qnty by 'cartitemId'  ////

    this.updateprice();                ////// update price details whenever qny decrease  ////

  }
  selectBankid=0 ;
  select(i:number){
    this.selectBankid=0
    let I:number=this.getbankoffer.offers[i].bankId;
    this.selectBankid=i;
    console.log(this.selectBankid);  
    return this.selectBankid;
  }

  constructor(
    // private route : ActivatedRoute,
    //  public cartApiser : ProductDetailsService, 
    public getbankoffer: BankOfferService,
    public cart: CartService,
    public getusername: UserDetailsService
  ) { }

  ngOnInit(): void {
    //  this.productID = this.route.snapshot.paramMap.get('id');
    // this.cartApiser.getProduct(this.productID).subscribe((data:any)=>{
    //   this.cart.addProduct(data);
    // });








    this.cart.getCartItembyUserName(this.getusername.ThisUser[0]);      /////////      showing cart items of only current user //    /////////    

    this.updateprice();      //// update price initially  //
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////   total price details updated from here  /////
  updateprice() {
    let eachTotal = 0;
    let Discount = 0;
    let totalAmount = 0;
    let deliveryCharge=0
    let currentbankoffer=0
    let Q=0
    for (let index = 0; index < this.cart.getCartItembyUserName(this.getusername.ThisUser[0]).length; index++) {
      eachTotal += this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[index].price * this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[index].Qnty;
      Discount += this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[index].price * this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[index].Qnty * this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[index].descount * 0.01;
      Q+=this.cart.getCartItembyUserName(this.getusername.ThisUser[0])[index].Qnty;
      totalAmount = eachTotal - Discount;

    }
      
    if(totalAmount>0 && totalAmount<1000){        ////  condition for delivery charges ////
    deliveryCharge =0.99;}
    if(eachTotal>1000){                           ////   bank offer is applicable if ---minimum purchaes of 1000-////
      currentbankoffer=this.getbankoffer.offers[this.selectBankid].offer ;}

      
    totalAmount =eachTotal - Discount-currentbankoffer + deliveryCharge;
    return [eachTotal, Discount, totalAmount, deliveryCharge,currentbankoffer]


  }

}
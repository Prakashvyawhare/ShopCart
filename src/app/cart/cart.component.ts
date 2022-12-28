import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, fromEvent } from 'rxjs';
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
  // Carts = this.cart.getProductbyUserName(this.getusername.ThisUser[0])
  // eachTotal: number;
  // Discount: number;
  // totalAmount: number;
  // MyCart:any =[];

  // productID:any= "";
  RemoveProduct(i: number) {
    this.cart.removeProductFromCart(i);
    this.updateprice();
  }
  add(i) {
    this.cart.addQuantity(i)
    this.updateprice();

  } 
  RemoveQuantity(i) {
    this.cart.removeQuantity(i)
    this.updateprice();

  } 

  // Qnty:number;
  constructor(
    // private route : ActivatedRoute,
    //  public cartApiser : ProductDetailsService, 
    public cart: CartService,
    public getusername: UserDetailsService
  ) { }

  ngOnInit(): void {
    //  this.productID = this.route.snapshot.paramMap.get('id');
    // this.cartApiser.getProduct(this.productID).subscribe((data:any)=>{
    //   this.cart.addProduct(data);
      // });
    /////////      showing cart items of only current user //    /////////
    // this.Carts = this.cart.MyCart.filter((x) => x.userName == this.getusername.ThisUser[0]);   ///  this "Carts" is a having product of current User ///
   
    this.cart.getProductbyUserName(this.getusername.ThisUser[0])
      this.updateprice();
  } 
  updateprice(){
    let eachTotal=0;
     let Discount=0;
     let totalAmount =0;
      for (let index = 0; index < this.cart.getProductbyUserName(this.getusername.ThisUser[0]).length; index++) {
        eachTotal += this.cart.getProductbyUserName(this.getusername.ThisUser[0])[index].price*this.cart.getProductbyUserName(this.getusername.ThisUser[0])[index].Qnty;
        Discount+= this.cart.getProductbyUserName(this.getusername.ThisUser[0])[index].price*this.cart.getProductbyUserName(this.getusername.ThisUser[0])[index].Qnty*this.cart.getProductbyUserName(this.getusername.ThisUser[0])[index].descount*0.01;
        totalAmount=eachTotal-Discount
      }
      return [eachTotal , Discount,totalAmount]
    

 }

}
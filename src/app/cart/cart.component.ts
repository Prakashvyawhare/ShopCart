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
  Carts = new Array<cartItem>()
  eachTotal: number;
  Discount: number;
  totalAmount: number;
  // MyCart:any =[];

  // productID:any= "";
  add(i) {
    this.Carts[i].Qnty++;
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

    /////////      showing cart items of only current user  /////////
    this.Carts = this.cart.MyCart.filter((x) => x.userName == this.getusername.ThisUser[0])
    this.eachTotal = 0;
    this.Discount = 0
    for (let index = 0; index < this.Carts.length; index++) {
      this.eachTotal += this.Carts[index].price * this.Carts[index].Qnty;
      this.Discount += this.Carts[index].price * this.Carts[index].Qnty * this.Carts[index].descount * 0.01;

    }
    this.totalAmount = this.eachTotal - this.Discount


    // });





  }

  updateQnty() {
    this.eachTotal = 0;
    this.Discount = 0
    for (let index = 0; index < this.Carts.length; index++) {
      this.eachTotal += this.Carts[index].price * this.Carts[index].Qnty;
      this.Discount += this.Carts[index].price * this.Carts[index].Qnty * this.Carts[index].descount * 0.01;


    }
    this.totalAmount = this.eachTotal - this.Discount;

  }
  updateprice(){
    this.eachTotal=0;
     this.Discount=0
      for (let index = 0; index < this.Carts.length; index++) {
         this.eachTotal += this.Carts[index].price*this.Carts[index].Qnty;
        this.Discount+= this.Carts[index].price*this.Carts[index].Qnty*this.Carts[index].descount*0.01;

      }
     this.totalAmount =this.eachTotal- this.Discount
      
       
   // });
    

    


  }
  // updateprice(){
  //   this.eachTotal=0;
  //    this.Discount=0
  //     for (let index = 0; index < this.Carts.length; index++) {
  //        this.eachTotal += this.Carts[index].price*this.Carts[index].Qnty;
  //       this.Discount+= this.Carts[index].price*this.Carts[index].Qnty*this.Carts[index].descount*0.01;

  //     }
  //    this.totalAmount =this.eachTotal- this.Discount
  // }


  RemoveProduct(i) {
    this.cart.MyCart.splice(i, 1);

  }
}
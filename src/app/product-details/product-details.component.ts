import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {stockListService } from '../stockList.service';
import { Review } from '../review/Review';
import { BankOfferService } from '../service/bank-offer.service';
import { CartService } from '../service/cart.service';
import { cartItem } from '../service/cartItem';
import { ProductDetailsService } from '../service/product-details.service';
import { ReviewService } from '../service/review.service';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any ={};
  result:any
  productID:any;
  cartItemId:number=1;
////  for star pattern  //
  fiveStars= [1,2,3,4,5];
  rate = 0;
   productQuantity=1;
  silderImages: Array<any> = [];
  reviewer:Review={
    userName: '',
    rating: 0,
    comment: '',
    productId: 0,
    reviewId: 0
  }
  AddReview(){
    this.updateReviewId()
     this.reviewService.AddReview(new Review(this.reviewer.reviewId,this.reviewer.userName,this.reviewer.rating,this.reviewer.comment,this.reviewer.productId))
     this.reviewService.ReviewList;  
  }
  constructor(private rout : ActivatedRoute,
    public bankOfferService:BankOfferService,
    private productDetailsService : ProductDetailsService,
     public reviewService: ReviewService,
     public  GetUserName: UserDetailsService, 
     private cartservice:CartService,
     private toast:ToastrService,
     private stockListService:stockListService
     ) { }
    
  ngOnInit(): void {  
//////////       get  product id by param routing //
    this.productID= this.rout.snapshot.paramMap.get('id');
////////   obseravable  example   ( get product details by productId ) /////////
    this.productDetailsService.getProduct(this.productID).subscribe((data :any)=>{
      this.product = data;
      this.getImages();

    },()=>{
      ////////////  Observable error message  ////////
      setTimeout(() => {
      this.result = "/assets/errorImg.jpg"  ;
         return this.result;
      }, 3000);
    })
    this.reviewService.getReviewbyproductId(this.productID) ;
    ////////// get product id by param routing //////
    this.reviewer.productId = this.productID;
    ////// get username from userdetails service  ////// 
    this.reviewer.userName = this.GetUserName.ThisUser[0];
    //////get rating by click on star  /////////
this.reviewer.rating = this.rate    
  }//// NG ONINIT CLOSE HERE
  getImages() {
    if (this.product.images)
      this.product.images.map((x:any) => {
         return this.silderImages.push({
          image: x,
          thumbImage: x,
        });
      });
  }
///////// by click on star rating will by update by this function /////////////////////
  updaterating(a:any){
    this.rate=a
    this.reviewer.rating=a
  }
  updateReviewId()         ///////get the maximum value of reviewId from the Array + 1 ////
  {
    let array=this.reviewService.ReviewList.map((x:Review)=>x.reviewId);
    this.reviewer.reviewId=Math.max(...array)+1;     ////  number[] => number same like tostring()
  }
  /////////////////  delete review      ///////////////
  deleteReview(i){
    let rreviewId=this.reviewService.ReviewList[i].reviewId
    this.reviewService.DeleeteReview(rreviewId)
  }
  updateCartItemId(){     ///////get the maximum value of cartItemId from the Array and increment by + 1 ////
  let idArr=this.cartservice.MyCart.map((x:cartItem)=>x.cartItemid);
  this.cartItemId = Math.max(...idArr)+1;
  }
                ////////    quantity add and remove    ////////
  plusCount(){
    if(this.productQuantity>=5)
    this.toast.warning("You can buy only upto 5 units of this product");
    else
    this.productQuantity++
  }
  minusCount(){ 
    if (this.productQuantity>1) {
      return this.productQuantity--;
    }
    else
    return null
  }
  //                      //////////////   Add to cart              /////////
  addtocart(){ 
    let alreadyExistItem:any = this.cartservice.currentUserCarts().find((item)=>{
      return item.productID==this.productID})   ///this item is already exist  ////
    if(!alreadyExistItem)          ////if not exist  push ////
    {     
      this.updateCartItemId() ;
    let C=new cartItem(this.cartItemId,this.reviewer.userName, this.productID, this.product.title,this.product.images,this.product.price,this.productQuantity,this.product.description,this.product.discountPercentage,this.product.stock)
    this.cartservice.addProducttoCart(C);
    this.toast.success("Added to th Cart", "Successful")
  }
      else{
   this.toast.success("Added Quantity of this item","Successful")
    let increaseQuantity = alreadyExistItem.Qnty+this.productQuantity;     ////  else add selected Quantity ////
    this.cartservice.updateQuantity(alreadyExistItem.cartItemid,increaseQuantity)    //// update on database ////
  }
  }
  buyNow(){
    let Item=new cartItem(this.cartItemId,this.reviewer.userName, this.productID, this.product.title,this.product.images,this.product.price,this.productQuantity,this.product.description,this.product.discountPercentage,this.product.stock)
    this.stockListService.buyNow(Item)    
  }
}

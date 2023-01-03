import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { filter } from 'rxjs';
import { Review } from '../review/Review';
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
  productID:any
////  for star pattern  //
  star= [1,2,3,4,5];
  rate = 0;
   count=1;
  // productId:number;
  silderImages: Array<any> = [];
  // p:cartItem={
  //   productID: 0,
  //   title: '',
  //   images: undefined,
  //   price: 0,
  //   Qnty: 0,
  //   description: '',
  //   descount: 0,
  //   userName: ''
  // }
  r:Review={
    userName: '',
    rating: 0,
    comment: '',
    productId: 0,
    ID: 0,
  }
  AddReview(){
    this.getReview.AddReview(new Review(this.r.userName,this.r.rating,this.r.comment,this.r.productId))
     this.getReview.ReviewList;    
    //  return Review.reviewid; 
     
  }
  
 
  constructor(private rout : ActivatedRoute,
    private PrductApi : ProductDetailsService, public getReview: ReviewService,public  GetUserName: UserDetailsService, public cartservice:CartService) { }
    

    


     
  ngOnInit(): void {
    

//////////       get  product id by param routing //
    this.productID= this.rout.snapshot.paramMap.get('id');
////////   obseravable  example   ( get product details by productId ) /////////
    this.PrductApi.getProduct(this.productID).subscribe((data :any)=>{
      this.product = data;
      this.getImages();

    },()=>{
      ////////////  Observable error message  ////////
      
      setTimeout(() => {
      this.result = "/assets/errorImg.jpg"  
        // console.log(this.result);
         return this.result;
      }, 3000);
     
      

    })
     
    this.getReview.getReviewbyproductId(this.productID) ;


    ////////// get product id by param routing //////
    this.r.productId = this.productID
  
    // this.r.comment = this.r.comment
    ////// get username from userdetails service  ////// 
    this.r.userName = this.GetUserName.ThisUser[0]
    // this.p.userName = this.GetUserName.ThisUser[0]
    //////get rating by click on star  /////////
this.r.rating = this.rate    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  this.p.title= this.product

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
  
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
    this.r.rating=a
  }

  /////////////////  delete review      ///////////////
  deleteReview(i){
    
    this.getReview.DeleeteReview(i)
  }


                ////////    quantity add and remove    ////////
  plusCount(){
    if(this.count>=5)
    alert("You can buy only upto 5 units of this product");
    else
    this.count++
  }
  minusCount(){
    
    
    if (this.count>1) {
      return this.count--
      
    }
    else
    return null
  }

  //                      //////////////   Add to cart              /////////
  addtocart(){  
    let C=new cartItem(this.r.userName, this.productID, this.product.title,this.product.images,this.product.price,this.count,this.product.description,this.product.discountPercentage)
    // if(!this.cartservice.MyCart)
    this.cartservice.addProducttoCart(C)
    // else
    // this.count ++
    // this.cartservice.MyCart.push(new cartItem
    //   (this.product.title,this.product.images,this.product.price,this.count,this.product.description) );
    alert("successfully added to the Cart")
    console.log(this.cartservice.MyCart);
    
  }
  
}

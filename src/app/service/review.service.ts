import { Injectable } from '@angular/core';
import { Review } from '../review/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  ReviewList = new Array<Review>()
  // static ID: number ;
  constructor() { 
    let R1 = new Review("prakash",4,"nice",1)
    // R1.productId = 1;
    // R1.userName = "prakash";
    // R1.rating= 5;
    // R1.comment="good";
    // ReviewService.ID ++;
    this.ReviewList.push(R1);
    let R2 = new Review("john",3,"good",1);
    // R2.productId = 2;
    // R2.userName = "prakash";
    // R2.rating= 4;
    // R2.comment=" v.good";
    // ReviewService.ID ++;
    this.ReviewList.push(R2);

  }
  getReviewbyproductId(Productid:number):any{
    let review = this.ReviewList.filter((x)=>{
       return x.productId==Productid})
    // console.log(review);
 return review
    if(this.ReviewList.filter((x)=> x.productId ==(Productid)))
    return this.ReviewList;


  }
  AddReview (Userreview:Review){
    // let R = new Review("john",2,3,"good",2);


     this.ReviewList.push(Userreview);

    //  console.log(this.ReviewList);
     return this.ReviewList;
  }
  
  DeleeteReview(reviewIndex:number){
    this.ReviewList.splice(reviewIndex,1)
  }
} 

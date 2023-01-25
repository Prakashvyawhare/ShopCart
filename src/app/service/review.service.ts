import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Review } from '../review/Review';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, Firestore } from 'firebase/firestore';
import { last, lastValueFrom, max } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  ReviewList = new Array<any>()
  // static ID: number ;
  constructor(private AngularFirestore: AngularFirestore) { 
    this.getReview();
    
    
    // let R1 = new Review("prakash",4,"nice",1)
    
    // this.ReviewList.push(R1);
    // let R2 = new Review("john",3,"good",1);
   
    //this.ReviewList.push(R2);

  }
  getReviewbyproductId(Productid:number):any{
    let review = this.ReviewList.filter((x)=>{
       return x.productId==Productid})
    // console.log(review);
 return review
    


  }
//   ddd():number{
//    let a=0
//    this.AngularFirestore.collection('reviews')
//     console.log(a);
//     return a
    
//  }
  getReview(){
    this.AngularFirestore.collection('reviews').valueChanges().subscribe((data)=>
    
    { 
      this.ReviewList=data})
    
  }

  // AddReview (Userreview:Review){

  //   // let R = new Review("john",2,3,"good",2);


  //    this.ReviewList.push(Userreview);

  //   //  console.log(this.ReviewList);
  //    return this.ReviewList;
  // }

  AddReview(Userreview:Review){
    this.AngularFirestore.collection('reviews').doc(Userreview.reviewId.toString())
    .set({reviewId:Userreview.reviewId,
      productId:Userreview.productId,
      rating:Userreview.rating,
      comment:Userreview.comment,
      // userName:Userreview.userName

    })
  }
  
  
  // DeleeteReview(reviewIndex:number){
  //   this.ReviewList.splice(reviewIndex,1)
  // }
  DeleeteReview(reviewId:number){
    this.AngularFirestore.doc('/reviews/' + reviewId).delete()
  }
} 

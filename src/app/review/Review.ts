export class  Review {
userName : string;
rating : number;
comment : string;
productId: number;
reviewId: number ;
static id : number=1;

 constructor(id:number, userName: string, Rating: number, comment: string,
    productId : number)
 {
this.userName = userName;
this.rating = Rating;
this.comment = comment;
this.productId= productId;
Review.id ++;
this.reviewId = id;



 }
}
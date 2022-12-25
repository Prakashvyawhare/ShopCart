export class  Review {
userName : string;
rating : number;
comment : string;
productId: number;
ID: number ;
static reviewid : number=1;

 constructor( userName: string, Rating: number, comment: string,
    productId : number)
 {
this.userName = userName;
this.rating = Rating;
this.comment = comment;
this.productId= productId
this.ID = Review.reviewid;
Review.reviewid ++;


 }
}
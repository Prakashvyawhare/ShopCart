export class cartItem {
    userName: string;
    productID:number;
    title:string;
    images: any;
    price:number;
    Qnty: number;
    description:string;
    // Discount:number;
    descount : number
    constructor( username:string,productID:number,title:string,images:any,price:number,Qnty:number,description:string,descount:number)
    {
      this.userName = username;
      this.productID=productID;
      this.title=title;
      this.images= images;
      this.price=price;
      this.Qnty=Qnty ;
      this.description=description;
      this.descount=descount;
    }
    getDiscountOf():any{
      this.price*this.descount*0.01;
    }
    getTotalDiscount():any{
      this.price*this.Qnty*this.descount*0.01;
    }
    getDiscountedPrice():any{
      this.price-this.price*this.descount*0.01;
    }
    getTotalPrice():any{
      this.price*this.Qnty;
    }
    getTotalOfDiscountedPrice():any{
      this.price* this.Qnty-this.price*this.descount*0.01*this.Qnty;
    }


}
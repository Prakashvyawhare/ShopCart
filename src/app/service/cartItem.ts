export class cartItem {
    userName: string;
    productID:number;
    title:string;
    images: any;
    price:number;
    Qnty: number;
    description:string;
  
    descount : number
    cartItemid:number
    static itemid=0;
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
      this.cartItemid=cartItem.itemid
      cartItem.itemid++;
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
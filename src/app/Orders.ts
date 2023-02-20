export class orderItem{
    userName: string;
    productID:number;
    title:string;
     images: any;
    price:number;
     Qnty: number;
     description:string;
     descount : number
     cartItemid:number;
     orderItemID:number;
     orderDate: Date
    constructor( cartItemid:number,username:string,productID:number,title:string,images:any,price:number,Qnty:number,description:string,descount:number,orderItemID:number,orderDate: Date)
    {
      this.userName = username;
      this.productID=productID;
      this.title=title;
      this.images= images;
      this.price=price;
      this.Qnty=Qnty ;
      this.description=description;
      this.descount=descount;
      this.cartItemid=cartItemid;
      this.orderItemID=orderItemID;
      this.orderDate=orderDate;
}
}
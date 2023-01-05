export  class Bank {

    bankName: string;
    bankId:number;
    offer:number;
    offerDesc:string;
    constructor(bankId:number,bankName:string,offer:number,offerDesc:string){
        this.bankId= bankId;
        this.bankName=bankName;
        this.offer=offer;
        this.offerDesc=offerDesc;

    }
  getbankDiscount():any {
    return this.offer;

  }   
    
}
// export class icici extends Bank{
//      offers:number;
     
//      constructor(bankId:number,bankName:string,offer:number){
//         super(bankId,bankName);
//         this.offers=offer;
//      }
//     override getbankDiscount(){
//         let discount = this.offers;
       
        
//         return discount;
        
        
        
//     }

// }
// export class hdfc extends Bank{
//     offers:number;
     
//     constructor(bankId:number,bankName:string,offer:number){
//        super(bankId,bankName);
//        this.offers=offer;
//     }
//    override getbankDiscount(){
//        let discount = this.offers;
//        return discount;
//     }

// }
// export class sbi extends Bank{
//     offers:number;
     
//      constructor(bankId:number,bankName:string,offer:number){
//         super(bankId,bankName);
//         this.offers=offer;
//      }
//     override getbankDiscount(){
//         let discount = this.offers;
//         return discount;    
//     }

// }


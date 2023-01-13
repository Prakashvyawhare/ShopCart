export  class Bank {

    bankName: string;
    bankId:number;
    discountValue:number;
    offerDescription:string;
    constructor(bankId:number,bankName:string,discountValue:number,offerDescription:string){
        this.bankId= bankId;
        this.bankName=bankName;
        this.discountValue=discountValue;
        this.offerDescription=offerDescription;
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


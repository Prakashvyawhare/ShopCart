import { Injectable } from '@angular/core';
import { Bank, } from '../cart/bankOffer';

@Injectable({
  providedIn: 'root'
})
export class BankOfferService {
offers= Array<Bank>()
  constructor() { 
    let COD = new Bank(0,"cash on Delivery",0,"no offer on cash on delivery ");
    let icicibank = new Bank(1,"ICICI",100,"Bank Offer $100 off on ICICI bank on orders of $1000 and above");  
    let hdfcbank  = new Bank(2,'HDFC',110,"Bank Offer $110 off on HDFC bank on orders of $1000 and above");
    let Sbi = new Bank(3,"SBI",120,"Bank Offer $120 off on SBI bank on orders of $1000 and above");
    this.offers.push(COD,icicibank,hdfcbank,Sbi);  
  }
}

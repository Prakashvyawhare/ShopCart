import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bank, } from '../cart/bankOffer';

@Injectable({
  providedIn: 'root'
})
export class BankOfferService {
offers= Array<any>()
  constructor(private AngularFirestore: AngularFirestore) { 
    this.getOffersfromDatabase()  
    // let COD = new Bank(0,"cash on Delivery",0,"no offer on cash on delivery ");
    // let icicibank = new Bank(1,"ICICI",100,"Bank Offer $100 off on ICICI bank on orders of $1000 and above");  
    // let hdfcbank  = new Bank(2,'HDFC',110,"Bank Offer $110 off on HDFC bank on orders of $1000 and above");
    // let Sbi = new Bank(3,"SBI",120,"Bank Offer $120 off on SBI bank on orders of $1000 and above");
    // this.offers.push(COD,icicibank,hdfcbank,Sbi);  
  }
  getOffersfromDatabase(){   ////  Retrieve Offers from database  ////
    this.AngularFirestore.collection('offers').valueChanges().subscribe((data)=>{ this.offers=data})
  }
}

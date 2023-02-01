import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { cartItem } from './service/cartItem';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  OrdersList= Array<any>()
  constructor(private AngularFirestore: AngularFirestore) { this.updatateOrderList()}

  updatateOrderList(){
    this.AngularFirestore.collection('Orders').valueChanges().subscribe((data)=>{
      this.OrdersList=data
    })
  }
  setStock(product:cartItem){
    let upstock=product.stock-product.Qnty
    this.AngularFirestore.collection('Orders').doc(product.productID.toString()).set({
      productID:product.productID,
      stock:upstock
    })
  }
  updateStock(Product:cartItem,quantity:number)
  {
    let upstock = Product.stock-quantity
    this.AngularFirestore.doc('Orders/'+ Product.productID).update({
      stock:upstock
    })
  }
 

}

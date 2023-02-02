import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { cartItem } from './service/cartItem';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  stockItemList = Array<any>()
  constructor(private AngularFirestore: AngularFirestore,private toastr: ToastrService) { this.updatateOrderList()}
  updatateOrderList() {
    this.AngularFirestore.collection('stockItemList').valueChanges().subscribe((data) => {      //// Retrieve stock data from database ///
      this.stockItemList = data
    })
  }
  setStock(currentUserCartItem: cartItem) {
    let updatedStock = currentUserCartItem.stock - currentUserCartItem.Qnty;    /// minus selected quantity from stock ////
    if (updatedStock >= 0) {
      this.AngularFirestore.collection('stockItemList').doc(currentUserCartItem.productID.toString()).set({     //// update on database ///
        productID: currentUserCartItem.productID,
        stock: updatedStock
      })
      this.toastr.success("Order Placed Successfully  " , currentUserCartItem.title);
    }
    else {
      this.toastr.warning("No Sufficient Stock Available  " , currentUserCartItem.title)
    }
  }
  updateStock(productInStockList: cartItem, currentUserCartItem: cartItem) {
    let updatedStock = productInStockList.stock - currentUserCartItem.Qnty;    /// minus selected quantity from stock ////
    if (updatedStock >= 0) {
      this.AngularFirestore.doc('stockItemList/' + productInStockList.productID).update({   //// update on database ///
        stock: updatedStock
      })
      this.toastr.success("Order Placed Successfully " , currentUserCartItem.title);
    }
    else {
      this.toastr.warning("No Sufficient Stock Available " , currentUserCartItem.title)
    }
  }
}

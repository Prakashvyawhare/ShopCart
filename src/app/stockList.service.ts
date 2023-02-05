import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './service/cart.service';
import { cartItem } from './service/cartItem';

@Injectable({
  providedIn: 'root'
})
export class stockListService {
  stockItemList = Array<any>()
  constructor(private AngularFirestore: AngularFirestore,private toastr: ToastrService, public CartService:CartService) { this.updateStockItemList()}
  updateStockItemList() {
    this.AngularFirestore.collection('stockItemList').valueChanges().subscribe((data) => {      //// Retrieve stock data from database ///
      this.stockItemList = data
    })
  }
  setStock(currentUserCartItem: cartItem) {
    let updatedStock = currentUserCartItem.stock - currentUserCartItem.Qnty;    /// minus selected quantity from stock ////
    if (updatedStock >= 0) {
     this.updateMyOrderList(currentUserCartItem,updatedStock);
     this.CartService.removeProductFromCart(currentUserCartItem.cartItemid);
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
      this.updateMyOrderList(currentUserCartItem,updatedStock);
      this.CartService.removeProductFromCart(currentUserCartItem.cartItemid)
      this.AngularFirestore.doc('stockItemList/' + productInStockList.productID).update({   //// update on database ///
        stock: updatedStock
      })
      this.toastr.success("Order Placed Successfully " , currentUserCartItem.title);
    }
    else {
      this.toastr.warning("No Sufficient Stock Available " , currentUserCartItem.title)
    }
  }
  updateMyOrderList(myCartItem:cartItem,stock:number){     //// add item in My orderList ////
    this.AngularFirestore.collection('myOrders').doc(myCartItem.cartItemid.toString()).set(
      {
        cartItemid:myCartItem.cartItemid,
        userName:myCartItem.userName,
        productID:myCartItem.productID,
        title:myCartItem.title,
        images:myCartItem.images,
        price:myCartItem.price,
        Qnty:myCartItem.Qnty,
        description:myCartItem.description,
        descount:myCartItem.descount
        
      }
    )
  }
  buyNow(currentUserCartItem:cartItem)
  {
    let productInStockList = this.stockItemList.find((x) => x.productID == currentUserCartItem.productID);   //// check item added in stockList //
    if (productInStockList) {
      this.updateStock(productInStockList, currentUserCartItem)   //// if already in stockList then update stock ///
    }
    else {
      this. setStock(currentUserCartItem);  //// else add in stocklist and then update stock ////
    }
  }
  reloadStock(product){
    let productInStockList = this.stockItemList.find((x) => x.productID == product.id);   //// check item added in stockList //
    if(productInStockList!==undefined){                                                           //// add if not added ///
    this.AngularFirestore.collection('stockItemList').doc(product.id.toString()).set(
      {
        productID:product.id,
        stock:product.stock
      }
    )}
  }
  // addNewStock(product,newStock:number){        ////  check  product updated in stockItemList  if not updated then addStock and update  ///
  //   let stoc:number=product.stock
  //   let totalStock= stoc + newStock;
  //   this.AngularFirestore.collection('stockItemList').doc(product.id.toString()).set(
  //     {
  //       productID:product.id,
  //       stock:totalStock
  //     }
  //   )
  // }
  addStock(productInStockList,newStock:number){
    let stoc:number=productInStockList.stock
    let totalStock:number = stoc + newStock;
    this.AngularFirestore.doc('stockItemList/'+ productInStockList.productID).update(
      {
        stock:totalStock
      }
    )
  }
  addStockBySeller(product,newStock:number){
    let productInStockList = this.stockItemList.find((x) => x.productID == product.id);   //// check item added in stockList //
    if(productInStockList){
      this.addStock(productInStockList,newStock);
    }
    // else   //// note:- else condition dead because  "allProductsStockUpdate()" here already sync all product
    // {
    //   this.addNewStock(product,newStock)
    // }
    this.toastr.success("Stock Added","Successful")
  }
}

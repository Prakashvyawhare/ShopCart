import { Component, OnInit } from '@angular/core';
import { OrderListService } from '../service/order-list.service';
import { UserDetailsService } from '../service/user-details.service';
import { stockListService } from '../stockList.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrders=this.OrderListService.currentUserOrderList()
  constructor(
    public OrderListService:OrderListService,
    public UserDetailsService:UserDetailsService,
    public stockListService:stockListService
    ) { }
    customer= this.UserDetailsService.currentUserDetails();
  ngOnInit(): void {
    console.log(this.myOrders);
    
    this.myOrders=this.OrderListService.currentUserOrderList()
    this.customer= this.UserDetailsService.currentUserDetails();
    // this.myOrders=this.OrderListService.currentUserOrderList()
  }
  cancelOredr(i){
    let orderItem=this.myOrders[i];
      this.OrderListService.deleteItemFromOrder(orderItem.orderItemID);
      this.stockListService.addStockWhenCancerOrder(orderItem);
  }
}

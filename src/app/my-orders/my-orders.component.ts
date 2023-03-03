import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { orderItem } from '../Orders';
import { OrderListService } from '../service/order-list.service';
import { UserDetailsService } from '../service/user-details.service';
import { stockListService } from '../stockList.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrderList=new Array<any>()
  filteredOrderList=new Array<any>()
  myOrders= new Array<any> ()
  constructor(
    public OrderListService:OrderListService,
    public UserDetailsService:UserDetailsService,
    public stockListService:stockListService
    ) { }
    customer= this.UserDetailsService.currentUserDetails();
    currentUserOrderList(){
      return this.myOrders= this.myOrderList.filter((orderItem:orderItem)=>orderItem.userName==this.UserDetailsService.ThisUser[0])
     }
     @ViewChild('search') searchBox!:ElementRef;
  ngOnInit(): void {
    // console.log(this.myOrders);
    this.OrderListService.RetrieveOrderList().valueChanges().subscribe({next:(data)=>{
      this.myOrderList=data;
      this.currentUserOrderList()
      this.filteredOrderList=this.myOrders

      fromEvent(this.searchBox.nativeElement,'input').pipe(debounceTime(2000)).subscribe({next:(res:any)=>{
        this.filteredOrderList=this.myOrders.filter(x=>x.title.includes(res.target.value))
        
      }})

    }})
    
    
    
    this.customer= this.UserDetailsService.currentUserDetails();
    // this.myOrders=this.OrderListService.currentUserOrderList()
  }
  cancelOredr(i){
    let orderItem=this.myOrders[i];
      this.OrderListService.deleteItemFromOrder(orderItem.orderItemID);
      this.stockListService.addStockWhenCancerOrder(orderItem);
  }
}

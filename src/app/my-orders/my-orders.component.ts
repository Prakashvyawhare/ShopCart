import { Component, OnInit } from '@angular/core';
import { OrderListService } from '../service/order-list.service';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(
    public OrderListService:OrderListService,
    public UserDetailsService:UserDetailsService
    ) { }
    customer= this.UserDetailsService.currentUserDetails();
  ngOnInit(): void {
    this.customer= this.UserDetailsService.currentUserDetails();

  }

  
}

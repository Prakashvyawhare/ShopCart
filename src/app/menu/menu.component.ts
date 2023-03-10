import { Component, OnInit } from '@angular/core';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { CartService } from '../service/cart.service';
import { OrderListService } from '../service/order-list.service';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public CartService: CartService, public getUsername: UserDetailsService) { }

  ngOnInit(): void {
  }

}

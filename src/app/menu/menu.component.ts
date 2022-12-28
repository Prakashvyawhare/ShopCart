import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public cart: CartService, public getUsername: UserDetailsService) { }

  ngOnInit(): void {
  }

}

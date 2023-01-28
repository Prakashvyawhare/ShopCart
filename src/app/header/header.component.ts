import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { ModelComponent } from '../model/model.component';
import { CartService } from '../service/cart.service';
import { ModellogService } from '../service/modellog.service';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor( public CartService: CartService,public userdetailsservice: UserDetailsService) { }
  // open() {
	// 	const modalRef = this.modalService.open(ModelComponent);}
  ngOnInit(): void { 
  }
  logout(){
   this.userdetailsservice.ThisUser.shift()
}

}

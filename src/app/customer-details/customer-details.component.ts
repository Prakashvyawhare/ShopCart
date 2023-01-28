import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { CustomerDetails } from '../service/Customer';
import { CustomerServiceService } from '../service/customer-service.service';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor( public geteDetails: CustomerServiceService, public UserDetailsService:UserDetailsService) { }
  Customer: CustomerDetails;

  ngOnInit(): void{

  //  ( this.Customer = this.geteDetails.getCustbyID(this.id)    ) 
  this.Customer = this.UserDetailsService.currentUserDetails()

  console.log(this.Customer);
  
    
  }

}

import { Injectable } from '@angular/core';
import { CustomerDetails } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  // id= 1;
  // Name= "";
  // Pass = "";
  // Email = "prakash@gmail.com"
  // Address  = "";

 Customer= new Array<CustomerDetails>()
  constructor() {

    let c = new CustomerDetails();
    c.id = 1;
    c.name = "Prakash";
    c.email = 'prakash@gmail.com'
    c.Address="Auranagabad";
    c.password= "1234";
    this.Customer.push(c);

    let c1 = new CustomerDetails();
    c1.id = 2;
    c1.name= "john";
    c1.email= 'john@gmail.com'
    c1.Address= "pune";
    this.Customer.push(c1);

  //   let c = new CustomerDetails(this.id,this.Pass,this.Name,
  //     this.Email,this.Address)
  //   c.id = this.id;
  //   c.password = this.Pass;
  //   c.name = this.Name;
  //   c.email=this.Email;
  //   c.Address= this.Address;
  //   this.Customer.push(c);n  

  //  }
  }
 
   getCustbyID(id:number):any
{
  let c = this.Customer.find((x)=>(x.id==id));
  return  c;
}  
getUaerbyName(email:string):any{
   let U = this.Customer.find((a)=>(a.email==email));
   return U;
  
}

  
}

export  class User{
    username :string;
  password: string;  
  name: string;
  surname:string;
  userId:number;
  Address: string;
  mobile :number;
  DOB: Date;
  Bank:string;
  seller:boolean;
  constructor(userId:number,username:string,password: string, name:string,surname:string,Address:string, DOB:Date,seller:boolean) {
this.username = username;
this.password = password;
this.name = name;
this.DOB = DOB;
this.surname = surname;
this.Address = Address;
this.userId=userId;  
this.seller=seller; 
  }
}

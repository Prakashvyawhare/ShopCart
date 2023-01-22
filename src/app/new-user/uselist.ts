export  class User{
    username :string;
  password: string;
  static id :number=1;
  name: string;
  surname:string;
  userId:number;
  Address: string;
  mobile :number;
  DOB: Date;
  Bank:string;


  constructor(username:string,password: string, name:string,surname:string,Address:string, DOB:Date) {
this.username = username;
this.password = password;
this.name = name;
this.DOB = DOB;
this.surname = surname;
this.Address = Address;
this.userId=User.id;
    User.id ++
  }
}

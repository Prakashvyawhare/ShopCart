export  class User{
    username :string;
  password: string;
  static id :number=0;
  name: string;
  surname:string;

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
    User.id ++
  }
}

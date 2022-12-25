import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginCaptchaService {
  number1 : number;
  number2: number;

  constructor() { 
    this.number1 = Number.parseInt((Math.random()*Math.random()*100).toString());
    this.number2 = Number.parseInt((Math.random()*Math.random()*100).toString());
    
  }


  getNumber(){
    return [this.number1,this.number2];

  }
  getValidValue(){
    return this.number1 + this.number2;
  }
}

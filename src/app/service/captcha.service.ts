import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  number1:number;
 private number2:number;


 private constructor() {
    this.number1= Number.parseInt((Math.random()* Math.random()*100).toString());
    this.number2= Number.parseInt((Math.random()*Math.random()*100). toString());

    
   }

   getNumber(){
    return [this.number1,this.number2];

   }
   getValidValue(){
    return this.number1 + this.number2;
   }
}

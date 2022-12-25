import { Component, OnInit } from '@angular/core';

import { timeout } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  product= 0;
  ///also use   product = number, or string .............and give condition link (if product >= 5)///
  constructor() { }
  // ProductAvl(){
  //   return false;
  // }


  
  ngOnInit(): void {

     
    

     function onsuccess(message: any){
      console.log( "From promise Component : "+ message  )
    return message}
      
      function onerror(message: any){
        console.log("From promise Component : "+ message  );
      return message}
    

    let Promiseprod  = new Promise( (resolve, reject) => {
      // if(this.ProductAvl())   here you can give  any kind of condition //
      if (this.product >5){
        return setTimeout(() => {
          resolve(this.product)
        },3000)
      }else
      {
        return setTimeout(() => {
          reject("Value must be greater than 5")
        }, 3000);
      }
    })


    Promiseprod.then(onsuccess , onerror)


  }

}

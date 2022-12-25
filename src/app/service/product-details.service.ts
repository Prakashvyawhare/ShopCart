import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MonoTypeOperatorFunction } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  // pipe(arg0: MonoTypeOperatorFunction<any>) {
  //   throw new Error('Method not implemented.');
  // }
   

  constructor( private http: HttpClient) { }
  getProduct(productID: string): any {
    //return this.http.get('https://fakestoreapi.com/products/' + productID);
    return this.http.get('https://dummyjson.com/products/' + productID);
  }

  getProducts() {
   
    return this.http.get('https://dummyjson.com/products');
  }
  
}

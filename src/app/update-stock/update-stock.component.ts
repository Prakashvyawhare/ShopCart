import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {stockListService } from '../stockList.service';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductDetailsService } from '../service/product-details.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
 table=this.stockListService.stockItemList;
 productID:any;
 stock:number=0;
 product:any={}                  
 Products: Array<any> = new Array();  ////   Arrays of products from http --total product ////
  constructor( public stockListService:stockListService,
    public productDetailsService:ProductDetailsService,
    private toastr:ToastrService
    // public ProductsList:ProductsListComponent
    ) { }

  ngOnInit(): void {
    this.stockListService.stockItemList;          //// to print stockItemList ////
    this.productDetailsService.getProducts().pipe().subscribe({    
      next: (response: any) => {
        this.Products = response.products;            ////  retrieve  all products from http ///
        this.allProductsStockUpdate(this.Products)
  }})
       
       
  }

  allProductsStockUpdate(Products){                           ////  check each product's stock updated in stockItemList  if not updated then update  ///
    Products.forEach(element => {this.stockListService.reloadStock(element)   
    });
  }
  findProductFromList(){
    this.product=this.Products.find((item)=>{
      return item.id==this.productID})
      if(!this.product){
        this.toastr.error("No Product Available for this productID","error")
      }
  }
  uploadStock(){
    this.findProductFromList();
    this.stockListService.addStockBySeller(this.product,this.stock)
    this.stockListService.stockItemList;
  }
}

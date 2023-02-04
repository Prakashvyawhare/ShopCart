import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductDetailsService } from '../service/product-details.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
 table=this.OrdersService.stockItemList;
 productID:any;
 stock:number=0;
 product:any={}
 Products: Array<any> = new Array();
  constructor( public OrdersService:OrdersService,
    public productDetailsService:ProductDetailsService,
    // public ProductsList:ProductsListComponent
    ) { }

  ngOnInit(): void {
    this.OrdersService.stockItemList;
    this.productDetailsService.getProducts().pipe().subscribe({
      next: (response: any) => {
        this.Products = response.products;}})
  }

  // getProductFrom(){
  //   this.productDetailsService.getProduct(this.productID.toString()).subscribe((data:any)=>{
  //   return  this.product = data;
  //   })
  // }
  findProductFromList(){
    this.product=this.Products.find((item)=>{
      return item.id==this.productID})
  }
  uploadStock(){
    this.findProductFromList();
    this.OrdersService.addStockBySeller(this.product,this.stock)
    this.OrdersService.stockItemList;
  }
}

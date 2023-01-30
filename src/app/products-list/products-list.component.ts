import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductDetailsService } from '../service/product-details.service';
import { debounce, debounceTime, find, from, fromEvent, Observable } from 'rxjs';
 
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  
  FilterByCategory() {
    this.filteredProduct = this.Products.filter (
      (x) => x.category == this.selectedCategory || this.selectedCategory == "All")

  }

  errormsg:string;
  constructor(private ProductApi: ProductDetailsService) { }
  Categories: Array<string> = ['All'];
  Products: Array<any> = new Array();
  filteredProduct: Array<any> = new Array();
  selectedCategory: string = '';
  
@ViewChild('search') searchBox!:ElementRef;


  ngOnInit(): void {
    this.ProductApi.getProducts().pipe().subscribe({
      next: (response: any) => {
        this.Products = response.products;
        this.filteredProduct = this.Products;
        // this.Categories = this.Products;


        from(this.Products).subscribe((p) => {
          if (!this.Categories.includes(p.category))
            this.Categories.push(p.category)
        }); 
        from(this.Categories).subscribe(() => {
          this.selectedCategory = this.Categories[0];
          this.FilterByCategory();

        });
        fromEvent(this.searchBox.nativeElement,'input').pipe(debounceTime(300)).subscribe({next: (res:any)=>{
          this.filteredProduct= this.Products.filter(x=> x.title.includes(res.target.value)&&(x.category==this.selectedCategory||this.selectedCategory=='All'));
  
        }, error: () =>{console.log("Page not found")}
            });

      }, error: () =>{ this.errormsg="Server not responding....,"
        console.error("error")}
    });

    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe(Response=>console.log(Response)
    // )

 
  }

}


    
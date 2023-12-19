import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[ProductsService]
})
export class HomeComponent implements OnInit{
  productList:any;
  categoryMobiles:any;

  constructor(private productsService: ProductsService, private router:Router){}
  ngOnInit() {
    this.getProductsList();
  }

  getProductsList(){
    this.productsService.getProductsList().subscribe(res =>{ this.productList = res;
    });
    this.productList = this.productList.map((res:any) => ({
      ...res,
      productPriceAfterDiscount : res?.productPrice/res?.productDiscount}))
  }

  categoryFilter(categoryName:string){
    debugger
    this.getProductsList();
   
  }

  selectItem(item:any){
    this.router.navigate(['/selectItem'],{queryParams:item})
  }

}

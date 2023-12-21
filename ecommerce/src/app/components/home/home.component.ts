import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink, RouterOutlet, NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[ProductsService]
})
export class HomeComponent implements OnInit{
  p: number = 1;
  productList:any =[];
  categoryMobiles:any = [];
  category:string = '';

  constructor(private productsService: ProductsService, private router:Router, private route: ActivatedRoute){
    debugger
  }
  ngOnInit() {
    debugger
    this.getProductsList();
    // if(this.route.queryParams.subscribe(res => {this.category = res['category']})){
    //   this.categoryFilter(this.category)
    // }
  }

  getProductsList(){
    debugger
    this.productsService.getProductsList().subscribe(res =>{ this.productList = res;
    });
    this.productList = this.productList.map((res:any) => ({
      ...res,
      productPriceAfterDiscount : res?.productPrice/res?.productDiscount}))
  }

  categoryFilter(categoryName:string){
    this.getProductsList();
    debugger
    for(let i =0; i<=this.productList.length-1;i++){
      if(this.productList[i].categoryName == categoryName){
        this.categoryMobiles.push(this.productList[i])
      }
    }

    this.productList = [...this.categoryMobiles];
   
  }

  selectItem(item:any){
    this.router.navigate(['/selectItem'],{queryParams:item})
  }

}

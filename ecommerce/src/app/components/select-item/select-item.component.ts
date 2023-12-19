import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-select-item',
  standalone: true,
  imports: [CommonModule , HeaderComponent],
  templateUrl: './select-item.component.html',
  styleUrl: './select-item.component.css',
  providers:[ProductsService]
})
export class SelectItemComponent implements OnInit{
  selectItem:any;

  constructor(private productsService: ProductsService, private router:Router, private route: ActivatedRoute){
    
  }
  ngOnInit() {
    this._selectItem();
  }

  _selectItem(){
    this.route.queryParams.subscribe(res => this.selectItem = res)
  }

  addToCart(){
    this.productsService.addItemToCart(this.selectItem).subscribe(res => console.log(res));
    this.router.navigate(['/viewCart'],{queryParams:this.selectItem})
  }
  buyNow(){
    this.productsService.placedOrders(this.selectItem).subscribe(res => console.log(res));
    this.router.navigate(['/selectedItem'],{queryParams:this.selectItem})
  }

}

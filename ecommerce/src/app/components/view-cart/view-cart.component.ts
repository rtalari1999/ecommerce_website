import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NgFor, NgIf],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css',
  providers: [ProductsService]
})
export class ViewCartComponent implements OnInit {
  cartList: any;
  placedOrderList: any;
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getViewCart();
    this._getPlacedOrders();
  }

  getViewCart() {
    this.productsService.getAddItemCartList().subscribe(res => {
      this.cartList = res;
    })
  }

  _getPlacedOrders() {
    this.productsService.getPlacedOrders().subscribe(res => {
      this.placedOrderList = res;
    })
  }

  cancelOrder(id: number) {
    this.productsService.deletePlacedOrders(id).subscribe((res: any) => {
      this._getPlacedOrders();
    });

  }

  removeFromCart(id: number) {
    this.productsService.deleteItemFromCart(id).subscribe((res: any) => {
      this.getViewCart();
    });
  }

  placeOrder(id: number,product:any) {
    debugger
    this.productsService.placedOrders(product).subscribe(res => {
      console.log(res)
      this._getPlacedOrders();
      this.removeFromCart(id);
    });
  }
}

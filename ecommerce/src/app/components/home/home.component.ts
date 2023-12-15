import { Component, Injector, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

const productList = [
  {
      "id": 1,
      "title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI Triple Camera",
      "description": "",
      "cost": 0,
      "discount": "25%",
      "delivery_date": "Tomorrow, 15 December"
  },
  {
      "id": 1,
      "title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI Triple Camera",
      "description": "",
      "cost": 0,
      "discount": "25%",
      "delivery_date": "Tomorrow, 15 December"
  },
  {
      "id": 1,
      "title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI Triple Camera",
      "description": "",
      "cost": 0,
      "discount": "25%",
      "delivery_date": "Tomorrow, 15 December"
  },
  {
      "id": 1,
      "title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI Triple Camera",
      "description": "",
      "cost": 0,
      "discount": "25%",
      "delivery_date": "Tomorrow, 15 December"
  },
  {
      "id": 1,
      "title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI Triple Camera",
      "description": "",
      "cost": 0,
      "discount": "25%",
      "delivery_date": "Tomorrow, 15 December"
  },
  {
      "id": 1,
      "title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI Triple Camera",
      "description": "",
      "cost": 0,
      "discount": "25%",
      "delivery_date": "Tomorrow, 15 December"
  },
  {
      "id": 1,
      "title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | 90Hz Display | 50MP AI Triple Camera",
      "description": "",
      "cost": 0,
      "discount": "25%",
      "delivery_date": "Tomorrow, 15 December"
  }
]


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:  [ ProductService ]
})
export class HomeComponent  implements OnInit {
  productList1:any = [];
  productList: any;

  constructor(
    private productService: ProductService
  ){
  this.productList1 = productList;
  }
  ngOnInit() {
    this.getProductList();
  }

  getProductList(){
    this.productService.getAllProducts().subscribe(res => {
      this.productList = res;
      console.log(res)
    })
  }

}

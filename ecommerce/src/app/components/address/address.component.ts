import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
  providers:[ProductsService]
})
export class AddressComponent implements OnInit{
addressDetails:any;

addAddress:boolean = false;
constructor(private productsService: ProductsService, private router:Router, private route: ActivatedRoute){}

  ngOnInit() {}

  addAddressDetails() {
    this.addAddress = true;
  }

  cancel(){
    this.addAddress =false;
  }
  deliverAddress(){

  }

  saveAddress(){

  }

}

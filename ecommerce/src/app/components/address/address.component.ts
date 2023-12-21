import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit{
addressDetails:any;

addAddress:boolean = false;
  constructor(){}

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

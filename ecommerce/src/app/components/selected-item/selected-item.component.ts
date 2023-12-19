import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-item',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './selected-item.component.html',
  styleUrl: './selected-item.component.css'
})
export class SelectedItemComponent implements OnInit{
  placedOrder:boolean = false;
  selectedItem:any;
  constructor(private router: Router, private route: ActivatedRoute){

  }
  ngOnInit() {
    this._selectItem();
  }

  _selectItem(){
    this.route.queryParams.subscribe(res =>{ this.selectedItem = res});
  }

  placeOrder(){
    this.placedOrder = true;
    this.openCart();
  }

  openCart(){
    this.router.navigate(['/viewCart'],{queryParams:this.selectedItem});
  }

}

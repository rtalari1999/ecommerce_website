import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  providers:[ProductsService]
})
export class PaymentComponent {
  constructor(private productsService: ProductsService, private router:Router, private route: ActivatedRoute){}

}

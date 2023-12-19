import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent,HomeComponent,RouterLink,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductsService]
})
export class AppComponent {
  title = 'ecommerce';
  obj = {
    "id":14,
    "productId": 14,
    "productSku": "Raju Talari",
    "productName": "Apple 2022 iPad Air M1 Chip 10.9-inch, Wi-Fi, 256GB",
    "productPrice": 72500,
    "productShortName": "Apple 2022 iPad Air M1",
    "productDescription": "27.69 cm (10.9-inch) Liquid Retina display1 with True Tone, P3 wide colour and an anti-reflective coating Apple M1 chip with Neural Engine 12MP Wide camera 12MP Ultra Wide front camera with Center Stage Up to 256GB of storage",
    "createdDate": "2023-12-13T20:01:24.997",
    "deliveryTimeSpan": "3 week",
    "categoryId": 3,
    "productImageUrl": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61-3k7FKQRL._SX679_.jpg",
    "categoryName": "Tablet"
  }
}

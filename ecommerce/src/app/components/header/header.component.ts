import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent,HomeComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[ProductsService]
})
export class HeaderComponent {
  constructor(private productsService: ProductsService, private router:Router){}

}

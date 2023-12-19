import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers:[HomeComponent]
})
export class SidebarComponent {
  @ViewChild(HomeComponent,  {static:true})'HomeComponent':HomeComponent;
  constructor(private router: Router, public homeComponent: HomeComponent ){}
  
  getCategoryList(category: string){
    debugger
    this.homeComponent.categoryFilter(category);
  }



}

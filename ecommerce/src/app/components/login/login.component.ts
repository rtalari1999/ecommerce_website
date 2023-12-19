import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,HomeComponent,DashboardComponent,RouterLink,SidebarComponent,SignupComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[ProductsService]
})
export class LoginComponent {
  availableUsers:any;
  profileForm:any;

  constructor(private productsService: ProductsService, private router: Router, private formBuilder: FormBuilder){
    this.profileForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  login(){
    if (this.profileForm?.valid){
    this.productsService.logIn().subscribe(res => {debugger
      this.availableUsers = res;
      this.authenticate(this.availableUsers);
    });
  }
  }
  authenticate(userDetails:any){
    debugger
    loop1:
    for(let i =0;i<=userDetails?.length; i++){
    if(this.profileForm?.value?.email ===userDetails[i]?.email){
      this.router.navigate(['/dashboard'])
      alert('loged')
      break loop1;
    }
    }

  }
}

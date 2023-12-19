import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,HomeComponent,DashboardComponent,RouterLink,SidebarComponent,SignupComponent, LoginComponent,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[ProductsService]
})
export class SignupComponent {
  profileForm:any;
  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private router: Router){
    this.profileForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    });
  }

  signUp(){
    if(this.profileForm?.valid){
    this.productsService.signUp(this.profileForm.value).subscribe(res => alert("Successfully Created account"));
    this.router.navigate(['login'])
    } else {
      alert('Please enter all details');
    }
  }

  authentication(userDetails:any){

  }

}

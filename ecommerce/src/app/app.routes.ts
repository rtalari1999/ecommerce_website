import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SelectItemComponent } from './components/select-item/select-item.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';

export const routes: Routes = [
    {path:'register', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'home', component: HomeComponent},
    {path:'selectItem', component: SelectItemComponent},
    {path:'selectedItem',component:SelectedItemComponent},
    {path:'viewCart',component:ViewCartComponent},
    {path: '',redirectTo: '/login', pathMatch: 'full'}

];

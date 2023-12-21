import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SelectItemComponent } from './components/select-item/select-item.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';

export const routes: Routes = [
    {path:'register', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'home', component: HomeComponent},
    {path:'selectItem', component: SelectItemComponent},
    {path:'selectedItem',component:SelectedItemComponent},
    {path:'address', component:AddressComponent},
    {path:"payment", component:PaymentComponent},
    {path:'viewCart',component:ViewCartComponent},
    {path: '',redirectTo: '/login', pathMatch: 'full'}

];

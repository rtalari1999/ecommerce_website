import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../utility/global';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any[]>(GlobalConstants.All_Product_List);
    
  }

  addToCart(obj:any){
    return this.http.post(GlobalConstants.PRODUCTS_LIST,obj)
  }
}

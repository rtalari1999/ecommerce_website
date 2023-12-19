import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   public behaviorSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
   public content:any = this.behaviorSubject.asObservable();
  constructor(private _http: HttpClient) { }

  getProductsList(){
    let id = 14;
    return this._http.get('/productList');
    //return this._http.put(`/productList/${id}`,obj);
  }

  _selectItem(item:any){
    debugger
    this.behaviorSubject.next(item);
    this.content = this.behaviorSubject.asObservable();
  }

  getSelectItem(){
    debugger
    return this.content;
  }

  signUp(user:any){
    return this._http.post('/users',user);
  }
  logIn(){
    return this._http.get('/users');
  }

  placedOrders(item:any){
    return this._http.post('/placedOrders', item);
  }
  getPlacedOrders(){
    return this._http.get(`/placedOrders`);
  }
  deletePlacedOrders(id:number){
    return this._http.delete('/placedOrders/'+id);
  }

  addItemToCart(item:any){
    debugger
    return this._http.post('/addtoCart',item);
  }
  deleteItemFromCart(id:number){
    debugger
    return this._http.delete('/addtoCart/'+id );
  }
  getAddItemCartList(){
    return this._http.get('/addtoCart');
  }
}

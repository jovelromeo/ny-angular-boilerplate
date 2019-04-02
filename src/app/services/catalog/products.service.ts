import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private _url = "https://www.redjar.com.ar/app/yemaweb/apiv1/get_articulos"
  private _url = "/assets/data/products.json";

  constructor(private http:HttpClient) { }
//vahiculo es marca
  getProducts(modelo:string, vehiculo:string, subgrupo:string):Observable<IProduct[]> {
    // /app/yemaweb/get_articulos
    return this.http.get<IProduct[]>(this._url)
  }

}

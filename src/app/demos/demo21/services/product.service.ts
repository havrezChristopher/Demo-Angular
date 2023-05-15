import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _productEndPoint = 'http://localhost:3000/products';

  constructor (private _httpClient: HttpClient) { }

  get (): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productEndPoint);
  }

  getById (id: number): Observable<Product> {
    return this._httpClient.get<Product>(this._productEndPoint + '/' + id);
  }

  add (product: Product): Observable<void> {
    return this._httpClient.post<void>(this._productEndPoint, product);
  }

  delete (id: number): Observable<void> {
    return this._httpClient.delete<void>(this._productEndPoint + '/' + id);
  }

  update (id: number, product: Product): Observable<void> {
    return this._httpClient.put<void>(this._productEndPoint + '/' + id, product);
  }

  patch (id: number, product: Product): Observable<void> {
    return this._httpClient.patch<void>(this._productEndPoint + '/' + id, product);
  }

}

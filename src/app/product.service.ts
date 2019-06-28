import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Products } from  './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

private _url:string='asset/ProductService.php';
getProduct():Observable<Products[]>
{
  return this.http.get<Products[]>(this._url);
}
  constructor(private http: HttpClient) { }
}

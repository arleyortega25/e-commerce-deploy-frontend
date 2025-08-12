import { inject, Injectable } from '@angular/core';
import { Product as PM } from '../../shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http= inject(HttpClient)
  private readonly baseUrl = 'https://e-commerce-deploy-backend-20j6.onrender.com/products'
  getAll():Observable<PM[]>{
    return this.http.get<PM[]>(this.baseUrl)
  }
  getById(id:string):Observable<PM>{
    return this.http.get<PM>(`${this.baseUrl}/${id}`)
  }
}

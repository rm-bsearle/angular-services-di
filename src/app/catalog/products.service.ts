import { Product } from '@shared/product.model';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products');
  }
}

import { Product } from '@shared/product.model';
import { IProductsService } from '@shared/products.service.interface';
import { Observable, of } from 'rxjs';
import { engineers } from './squad-catalog/engineers';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EngineersService implements IProductsService {
  getProducts(): Observable<Product[]> {
    return of(engineers);
  }
}

import { Observable } from "rxjs";
import { Product } from "./product.model";
import { InjectionToken } from "@angular/core";

export const IProductsServiceToken = new InjectionToken<IProductsService>('IProductsService');

export interface IProductsService {
  getProducts(): Observable<Product[]>;
}

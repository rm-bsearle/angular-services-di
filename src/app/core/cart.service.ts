import { computed, Injectable, InjectionToken, signal } from '@angular/core';
import { Product } from '@shared/product.model';

type CartOptions = {
  persistanceType: string,
  persistanceKey: string,
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = signal<Product[]>([]);
  private cartOptions: CartOptions = {
    persistanceType: 'local',
    persistanceKey: 'cart',
  }

  constructor() {
    if (this.cartOptions && this.cartOptions.persistanceType === 'local' ) {
      const cartString = localStorage.getItem(this.cartOptions.persistanceKey);
      const cart = cartString ? JSON.parse(cartString) as Product[] : [];
      this.cartItems.set(cart);
    }
  }

  get cart() {
    return this.cartItems.asReadonly();
  }

  add(product: Product) {
    this.cartItems.update((oldCart) => [...oldCart, product]);
    this.storeCart();
  }

  remove(product: Product) {
    this.cartItems.update(oldCart => oldCart.filter(p => p !== product));
    this.storeCart();
  }

  private storeCart() {
    if (this.cartOptions && this.cartOptions.persistanceType === 'local') {
      localStorage.setItem(
        this.cartOptions.persistanceKey,
        JSON.stringify(this.cartItems())
      );
    }
  }

  get cartTotal() {
    return computed( () => this.cartItems().reduce((prev, next) => {
        let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
        return prev + next.price * discount;
      }, 0)
    )
  }
}

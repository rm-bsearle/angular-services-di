import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from '@core/site-header/site-header.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from '@catalog/catalog.module';
import { provideHttpClient } from '@angular/common/http';
import { CART_OPTIONS_TOKEN, CartOptions, CartService } from '@core/cart.service';
import { IProductsServiceToken } from '@shared/products.service.interface';
import { EngineersService } from './squad/engineers.services';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CatalogModule],
  providers: [
    provideHttpClient(),
    // {
    //   provide: IProductsServiceToken,
    //   useClass: EngineersService,
    // },
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistanceType: 'local', persistanceKey: 'cart' }
    },
    {
      provide: CartService,
      useFactory: (cartOptions: CartOptions) => { return new CartService(cartOptions)},
      deps: [CART_OPTIONS_TOKEN]
    }
    // Could also provide the service using just the class, as a shorthand for the longer form below:
    // CartService,
    // {
    //   // Can use the class directly as the token
    //   provide: CartService,
    //   useFactory: () => {
    //     return new CartService();
    //   }
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

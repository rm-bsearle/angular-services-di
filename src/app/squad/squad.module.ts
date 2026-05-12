import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { CART_OPTIONS_TOKEN, CartService } from '@core/cart.service';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistanceType: 'local', persistanceKey: 'squad-cart' }
    },
    CartService,
  ],
})
export class SquadModule { }

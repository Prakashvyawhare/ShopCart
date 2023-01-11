import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftCardsRoutingModule } from './gift-cards-routing.module';
import { GiftCardsComponent } from './gift-cards.component';
import { EGiftCardComponent } from '../e-gift-card/e-gift-card.component';
import { PhysicalGiftCardComponent } from '../physical-gift-card/physical-gift-card.component';


@NgModule({
  declarations: [
    GiftCardsComponent,
    EGiftCardComponent,
    PhysicalGiftCardComponent
  ],
  imports: [
    CommonModule,
    GiftCardsRoutingModule
  ]
})
export class GiftCardsModule { }

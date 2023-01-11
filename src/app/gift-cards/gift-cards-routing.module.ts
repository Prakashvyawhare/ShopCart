import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EGiftCardComponent } from '../e-gift-card/e-gift-card.component';
import { PhysicalGiftCardComponent } from '../physical-gift-card/physical-gift-card.component';
import { GiftCardsComponent } from './gift-cards.component';

const routes: Routes = [{ path: '',
 component: GiftCardsComponent
},
{
  path: "eGiftCards",
  component: EGiftCardComponent
},
{
  path: "physicalGiftCards",
  component: PhysicalGiftCardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftCardsRoutingModule { }

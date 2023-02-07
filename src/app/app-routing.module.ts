import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSellerGuard } from './auth-seller.guard';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ObservableComponent } from './observable/observable.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PromiseComponent } from './promise/promise.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: 'Products',
    component : ProductsListComponent,
    // children: [
    //   {
    //     path : 'ProductDetails/:id',
    //     component : ProductDetailsComponent
    //   }
    // ]
  },
  {
    path: 'Promise',
     component: PromiseComponent
  },
  {
    path: 'Observable',
    component: ObservableComponent
  },{
    path: 'carts/Products',
    redirectTo:'Products'
    
  },
  {
    path: 'updateStock',
    component: UpdateStockComponent,
    canActivate: [AuthSellerGuard]
  },
  {
    path: 'carts',
    component : CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Orders',
    component:MyOrdersComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path : 'Products/Order/:id',
  //   component : CartComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path : 'Products/ProductDetails/:id',
    component : ProductDetailsComponent
  },
  // {
  //   path : 'Customer',
  //   component: CustomerDetailsComponent
  // },
  {
    path: 'NewUser',
    component: NewUserComponent,
    // children:[
    //   {
    //     path:"login",
    //     component : LoginComponent
    //   }
    // ]
  },
  {
    path:"login/NewUser",
    redirectTo: "NewUser",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "NewUser/login",
    redirectTo: "login",
    pathMatch : "full"
  },
  {
    path: "UserDetails",
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'giftCards', loadChildren: () => import('./gift-cards/gift-cards.module').then(m => m.GiftCardsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

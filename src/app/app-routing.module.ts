import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ObservableComponent } from './observable/observable.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PromiseComponent } from './promise/promise.component';
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
  },
  {
    path: 'Order',
    component : CartComponent
  },
  {
    path : 'Products/Order/:id',
    component : CartComponent
  },
  {
    path : 'Products/ProductDetails/:id',
    component : ProductDetailsComponent
  },
  {
    path : 'Customer',
    component: CustomerDetailsComponent
  },
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
    component: UserDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
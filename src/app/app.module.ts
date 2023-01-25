import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { FormsModule } from '@angular/forms';
import { ObservableComponent } from './observable/observable.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CaptchaDirective } from './captcha.directive';
import { UserValidationDirective } from './user-validation.directive';
import { DoubliPasswordDirective } from './doubli-password.directive';
import { ModelComponent } from './model/model.component';
import { LoginComponent } from './login/login.component';
import { OldUserLoginDirective } from './old-user-login.directive';
import { ExistingpasswordDirective } from './existingpassword.directive';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReviewComponent } from './review/review.component';
import { LoginCaptchaDirective } from './login-captcha.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsListComponent,
    CartComponent,
    ProductDetailsComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    CustomerDetailsComponent,
    NewUserComponent,
    CaptchaDirective,
    UserValidationDirective,
    DoubliPasswordDirective,
    ModelComponent,
    LoginComponent,
    OldUserLoginDirective,
    ExistingpasswordDirective,
    UserDetailsComponent,
    ReviewComponent,
    LoginCaptchaDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

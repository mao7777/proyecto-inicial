import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {UserService} from "../providers/user-service";
import {ProductService} from "../providers/product-service";
import {RegisterUser} from '../pages/register-user/register-user';
import {OptionsPage} from '../pages/options/options';
import {Login} from '../pages/login/login';
import {ForgotPassword} from '../pages/forgot-password/forgot-password';
import {Home} from '../pages/home/home';
import {ProfileDetail} from '../pages/profile-detail/profile-detail';
import {EditProfile} from '../pages/edit-profile/edit-profile';
import {ProductDetail} from '../pages/product-detail/product-detail';
import {EditProduct} from '../pages/edit-product/edit-product';
import {CreateProduct} from '../pages/create-product/create-product';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    RegisterUser,
    OptionsPage,
    Login,
    ForgotPassword,
    Home,
    ProfileDetail,
    EditProfile,
    ProductDetail,
    EditProduct,
    CreateProduct
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    RegisterUser,
    OptionsPage,
    Login,
    ForgotPassword,
    Home,
    ProfileDetail,
    EditProfile,
    ProductDetail,
    EditProduct,
    CreateProduct
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserService, ProductService, Storage]
})
export class AppModule {}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {HomeComponent} from "./component/home.component";
import {APP_BASE_HREF} from "@angular/common";
import { ProductComponent } from './component/product.component';
import { UserComponent } from './component/user.component';
import { ProductDetailComponent } from './component/product-detail.component';
import { UserDetailComponent } from './component/user-detail.component';

import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
//import {InMemoryProductService} from "./mock/in-memory-product.service";
import {ProductService} from "./service/product.service";

//import {InMemoryUserService} from "./mock/in-memory-user.service";
import {UserService} from "./service/user.service";


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule//,
      //InMemoryWebApiModule.forRoot(InMemoryProductService),
      //InMemoryWebApiModule.forRoot(InMemoryUserService)
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ProductComponent,
      ProductDetailComponent,
      UserComponent,      
      UserDetailComponent
  ],

  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }, ProductService, UserService],

    
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

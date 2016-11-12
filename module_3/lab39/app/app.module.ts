import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./routing/app-routing.module";
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent }   from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import { UserDetailComponent } from './component/user-detail.component';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
/*import {InMemoryProductService} from "./mock/in-memory-product.service";*/
import {ProductService} from "./service/product.service";
import {UserService} from "./service/user.service";


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule/*,
      InMemoryWebApiModule.forRoot(InMemoryProductService, {delay: 500})*/,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent,
      UserDetailComponent
  ],
    providers: [ProductService,UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

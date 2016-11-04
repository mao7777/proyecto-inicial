import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {APP_BASE_HREF} from "@angular/common";
import {ProductListComponent} from "./component/product-list.component";
import {CustomerListComponent} from "./component/customer-list.component";
/*import {ProductDetailComponent} from "./component/product-detail.component";*/
/*import {CustomerDetailComponent} from "./component/customer-detail.component";*/


@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      ProductListComponent,
      /*ProductDetailComponent,*/
      CustomerListComponent
      /*CustomerDetailComponent*/
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }

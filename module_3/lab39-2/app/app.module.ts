import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './component/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {APP_BASE_HREF} from "@angular/common";
import {ProductListComponent} from "./component/product-list.component";
import {ProductDetailComponent} from "./component/product-detail.component";
import {UserListComponent} from "./component/user-list.component";
import {UserDetailComponent} from "./component/user-detail.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule
  ],
  declarations: [
      AppComponent,
      ProductListComponent,
      ProductDetailComponent,
      UserListComponent,
      UserDetailComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }

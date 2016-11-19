import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { List2Page } from '../pages/list2/list2';
import {ProductListComponent} from "./product-list.component";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    ProductListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    ProductListComponent
  ],
  providers: []
})
export class AppModule {}

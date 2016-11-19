import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { ProductListPage } from '../pages/page2/page2';
import { UserListPage } from '../pages/page3/page3';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    ProductListPage,
    UserListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    ProductListPage,
    UserListPage
  ],
  providers: []
})
export class AppModule {}

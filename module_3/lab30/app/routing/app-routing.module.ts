import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductListComponent} from "../component/product-list.component";
import {CustomerListComponent} from "../component/customer-list.component";
import {LineitemListComponent} from "../component/lineitem-list.component";
/*import {ProductDetailComponent} from "../component/product-detail.component";*/
/*import {CustomerDetailComponent} from "../component/customer-detail.component";*/
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
   /* { path: 'product/detail/:id', component: ProductDetailComponent },*/
  /*  { path: 'lineitem-list', component: LineitemListComponent },*/
    { path: 'customer-list', component: CustomerListComponent }
    /*{ path: 'customer/detail/:id', component: CustomerDetailComponent }*/
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
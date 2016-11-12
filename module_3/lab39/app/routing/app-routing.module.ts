import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
//import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";
//import {UserListComponent} from "../component/user-list.component";
import {UserDetailComponent} from "../component/user-detail.component";
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: 'product-list', component: ProductListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    //{ path: 'user-list', component: UserListComponent },
    { path: 'user/detail/:id', component: UserDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
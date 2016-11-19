import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { List2Page } from '../list2/list2';
import { ProductListComponent } from '../app/product-list.component';
import {ProductService} from "../providers/service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selected:any = false;

  constructor(public navCtrl: NavController) {
    
  }

  public product: any = {
  	id: 2,
  	name: "iphone",
  	type: "Galaxy",
  	quantity: 4400,
  	price: 500000
  }

  loadInfo() {
  	this.selected = true;
  }

  loadList() {
  	this.navCtrl.push(ListPage);
  }

  load2List() {
    this.navCtrl.push(List2Page);
  }

 /*load3List() {
    this.navCtrl.push(ProductListComponent);
  }*/

}

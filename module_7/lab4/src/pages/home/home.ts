import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { List2Page } from '../list2/list2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selected:any = false;

  constructor(public navCtrl: NavController) {
    
  }

  public product: any = {
  	id: 1,
  	name: "phone",
  	type: "any",
  	quantity: 4000,
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


}

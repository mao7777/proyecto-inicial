import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  public product: any = {
  	id: 1,
  	name: "phone",
  	type: "any",
  	quantity: 4000,
  	price: 500000
  }

}

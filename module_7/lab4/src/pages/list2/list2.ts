import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the List2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html'
})
export class List2Page {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello List2Page Page');
  }

}

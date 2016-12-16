import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import {RegisterUser} from '../register-user/register-user';
import {Login} from '../login/login';

/*
  Generated class for the Options page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {

  constructor(public navCtrl: NavController,private viewCtrl: ViewController) {}
  
  ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

  ionViewDidLoad() {
    console.log('Hello OptionsPage Page');
  }

  goToRegister()
  {
  	this.navCtrl.push(RegisterUser);
  }

  goToLogin()
  {
    this.navCtrl.push(Login);
  }



}

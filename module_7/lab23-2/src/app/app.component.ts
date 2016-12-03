import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {UserService} from '../providers/service';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
 templateUrl: 'app.html'
 //template: `<ion-nav [root]="rootPage"></ion-nav>`

})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public userService: UserService) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
       this.userService.openDatabase()
        .then(() => this.userService.createTable())
        .then(() => {
          //this.rootPage = HomePage;
          this.rootPage = TabsPage;
        })
    });
  }
}

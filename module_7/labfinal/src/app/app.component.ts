import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {OptionsPage} from '../pages/options/options';
import {Home} from '../pages/home/home';
import {ProfileDetail} from '../pages/profile-detail/profile-detail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public storage: Storage) {
    this.sessionActive();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      //{ title: 'Opciones', component: OptionsPage },
      { title: 'Home', component: Home },
      { title: 'User Profile', component: ProfileDetail }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  sessionActive(){
    this.storage.get("cookie").then(cookie => {
      console.log('cookie: ' + cookie);       
      if(cookie != null && cookie != ''){
        this.rootPage = Home;
      }else{
        this.rootPage = OptionsPage;
      }
    });
  }

}

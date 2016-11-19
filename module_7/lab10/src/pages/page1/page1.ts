import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProductListPage} from '../page2/page2';
import { UserListPage} from '../page3/page3';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
    
  }

  ListProducts()
  {
    let profileModal = this.modalCtrl.create(ProductListPage);
   profileModal.present();
   }

   ListUsers()
  {
    let profileModal = this.modalCtrl.create(UserListPage);
   profileModal.present();
   }

}

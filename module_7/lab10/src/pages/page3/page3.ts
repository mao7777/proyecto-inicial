import { Component } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from "../../providers/user-service";
import { NavController, ViewController } from 'ionic-angular';
/*import { ProductDetailPage } from '../product-detail/product-detail';
*/
/*
  Generated class for the ProductList page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/ 
@Component({
  selector: 'page-user-list',
  templateUrl: 'page3.html',
  providers: [UserService]
})
export class UserListPage {

  title: string = "los usuarios del Año";
    selected: User;
    users: User[];

    constructor(public navCtrl: NavController, public userService: UserService, public viewCtrl: ViewController) {

    }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },

            error => {
                console.log(error);
            }
        );
    }

    /*onSelect(user: User){
        this.selected = user;
        this.navCtrl.push(UserDetailPage, {
            id: user.id
          });
    }*/

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.userService.create(name)
            .subscribe(user => {
                this.users.push(user);
                this.selected = null;
            });
        this.getUsers();   
    }
   
    ionViewDidLoad() {
      console.log('Hello UserListPage Page');
      this.getUsers();
    }

    dismiss() {
    this.viewCtrl.dismiss();
  }


}
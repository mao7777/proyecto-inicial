import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {EditProfile} from '../edit-profile/edit-profile';
import {OptionsPage} from '../options/options';

/*
  Generated class for the ProfileDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-detail',
  templateUrl: 'profile-detail.html'
})
export class ProfileDetail {
	email: string;
	user: User = new User();

  constructor(public navCtrl: NavController, public storage: Storage, private userService: UserService, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello ProfileDetailPage Page');
    this.storage.get("email").then(email => {
      console.log(email); 
      this.userService.getUser(email).subscribe(user=>this.user=user),
                error => {
                console.log(error);
  		}
    });
  }

  edit(){
  	this.navCtrl.push(EditProfile);
  }

  logout(){
  	let prompt = this.alertCtrl.create({
      title: 'Cerrar Sesión',
      message: "Desea cerrar su sesión?",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Acceptar',
          handler: data => {
          	this.storage.set("email", "");
          	this.storage.set("cookie", "");
            this.navCtrl.push(OptionsPage);            
            console.log('Accept clicked');
          }
        }
      ]
    });
    prompt.present();

    }

  

  delete(): void {
      let prompt = this.alertCtrl.create({
      title: 'Eliminar Cuenta',
      message: "Desea eliminar su cuenta?",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Acceptar',
          handler: data => {

            this.userService.delete(this.user)
            .subscribe(
                response => {console.log(response); 
                  //this.viewCtrl.dismiss();
                  this.storage.set("email", "");
          		  this.storage.set("cookie", "");
                  this.navCtrl.push(OptionsPage);  
                                  
                },
                err => { console.log(err)});
            console.log('Accept clicked');
          }
        }
      ]
    });
    prompt.present();

    }
}

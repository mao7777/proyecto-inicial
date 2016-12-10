import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {ProfileDetail} from '../profile-detail/profile-detail';


/*
  Generated class for the EditProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfile {
	email: string;
	user: User = new User();

  constructor(public navCtrl: NavController, public storage: Storage, private userService: UserService, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello EditProfilePage Page');
    this.storage.get("email").then(email => {
      console.log(email); 
      this.userService.getUser(email).subscribe(user=>this.user=user),
                error => {
                console.log(error);
  		}
    });
  }

  save(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirmar Actualización',
      message: "Desea actualizar sus datos?",
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

            this.userService.update(this.user)
            .subscribe(
                response => {console.log(response);
                  this.navCtrl.push(ProfileDetail);
                  
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

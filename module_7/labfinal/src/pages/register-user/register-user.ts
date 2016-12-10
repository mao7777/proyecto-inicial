import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {OptionsPage} from '../options/options';


/*
  Generated class for the RegisterUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
  providers: [UserService]
})
export class RegisterUser {

	user: User= new User();

  constructor(public navCtrl: NavController, private userService: UserService, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterUserPage Page');
  }

    add(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirmar Registro',
      message: "Quiere resgistrarse en el sistema?",
     // inputs: [
     //   {
     //     name: 'title',
     //     placeholder: 'Title'
     //   },
     // ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {

            this.userService.create(this.user)
            .subscribe(
                response => {console.log(response);
                  //this.viewCtrl.dismiss(); 
                  this.navCtrl.push(OptionsPage);
                  
                },
                err => { console.log(err)});
            console.log('Accept clicked');
            //this.viewCtrl.dismiss(); 
          }

        }

      ]
    });
    prompt.present(); 
    }



}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {Login} from '../login/login';

/*
  Generated class for the ForgotPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPassword {
	user: User = new User();

  constructor(public navCtrl: NavController, private param: NavParams, private userService: UserService, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello ForgotPasswordPage Page');
    let email = this.param.get('email');
    this.user.email = email;
  }

  changePassword(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirmar Cambio de Contraseña',
      message: "Quiere cambiar su contraseña?",
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


          	
            this.userService.forgotPassword(this.user.password, this.user.email).subscribe(user=>{
            	this.user=user;
            	console.log(user);
            	this.navCtrl.push(Login);

            }),
                error => {
                console.log(error);
            } 
            console.log('Accept clicked');
            //this.viewCtrl.dismiss(); 
          }
        }
      ]
    });
    prompt.present(); 
    }
}

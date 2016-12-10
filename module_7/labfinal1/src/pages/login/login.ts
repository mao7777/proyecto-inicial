import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {ForgotPassword} from '../forgot-password/forgot-password';
import {Home} from '../home/home';
import { Storage } from '@ionic/storage';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  user:User = new User();

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private userService: UserService, public storage: Storage) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

   goToForgotPassword(email:string)
  {
  	this.navCtrl.push(ForgotPassword, {email: email});
  }

  loginUser(email:string, password:string)
  {
      this.userService.singUpUser(email, password).subscribe(user=>{
        console.log("cookie: " + user.cookie);

        if(user.cookie != ''){
          this.storage.set("email", user.email);
          this.storage.set("cookie", user.cookie);
          this.navCtrl.push(Home);
        }else{          
          let alert = this.alertCtrl.create({
          title: 'usuario Invalido',
          subTitle: 'Verifique su información',
          buttons: ['Aceptar']
          });
          alert.present(); 
        }        

      }),
          error => {
          console.log(error);
      }
  }

}

import { Component } from '@angular/core';
import { NavController, AlertController,ViewController } from 'ionic-angular';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {ForgotPassword} from '../forgot-password/forgot-password';
import {Home} from '../home/home';
import { Storage } from '@ionic/storage';
import {CustomValidators} from '../../validators/custom-validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  user:User;// = new User();
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private userService: UserService, public storage: Storage, public formBuilder: FormBuilder,private viewCtrl: ViewController) 
  {this.user = new User();

    this.loginForm = this.createLoginForm();}
   
   ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }
  
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

   public createLoginForm() {
    return this.formBuilder.group({
      Email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      Password: ['', [Validators.required, Validators.minLength(6), CustomValidators.passwordValidator]]
    });
  }

   goToForgotPassword(email:string)
  {
  	this.navCtrl.push(ForgotPassword, {email: email});
  }

  loginUser()
  {
    this.user.email = this.loginForm.value.Email;
            this.user.password = this.loginForm.value.Password;

      this.userService.singUpUser(this.user.email, this.user.password).subscribe(user=>{
        console.log("cookie: " + user.cookie);
        console.log("usuario: " + user.error);

        if(!isNaN(user.error)){
          let alert = this.alertCtrl.create({
          title: 'usuario Invalido',
          subTitle: 'Verifique su información',
          buttons: ['Aceptar']
          });
          alert.present(); 
          
        }else{   
          this.storage.set("email", user.email);
          this.storage.set("cookie", user.cookie);
          this.navCtrl.push(Home);          
        }        

      }),
          error => {
          console.log(error);
      }
  }

} 

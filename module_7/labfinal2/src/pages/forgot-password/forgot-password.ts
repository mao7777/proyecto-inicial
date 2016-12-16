import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {Login} from '../login/login';
import {CustomValidators} from '../../validators/custom-validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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
  fPassForm: FormGroup;

  constructor(public navCtrl: NavController, private param: NavParams, private userService: UserService, public alertCtrl: AlertController, public formBuilder: FormBuilder) {
    let email = this.param.get('email');
    this.user.email = email;  
    this.fPassForm = this.forgotPasswordForm();
  }

  ionViewDidLoad() {
    console.log('Hello ForgotPasswordPage Page');      
  }

  public forgotPasswordForm() {
    return this.formBuilder.group({
      Email: [this.user.email, [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      Password: ['', [Validators.required, Validators.minLength(6), CustomValidators.passwordValidator]]
    });
  }

  changePassword(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirmar Cambio de Contraseña',
      message: "Quiere cambiar su contraseña?",
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
            this.user.email = this.fPassForm.value.Email;
            this.user.password = this.fPassForm.value.Password;          	
            this.userService.forgotPassword(this.user.password, this.user.email).subscribe(user=>{
            	this.user=user;
            	console.log(user);
            	this.navCtrl.push(Login);

            }),
                error => {
                console.log(error);
            } 
            console.log('Accept clicked');
          }
        }
      ]
    });
    prompt.present(); 
    }
}

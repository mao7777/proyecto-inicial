import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {OptionsPage} from '../options/options';
import {CustomValidators} from '../../validators/custom-validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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

	user: User;//= new User();
  userForm: FormGroup;

  constructor(public navCtrl: NavController, private userService: UserService, public alertCtrl: AlertController, public formBuilder: FormBuilder) {
    this.user = new User();

    this.userForm = this.createUserForm();
  }

  ionViewDidLoad() {
    console.log('Hello RegisterUserPage Page');
  }

   public createUserForm() {
    return this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
      Phone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10), CustomValidators.phoneValidator]],
      Email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      Password: ['', [Validators.required, Validators.minLength(6), CustomValidators.passwordValidator]]
    });
  }

    add(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirmar Registro',
      message: "Quiere resgistrarse en el sistema?",
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
            this.user.firstname = this.userForm.value.FirstName;
            this.user.lastname = this.userForm.value.LastName;
            this.user.phone = this.userForm.value.Phone;
            this.user.email = this.userForm.value.Email;
            this.user.password = this.userForm.value.Password;

            console.log("Nombre: " + this.user.firstname);

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

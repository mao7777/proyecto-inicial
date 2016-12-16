import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {UserService} from "../../providers/user-service";
import { User } from '../../model/user';
import {ProfileDetail} from '../profile-detail/profile-detail';
import {CustomValidators} from '../../validators/custom-validator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public storage: Storage, private userService: UserService, public alertCtrl: AlertController, public formBuilder: FormBuilder) {
    //this.ionViewDidLoad();
    this.userForm = this.createUserForm();
  }

  ionViewDidLoad() {
    console.log('Hello EditProfilePage Page');
    
  }

  ngOnInit()
  {
    this.storage.get("email").then(email => {
      console.log(email); 
      this.userService.getUser(email).subscribe(user=>{this.user=user;
      this.userForm = this.formBuilder.group({
      FirstName: [this.user.firstname, [Validators.required, Validators.minLength(3)]],
      LastName: [this.user.lastname, [Validators.required, Validators.minLength(3)]],
      Phone: [this.user.phone, [Validators.required, Validators.minLength(10),Validators.maxLength(10), CustomValidators.phoneValidator]],
      Email: [this.user.email, [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      Password: [this.user.password, [Validators.required, Validators.minLength(6), CustomValidators.passwordValidator]]
    });
      }),
                error => {

                console.log(error);
      }
    });

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
            this.user.firstname = this.userForm.value.FirstName;
            this.user.lastname = this.userForm.value.LastName;
            this.user.phone = this.userForm.value.Phone;
            this.user.email = this.userForm.value.Email;
            this.user.password = this.userForm.value.Password;

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

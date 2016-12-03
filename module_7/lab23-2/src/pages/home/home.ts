import { Component } from '@angular/core';
import {UserService} from '../../providers/service';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(public navCtrl: NavController, public service: UserService,
              public alertCtrl: AlertController, public userService: UserService) {}

  ionViewDidLoad(){
    this.getAllUsers();
  }

   getAllUsers(){
    this.service.getAll()
      .then(users => {
        console.log(users);
        this.users = users;
      })
  }

  alertNewUser(){
    let alert = this.alertCtrl.create({
      title: 'Crear Usuario',
      message: 'Datos del Usuario',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nuevo Usuario.',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: data => {
            data.completed = false;
            this.service.create(data)
              .then(response => {
                this.users.unshift(data);
              })
              .catch(error => {
                console.error(error);
              })
          }
        }
      ]
    });
    alert.present();
  }

  updateUser(user, index){
    console.log("event");
    user = Object.assign({}, user);
    this.service.update(user)
      .then(response => {
        this.users[index] = user;
      })
      .catch( error => {
        console.error(error);
      })
  }

}

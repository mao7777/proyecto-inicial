import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {ProductService} from "../../providers/product-service";
import { Product } from '../../model/product';
import {Home} from '../home/home';
import {Geolocation} from 'ionic-native';

/*
  Generated class for the CreateProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html'
})
export class CreateProduct {
	product: Product = new Product();

  constructor(public navCtrl: NavController, private productService: ProductService, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello CreateProductPage Page');
  }  

    add(): void {
      let prompt = this.alertCtrl.create({
      title: 'Agregar Producto',
      message: "Desea agregar este producto?",
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


          Geolocation.getCurrentPosition({enableHighAccuracy:true, timeout:2000, maximumAge:5000}).then(resp => {

          this.product.latitude = resp.coords.latitude;
          this.product.longitude = resp.coords.longitude;
          console.log('Latitude= ' + resp.coords.latitude);
          console.log('longitude= ' + resp.coords.longitude);

          this.productService.create(this.product)
            .subscribe(product => {
              console.log(product);
              this.product = product;
              this.navCtrl.push(Home);
            });
           }).catch((error) => {
           console.log('Error getting location', error);
          }); 
            console.log('Accept clicked');
          }
        }
      ]
    });
    prompt.present();        

    }

}

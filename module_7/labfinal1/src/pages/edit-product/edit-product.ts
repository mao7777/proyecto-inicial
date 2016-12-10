import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {ProductService} from "../../providers/product-service";
import { Product } from '../../model/product';
import {ProductDetail} from '../product-detail/product-detail';


/*
  Generated class for the EditProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html'
})
export class EditProduct {
	product: Product;

  constructor(public navCtrl: NavController, private productService: ProductService, private param: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello EditProductPage Page');
    let id = this.param.get('id');
            this.productService.getProduct(id).subscribe(product=>this.product=product),
                error => {
                console.log(error);
  		}
  }

  save(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirmar Actualización',
      message: "Desea actualizar este producto?",
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

            this.productService.update(this.product)
            .subscribe(
                response => {console.log(response);
                  this.navCtrl.push(ProductDetail, {id: this.product.id});
                  
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

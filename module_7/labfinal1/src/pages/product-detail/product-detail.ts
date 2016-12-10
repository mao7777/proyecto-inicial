import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {ProductService} from "../../providers/product-service";
import { Product } from '../../model/product';
import {EditProduct} from '../edit-product/edit-product';
import {Home} from '../home/home';

/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetail {
	product: Product;

  constructor(public navCtrl: NavController, private productService: ProductService, private param: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');
    let id = this.param.get('id');
            this.productService.getProduct(id).subscribe(product=>this.product=product),
                error => {
                console.log(error);
  		}
  }

  edit(){
  	this.navCtrl.push(EditProduct, {id: this.product.id}); 
  }

  delete(): void {
      let prompt = this.alertCtrl.create({
      title: 'Eliminar Producto',
      message: "Desea eliminar este producto?",
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

            this.productService.delete(this.product)
            .subscribe(
                response => {console.log(response); 
                  //this.viewCtrl.dismiss();
                  this.navCtrl.push(Home);  
                                  
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

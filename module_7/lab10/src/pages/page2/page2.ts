import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from "../../providers/product-service";
import { NavController, ViewController } from 'ionic-angular';
/*import { ProductDetailPage } from '../product-detail/product-detail';
*/
/*
  Generated class for the ProductList page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-list',
  templateUrl: 'page2.html',
  providers: [ProductService]
})
export class ProductListPage {

  title: string = "los productos del Año";
    selected: Product;
    products: Product[];

    constructor(public navCtrl: NavController, public productService: ProductService, public viewCtrl: ViewController) {

    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log(error);
            }
        );
    }

    /*onSelect(product: Product){
        this.selected = product;
        this.navCtrl.push(ProductDetailPage, {
            id: product.id
          });
    }*/

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.productService.create(name)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
        this.getProducts();   
    }
   
    ionViewDidLoad() {
      console.log('Hello ProductListPage Page');
      this.getProducts();
    }

    dismiss() {
    this.viewCtrl.dismiss();
  }


}
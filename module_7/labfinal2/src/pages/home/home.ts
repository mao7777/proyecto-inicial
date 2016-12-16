import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import {ProductService} from "../../providers/product-service";
import { Product } from '../../model/product';
import {ProductDetail} from '../product-detail/product-detail';
import {CreateProduct} from '../create-product/create-product';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

	selected: Product;

    products: Product[];

  constructor(public navCtrl: NavController, private productService: ProductService,private viewCtrl: ViewController) {}

    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
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

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
        this.navCtrl.push(ProductDetail, {id: this.selected.id});    
        
    }

    add(): void {
      this.navCtrl.push(CreateProduct);    
    }   

}
 
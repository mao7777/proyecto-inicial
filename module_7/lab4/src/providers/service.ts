import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {PRODUCTS} from "../mock/product-mock";
/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService{
    getProducts(){
        return Promise.resolve(PRODUCTS);
    }
}
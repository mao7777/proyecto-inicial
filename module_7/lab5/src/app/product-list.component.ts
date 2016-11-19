/*import {Component, OnInit} from '@angular/core';
import { Product } from '../app/model/product';
import {ProductService} from "../providers/service";
import {Router} from "@angular/router";

@Component({
    selector: 'product-list-app',
    templateUrl: '../pages/templates/product-list.html',
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private productService: ProductService) {

    }

    getProducts() {
        this.productService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
    }

    
}
*/
import { Component, Input } from '@angular/core';
import { Product } from '../app/model/product';
import {ProductService} from "../providers/service";

@Component({
    selector: 'product-list',
    templateUrl: '../pages/templates/product-list.html'
})

export class ProductListComponent {
    @Input()
    product: Product;

    constructor(private productService: ProductService){

    }

    save(): void {
        this.productService.update(this.product)
            .subscribe(
                response => {console.log(response)},
                err => { console.log(err)});
    }
}


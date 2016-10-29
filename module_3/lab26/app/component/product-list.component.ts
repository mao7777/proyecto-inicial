import { Component, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
	selector: 'product-list',
	templateUrl: 'app/templates/product-list.html'
})

export class ProductListComponent {
	@Input()
	product: Product;
}
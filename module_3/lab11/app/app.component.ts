import { Component } from '@angular/core';

 export class Product {
 	id: number;
 	name: string;
 	description: string;
 	type: string;
 	price: number;
 	quantity: number;
 }

@Component({
  selector: 'my-app',
  template: '<h1>{{product.id}}</h1><br />' + 
  			'<h2>{{product.name}}</h2><br />' +
  			'<h2>{{product.description}}</h2><br />' +
  			'<h2>{{product.type}}</h2><br />' +
  			'<h2>{{product.price}}</h2><br />' +
  			'<h2>{{product.quantity}}</h2><br />'
})
export class AppComponent {
	product: Product = {
		id: 1,
		name: "Galax7 7",
		description: "Granada de mano",
		type: "smartphone",
		price: 500000,
		quantity: 10
	}
}

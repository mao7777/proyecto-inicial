import { Component } from '@angular/core';

 export class User {
 	id: number;
 	name: string;
 	address: string;
 	phone: string;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})

export class AppComponent {
	user: User = {
		id: 11201068,
		name: "Mauricio Vacca",
		address: "Kra 15 86-31",
		phone: "3017162056"
	}
}

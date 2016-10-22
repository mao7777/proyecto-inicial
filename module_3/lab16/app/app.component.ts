import { Component } from '@angular/core';

 export class User {
 	id: number;
 	name: string;
 	address: string;
 	phone: string
 	 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})
export class AppComponent {

	title: string = "Mis users";
    selected: User;
	users: User[] = USERS;
    
     onSelect(user: User) {
        this.selected = user;
    }
}

const USERS: User[] = [
    {
        id: 1234,
        name: "Mauricio Hernán Vacca",
        address: "Chia",
        phone: "3017162056"
    },
    {
        id: 234,
        name: "Nidia Gonzalez",
        address: "Madrid",
        phone: "2573700"
    },
    {
        id: 3453,
        name: "Claudia Garcia",
        address : "Chía",
        phone: "8640000"
    }
];
import { Component } from '@angular/core';
import { Product } from '../model/product';

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que a veces explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que no explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})
export class AppComponent {

    title: string = "Mis productos";
    selected: Product;
    products: Product[] = PRODUCTS;

    onSelect(product: Product) {
        this.selected = product;
    }
}
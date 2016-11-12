import {Injectable} from "@angular/core";
import {PRODUCTS} from "../mock/product-mock";
import {Product} from "../model/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ProductService{
    private productsURI = 'http://138.68.0.83:7070/api/v1/product/list'
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsURI)
            .map(response => response.json() as Product[])
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<Product> {
        return this.getProducts()
            .suscribe(products => products.find(product => product.id === id));
    }
}
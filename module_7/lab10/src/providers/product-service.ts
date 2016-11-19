import { Injectable } from '@angular/core';
import { Product } from "../model/product"
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the ProductService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {

    private productsURI = 'http://138.68.0.83:7070/api/v1/product/';
    private headers : Headers; 

    constructor(private http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getProducts(): Observable<Product[]> {
        const url = this.productsURI + 'list';
        return this.http.get(url)
            .map(response => <Product[]>response.json())
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<Product> {
        const url = this.productsURI + 'detail/' + id;
        return this.http.get(url)
           // .map(response => {response; console.log("Esta es la respuesta: " + response)})
            .map(response => <Product>response.json())
            .catch(this.handleError);
    }

    update(product: Product): Observable<Product> {
        const url = this.productsURI + 'update/' + product.id;
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .map(() => product)
            .catch(this.handleError);
    }

    create (name: string): Observable<Product> {
        let toAdd = JSON.stringify({ 'name': name });
        const url = this.productsURI + 'create';
        return this.http.post(url, toAdd, { headers: this.headers })
            .map(response => <Product>response.json())
            .catch(this.handleError);
    }

    delete (product: Product): Observable<any>{
        const url = this.productsURI + 'delete/' + product.id;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }

}
import { Component, OnInit } from '@angular/core';
import {Student} from '../model/product';
import {ProductService} from '../service/product.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html',
  providers: [ProductService]
})
export class AppComponent implements OnInit {

	constructor(private productService: ProductService){}

	title: string = "Estudiantes";
	selected: Student;
	products: Student[];

	ngOnInit(){
		this.productService.getProducts()
		.then(students => this.students = students)
		.catch(error => console.log(error));
	}

	onSelect(product: Student) {
		this.selected = student;
	}
}
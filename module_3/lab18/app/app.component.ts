import { Component } from '@angular/core';

 export class Ride {
 	units: number;
 	festives: number;
 	ptp: number;
 	default: number;
 	}

@Component({
  selector: 'my-app',
   templateUrl: 'app/templates/product.html'
})

export class AppComponent {
	ride: Ride = {
		units: 50,
		festives: 1900,
		ptp: 1700,
		default: 4100
	}
}

class Vehicle{
	wheel: number;
	fuel: string;
	private color: string;

	constructor(wheel: number, fuel: string, color: string ='white'){
		this.color = color;
		this.fuel=fuel;
		this.wheel=wheel;
	}
}

class Car extends Vehicle {
	constructor(){
		super(6,'gas','red');
	}
}

class Motorcycle extends Vehicle {
	constructor(){
		super(2,'gasolina');
	}
}

var car=new Car();
var motorcycle=new Motorcycle();
console.log(car);
console.log(motorcycle);

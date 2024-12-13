// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';



class Truck extends Vehicle{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  towingCapacity: number;

constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  towingCapacity: number,
  ) {
    
super();
this.vin = vin;
this.color = color;
this.make = make;
this.model = model;
this.year = year;
this.weight = weight;
this.topSpeed = topSpeed;
this.towingCapacity = towingCapacity;
}

override printDetails(): void {
  super.printDetails();
  
  console.log(`VIN: ${this.vin}`);
  console.log(`Color: ${this.color}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight:${this.weight}`);
  console.log(`Top Speed: ${this.topSpeed}`);
  console.log(`Towing Capacity: ${this.towingCapacity}`);
}
  tow(vehicle: Motorbike | Car): void {
    if(vehicle.weight<= this.towingCapacity) {
      console.log(`${vehicle.make} ${vehicle.model} has been towed!`);
    } else {
      console.log('The truck is too heavy to be towed!');
    }
  }
}  

export default Truck;

